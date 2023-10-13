import puppeteer from 'puppeteer';
import { Login } from './utils/types';
import { scrapeBasicProfile } from './scraper/scrapeBasic';
import { scrapeExperiences } from './scraper/scrapeExperiences';
import { basicProfileSelectors, experienceSelectors } from './utils/selectors';

const login: Login = {
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
};


const main = async () => {
  const baseUrl = 'https://www.linkedin.com/in/natfriedman';

  const browser = await puppeteer.launch({
    headless: false,
  });

  const page = await browser.newPage();
  page.setDefaultTimeout(0)

  await page.goto('https://linkedin.com/home', { waitUntil: 'domcontentloaded' });

  await page.waitForSelector('#session_key')
  await page.waitForSelector('#session_password')

  await page.type('#session_key', login.email);
  await page.type('#session_password', login.password);
  await page.click('[data-id="sign-in-form__submit-btn"]');
  
  await page.waitForNavigation();

  await page.goto(baseUrl);
  const profile = await scrapeBasicProfile(page, basicProfileSelectors);
  console.log('Profile:', profile);

  await browser.close()
};

main();
