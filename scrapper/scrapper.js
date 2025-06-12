const puppeteer = require('puppeteer');
const Product = require("../models/Product");

const ProductScrapper = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://webscraper.io/test-sites/e-commerce/static/computers/laptops');

  const Products = await page.evaluate(() => {
    const products = document.querySelectorAll('.thumbnail');
    return Array.from(products).map(product => ({
      name: product.querySelector('.title')?.innerText.trim(),
      price: parseFloat(product.querySelector('.price')?.innerText.replace('$', '').trim()),
      description: product.querySelector('.description')?.innerText.trim(),
      rating: parseFloat(product.querySelectorAll('.ws-icon').length.toString()),
    }));
  });
    console.log(`🔍 Scraped ${Products.length} products.`);

  for (const product of Products) {
    const existing = await Product.findOne({ name: product.name });

    if (existing) {
      
      const hasChanged =
        existing.price !== product.price ||
        existing.description !== product.description ||
        existing.rating !== product.rating;

      if (hasChanged) {
        await Product.updateOne({ _id: existing._id }, product);
         console.log(`🔄 Updated: ${product.name}`);
      }
    } else {
      await Product.create(product);
       console.log(`🆕 Inserted: ${product.name}`);
    }
  }

  await browser.close();
  console.log('Scraping complete. Products updated.');
};

module.exports = ProductScrapper;
