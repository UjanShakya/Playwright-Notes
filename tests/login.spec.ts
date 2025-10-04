import { test, expect } from "@playwright/test";

test.describe("Login User", () => {
  test.beforeEach(async ({ page }) => {
    // Block ads before navigation (prevents iframe ads entirely)
    await page.route("**/*", (route) => {
      const url = route.request().url();
      if (url.includes("googleads.g.doubleclick.net")) {
        route.abort();
      } else {
        route.continue();
      }
    });

    // Navigate to app before each test
    await page.goto("https://practice.expandtesting.com/notes/app");

    // Click on login button
    await page.locator(".btn-primary").click();
  });
  test("Login flow", async ({ page }) => {
    // Enter credentials
    await page.locator("#email").fill("ujan.shakya@grepsr.com");
    await page.locator("#password").fill("Test@321");

    // Submit login form
    await page.locator(".btn-primary").click();

    // ✅ Assertion (update selector to match actual UI after login)
    await expect(page.locator('[data-testid="profile"]')).toBeVisible();
    await expect(page.locator('[data-testid="home"]')).toBeVisible();
  });

  test("Validation error in Login flow", async ({ page }) => {
    // Submit login form
    await page.locator('[data-testid="login-submit"]').click();

    // await expect(page.locator(".invalid-feedback").nth(0)).toHaveText(
    //   "Email address is required"
    // );
    // await expect(page.locator(".invalid-feedback").nth(1)).toHaveText(
    //   "Password is required"
    // );
    const errors = page.locator(".invalid-feedback");
    await expect(errors).toHaveText([
      "Email address is required",
      "Password is required",
    ]);
  });
});
