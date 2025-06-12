const moongoose = require('mongoose');

const ConnectDb = async ()=>{
    try{
        const connection=await moongoose.connect(process.env.Mongo_url)
        console.log(`\n Mongodb connected DB NAME: ${connection.connection.name}`)
    }catch(err){
        console.log('Mongodb connection error', err);
    process.exit(1);
    }

}

module.exports = ConnectDb;
