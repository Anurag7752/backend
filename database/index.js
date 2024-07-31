const mongoose = require ("mongoose");

mongoose.connect("mongodb+srv://anuragkumar840970:HBdU4NbPvebXb0w3@cluster0.aqhstrk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
).then(() => console.log("mongodb connected successfully..")).catch(error=> console.log(`Error occured: ${error}`));