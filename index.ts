import puppeteer, { Page } from 'puppeteer';
import { Login, LinkedInProfile } from './types';
import { scrapeBasicProfile } from './scraper/basic'; 
import { basicProfileSelectors } from './scraper/selectors';

const login: Login = {
  email: process.env.EMAIL || '',
  password: process.env.PASSWORD || '',
};

const main = async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto('https://linkedin.com/home', { waitUntil: 'domcontentloaded' });

  await page.type('#session_key', login.email);
  await page.type('#session_password', login.password);
  await page.click('[data-id="sign-in-form__submit-btn"]');

  await page.waitForNavigation();

  await page.goto('https://www.linkedin.com/in/natfriedman/');

  const profile = await scrapeBasicProfile(page, basicProfileSelectors);
  console.log('Profile:', profile);

  await browser.close();
};

main();
