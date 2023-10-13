import { Page } from "puppeteer";
import { UserProfile, BasicProfileSelectors } from "../types";
import { sanitizeText, extractLocation } from "../utils";

export const scrapeBasicProfile = async (page: Page, selectors: BasicProfileSelectors): Promise<UserProfile> => {
  const profile: UserProfile = {
    fullName: null,
    title: null,
    location: {
      city: null,
      province: null,
      country: null,
    },
    photo: null,
  };

  const selectorMappings: { [key in keyof BasicProfileSelectors]: (element: ElementHandle<Element>) => Promise<any> } = {
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
      const selector = selectors[key as keyof BasicProfileSelectors];
      try {
        await page.waitForSelector(selector, { timeout: 5000 });
        const element = await page.$(selector);

        if (element) {
          profile[key] = await selectorMappings[key](element);
        }
      } catch (error) {
      }
    }
  }

  return profile;
};
