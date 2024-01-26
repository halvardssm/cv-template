import { resolve } from "path";
import { chromium } from "playwright";

async function main() {
  // Launch the browser
  const browser = await chromium.launch();

  // Create a new page
  const page = await browser.newPage();

  // Navigate to your HTML file
  await page.goto("file://" + resolve("dist", "index.html"));

  // Wait for any async content to load (you can customize this based on your HTML)
  await page.waitForLoadState("networkidle");

  // Generates a PDF with 'screen' media type.
  //   await page.emulateMedia({ media: 'screen' });
  // Generate a PDF from the page
  await page.pdf({ path: "cv.pdf", format: "A4" });

  // Close the browser
  await browser.close();
}
main();
