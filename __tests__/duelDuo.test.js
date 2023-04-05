const { Builder, Browser, By, until } = require("selenium-webdriver");

let driver;

beforeEach(async () => {
  driver = await new Builder().forBrowser(Browser.CHROME).build();
});

afterEach(async () => {
  await driver.quit();
});

describe("Duel Duo tests", () => {
  test("page loads with title", async () => {
    await driver.get("http://localhost:8000");
    await driver.wait(until.titleIs("Duel Duo"), 1000);
  });

  test("Draw button Display", async () => {
    await driver.get("http://localhost:8000");
    const drawBtn = await driver.findElement(By.xpath("/html/body/button[2]"));
    await drawBtn.click();
    const choicesOpt = await driver.findElement(By.id("choices"))
    expect(choicesOpt).toBeVisible();
    await driver.sleep(2000);
  });

  test("Player Duo Test", async () => {
    await driver.get("http://localhost:8000");
    const duoBtn = await driver.findElement(By.id("bot-btn"));
    await duoBtn.click();
    const playerDuo = await driver.findElement(By.id("player-duo"));
    expect(playerDuo).toBeVisible();
    await driver.sleep(2000);
  })
});