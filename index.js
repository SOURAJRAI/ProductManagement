const dotenv=require('dotenv');
const app=require('./app');
const ConnectDb =require('./config/db');
const ProductScrapper = require('./scrapper/scrapper.js');
dotenv.config();

const PORT = process.env.PORT || 5000;

ConnectDb();
console.log("Starting initial scrape...");
ProductScrapper();


setInterval(() => {
      console.log("⏰ Running scheduled scrape...");
      ProductScrapper();
    }, 60 * 60 * 1000); 

app.listen(4000,()=>{
    console.log(`Server is running on the port ${PORT}`);
});