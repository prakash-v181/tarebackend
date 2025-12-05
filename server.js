import express from "express";
import "dotenv/config";
import cors from "cors";
import mongoose from "mongoose";
import chatRoutes from "./routes/chat.js";

const app = express();


app.get("/", (req, res) => {
  res.send("Backend is running!");
});

// Render controls the PORT
const PORT = process.env.PORT || 8080;

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api", chatRoutes);

// Connect to DB, then start server
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected with Database!");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (err) {
    console.log("Failed to connect with DB:", err);
  }
};

connectDB();





// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import mongoose from "mongoose";
// import chatRoutes from "./routes/chat.js";

// const app = express();

// const PORT = process.env.PORT || 8080;

// app.listen(PORT, () => {
//   console.log(`server running on ${PORT}`);
// });

// app.use(express.json());
// app.use(cors());

// app.use("/api", chatRoutes);

// app.listen(PORT, () => {
//     console.log(`server running on ${PORT}`);
//     connectDB();
// });

// const connectDB = async() => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI);
//         console.log("Connected with Database!");
//     } catch(err) {
//         console.log("Failed to connect with Db", err);
//     }
// }






// // app.post("/test", async (req, res) => {
// //     const options = {
// //         method: "POST",
// //         headers: {
// //             "Content-Type": "application/json",
// //             "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`
// //         },
// //         body: JSON.stringify({
// //             model: "gpt-4o-mini",
// //             messages: [{
// //                 role: "user",
// //                 content: req.body.message
// //             }]
// //         })
// //     };

// //     try {
// //         const response = await fetch("https://api.openai.com/v1/chat/completions", options);
// //         const data = await response.json();
// //         //console.log(data.choices[0].message.content); //reply
// //         res.send(data.choices[0].message.content);
// //     } catch(err) {
// //         console.log(err);
// //     }
// // });

