import { test, expect } from "@playwright/test";

test.describe("Register User", () => {
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

    // Click on Sign Up button
    await page.locator(".btn-outline-secondary").click();
  });

  test("Register user with existing user", async ({ page }) => {
    // Fill the registration form
    await page.locator("#email").fill("ujan.shakya@grepsr.com");
    await page.locator("#name").fill("Ujan");
    await page.locator("#password").fill("Test@321");
    await page.locator("#confirmPassword").fill("Test@321");

    // Submit form
    await page.locator(".btn-primary").click();

    // Example: check if registration was successful (adjust selector as needed)
    await expect(page.locator(".toast-body")).toHaveText(
      "An account already exists with the same email address"
    );
  });
  test("Validation error in Register user", async ({ page }) => {
    // Submit form
    await page.locator('[data-testid="register-submit"]').click();

    // Example: check if registration was successful (adjust selector as needed)
    await expect(page.locator(".invalid-feedback").nth(0)).toHaveText(
      "Email address is required"
    );
    await expect(page.locator(".invalid-feedback").nth(1)).toHaveText(
      "User name is required"
    );
    await expect(page.locator(".invalid-feedback").nth(2)).toHaveText(
      "Password is required"
    );
    await expect(page.locator(".invalid-feedback").nth(3)).toHaveText(
      "Confirm Password is required"
    );
  });
});
