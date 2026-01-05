import  cors from "cors";

const corsOptions = {
    origin: process.env.FRONTEND_URI || "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  
}

export default corsOptions;