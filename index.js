const express = require("express");
const mongoose = require("mongoose");


//connect to mongodb server
const connectDb = async () => {
try {
  const connect = await mongoose.connect("mongodb+srv://root:root@cluster0.y898kjs.mongodb.net/MyDb?retryWrites=true&w=majority&appName=Cluster0");
  console.log(
    "Database connected: ",
    connect.connection.host,
    connect.connection.name
  );
} catch (err) {
  console.log(err);
  process.exit(1);
}
}

// connection function called
connectDb();

//Require Express
const app = express();

const port = process.env.PORT || 5000;

//call router functions
app.use(express.json());
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
