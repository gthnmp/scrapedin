import { Page } from "puppeteer";
import { UserProfile } from "../types";
import { sanitizeText, extractLocation } from "../utils";

type Selectors = {
  fullName: string;
  title: string;
  location: string;
  photo: string;
};

export const scrapeBasicProfile = async (page: Page, selectors: Selectors): Promise<UserProfile> => {
  const profile: UserProfile = {
    fullName: null,
    title: null,
    location: {
      city: null,
      province: null,
      country: null,
    },
    photo: null,
    url: '',
  };

  const selectorMappings: { [key in keyof Selectors]: (element: ElementHandle<Element>) => Promise<any> } = {
    fullName: async (element) => sanitizeText(await page.evaluate((el) => el.textContent, element)),
    title: async (element) => sanitizeText(await page.evaluate((el) => el.textContent, element)),
    location: async (element) => {
      const locationString = sanitizeText(await page.evaluate((el) => el.textContent, element));
      return extractLocation(locationString);
    },
    photo: async (element) => await page.evaluate((el) => el.getAttribute('src'), element),
  };

  for (const key in selectors) {
    if (Object.prototype.hasOwnProperty.call(selectors, key)) {
      const selector = selectors[key as keyof Selectors];
      try {
        await page.waitForSelector(selector, { timeout: 5000 });
        const element = await page.$(selector);

        if (element) {
          profile[key] = await selectorMappings[key](element);
        }
      } catch (error) {
        // Handle errors if necessary
      }
    }
  }

  return profile;
};
