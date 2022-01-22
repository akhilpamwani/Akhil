// Importing all the required things


const express =require('express')
const cors =require('cors')
const mongoose =require('mongoose')
const Routes =require('./routes/router')
const dotenv = require( 'dotenv')

// Enviroment variable initialised

dotenv.config()

// Cpp and Port Initialisation

const app=express();

const PORT = process.env.PORT || 5000;




// Mongodb Connection 

  
mongoose.connect('mongodb://127.0.0.1:27017/Contact',{
  useNewUrlParser: true,
 
  useUnifiedTopology: true,
  
  

  
})
.then(() => console.log("MongoDB is connected"))
.catch((err) => console.log(err));



// Using all the delared thing


app.use(express.json());
app.use(cors());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// Deploying Website 
if(process.env.NODE_ENV == "production"){
  app.use(express.static("./client/build"));
  const path = require("path");
  app.get("*", (req, res) => {`enter code here`
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));

  })
}
      
// Runnning the Server

app.use('/api',Routes)
app.listen(PORT,()=>{
    console.log(`Server running sucessfully`)
})
