const express = require("express"); 
const cors = require("cors");

const app = express();
const PORT = 5000;  


// cors() allows the React frontend (running on port 5173) to talk to this server
app.use(cors());

// express.json() parses incoming JSON request bodies so we can read req.body that will be used in adding the new snippets in the database
app.use(express.json());

const {getDataDb,writeDataDb} = require("./models/snip_models.js");  //importing the functionalities of the snip_models.js

const {getAllSnippets, createSnippet, addComment, deleteSnippet} = require("./controllers/snipp_controllers.js");

app.get("/", (req,res)=> {
    res.send("Wall Of Shame server is running");
});
app.get("/snippets", getAllSnippets);
app.post("/snippets", createSnippet);

app.post("/snippets/:id/comments", addComment);

//Running the server
app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});

app.delete("/snippets/:id", deleteSnippet);
