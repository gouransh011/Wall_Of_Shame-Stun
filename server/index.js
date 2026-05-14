const express = require("express"); 
const cors = require("cors");

const snipRoutes = require("./routes/snip_routes"); // Import the routes
const app = express();
const PORT = 5000;  


// cors() allows the React frontend (running on port 5173) to talk to this server
app.use(cors());

// express.json() parses incoming JSON request bodies so we can read req.body that will be used in adding the new snippets in the database
app.use(express.json());

app.get("/", (req,res)=> {
    res.send("Wall Of Shame server is running");
});
app.use("/snippets", snipRoutes);

//Running the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});


