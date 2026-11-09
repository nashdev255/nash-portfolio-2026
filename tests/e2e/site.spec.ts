import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("home page has the expected title and main content", async ({ page }) => {
  await page.goto("/");
  await expect(page).toHaveTitle(/YOUR NAME/);
  await expect(page.getByRole("main")).toBeVisible();
  await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
});

test("home page has no automatically detectable serious accessibility violations", async ({ page }) => {
  await page.goto("/");
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"]).analyze();
  expect(results.violations.filter((violation) => ["critical", "serious"].includes(violation.impact ?? ""))).toEqual([]);
});
