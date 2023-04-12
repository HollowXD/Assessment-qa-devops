const { Builder, Browser, By, until } = require("selenium-webdriver");
const Id = require("./Enums");
const chrome = require("selenium-webdriver/chrome");

let driver;

beforeEach(async () => {
  driver = await new Builder()
    .forBrowser(Browser.CHROME)
    .setChromeOptions(new chrome.Options().headless())
    .build();
    await driver.get("http://localhost:8000");
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button Display", async () => {
    const drawBtn = await driver.findElement(By.id("draw"));
    const element = await driver.findElement(By.id("choices"));
    await drawBtn.click();
    await driver.wait(until.elementIsVisible(element), 1000);
  });

  test("Player Duo Test", async () => {
    const duoBtn = await driver.findElement(By.id("bot-btn"));
    await duoBtn.click();
    const playerDuo = await driver.findElement(By.id("player-duo"));
    expect(playerDuo).toBeVisible();
    await driver.sleep(2000);
  })
});