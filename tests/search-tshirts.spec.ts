
import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { SearchResultsPage } from '../pages/SearchResultsPage';

test('Search for T-shirts and verify product', async ({ page }) => {
  // 1. Navigate to the website using HomePage POM
  const homePage = new HomePage(page);
  await homePage.goto();

  // 2. Search for T-shirts using HomePage POM
  await homePage.searchFor('T-shirts');

  // 3. Verify the ‘Faded Short Sleeve T-shirts’ in the list using SearchResultsPage POM
  const searchResultsPage = new SearchResultsPage(page);
  await searchResultsPage.verifyProductVisible('Faded Short Sleeve T-shirts');
});
