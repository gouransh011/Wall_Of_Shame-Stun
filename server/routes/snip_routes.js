const express = require("express");
const router = express.Router();
const { 
    getAllSnippets, 
    createSnippet, 
    deleteSnippet, 
    addComment 
} = require("../controllers/snipp_controllers");

// Define routes on the router object
router.get("/", getAllSnippets);
router.post("/", createSnippet);
router.delete("/:id", deleteSnippet);
router.post("/:id/comments", addComment);

module.exports = router;