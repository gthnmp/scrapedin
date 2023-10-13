import { Page, ElementHandle } from "puppeteer";
import { sanitizeText, extractLocation } from "../utils";
import { Experience, ExperienceSelectors } from "../utils/types";


export const scrapeExperiences = async (page: Page, selectors: ExperienceSelectors): Promise<Experience[]> => {
  const listContainerSelector = ".pvs-list__paged-list-item.artdeco-list__item.pvs-list__item--line-separated.pvs-list__item--one-column";
  const listContainers: ElementHandle<Element>[] = await page.$$(listContainerSelector);
  // const experiences: Experience[] = [];

  for (const container of listContainers) {
    const experience: Experience = {
      title: null,
      company: null,
      employmentType: null,
      location: null,
      startDate: null,
      endDate: null,
      endDateIsPresent: true,
      description: null,
      duration: null,
    };

    // Extract and format the title
    const titleElement = await container.$(selectors.title);
    if (titleElement) {
      experience.title = await sanitizeText(await titleElement.evaluate((el) => el.textContent));
    }

    // Extract and format the company name and employment type
    const companyElement = await container.$(selectors.company);
    if (companyElement) {
      const companyText = await sanitizeText(await companyElement.evaluate((el) => el.textContent));
      const [companyName, employmentType] = companyText.split(' · ');
      experience.company = companyName;
      experience.employmentType = employmentType;
    }

    // Extract and format the location
    const locationElement = await container.$(selectors.location);
    if (locationElement) {
      const locationString = await sanitizeText(await locationElement.evaluate((el) => el.textContent));
      experience.location = extractLocation(locationString);
    }

    // Extract and format the date, including start date, end date, and duration
    const dateElement = await container.$(selectors.date);
    if (dateElement) {
      const dateText = await sanitizeText(await dateElement.evaluate((el) => el.textContent));
      const [dateRange, duration] = dateText.split(' · ');
      const [startDate, endDate] = dateRange.split(' - ');
      experience.startDate = startDate;
      experience.endDate = endDate;
      experience.duration = duration;
    }

    // Extract and format the description
    const descriptionElement = await container.$(selectors.description);
    if (descriptionElement) {
      experience.description = await sanitizeText(await descriptionElement.evaluate((el) => el.textContent));
    }

    console.log(experience)
    // experiences.push(experience);
  }

  // return experiences;
};
