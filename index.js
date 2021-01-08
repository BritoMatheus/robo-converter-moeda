const puppeteer = require('puppeteer');
const readlineSync = require('readline-sync');

console.log(`Wellcome to Bot coin conversor 💰💰!`);


async function robo() {
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  const cointFrom = readlineSync.question('Informe uma modea base: ') || `dolar`;
  const cointTo = readlineSync.question('Informe uma moeda desejada: ') || `real`;

  const urlPage = `https://www.google.com/search?q=${cointFrom}+para+${cointTo}&oq=dolar+para+real&ie=UTF-8`;
  await page.goto(urlPage);

  const result = await page.evaluate(() => {
    return document.querySelector('.a61j6.vk_gy.vk_sh.Hg3mWc').value;
  });

  console.log(`O valor de 1 ${cointFrom} em ${cointTo} é ${result}`);

  await browser.close();

}

robo();