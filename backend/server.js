require("dotenv").config();
const cors = require('cors')
const express = require('express');
const app = express();
const authRoute = require('./router/auth-router');
const contactRouter = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const connectDb = require('./utils/db');
const errorMiddleware = require("./middlewares/error-middleware");

const corsOptions = {
  origin: "http://localhost:5173",
  method: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
}

app.use(cors(corsOptions))

app.use(express.json());

app.use("/api/auth", authRoute);
app.use("/api/form", contactRouter);
app.use("/api/data", serviceRoute);

app.use(errorMiddleware);


const PORT = 3200;

connectDb().then(()=>{
  app.listen(PORT, () => {
      console.log(`server is running on port ${PORT}`);
    }); 
});