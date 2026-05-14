
const {getDataDb,writeDataDb} = require("../models/snip_models.js");   

const getAllSnippets =  (req,res)=>{
    const data = getDataDb();
    res.json(data.snippets);
};
const createSnippet = (req,res)=>{
    const newSnippet = {          //creating a new snippet
        id: Date.now(), 
        confession: req.body.confession, 
        code: req.body.code,
        comments : [] ,// initially no comment
        userId: req.body.userId
    };
    const data = getDataDb();
    data.snippets.push(newSnippet);
    writeDataDb(data);
    res.json(newSnippet);
};
const addComment =  (req,res)=>{
    const data = getDataDb();
    const snippet = data.snippets.find(             //finding the snippet of that particular id for which we are willing to add comment
        s => s.id  == req.params.id
    );            
    if(!snippet){
        return res.status(404).json({ message : "Snippet not found"});       //if the snippet is not found then we are returning a response 404 with error message i.e. snippet not found
    }

    const newComment = {
        id: Date.now(),
        text : req.body.text,
        userId: req.body.userId
    };

    snippet.comments.push(newComment); // adding a new comment for that snippet
   
    writeDataDb(data); //now overwriting the complete data for db.json
    res.json(newComment);

};
const deleteSnippet =  (req,res) => {
    const data = getDataDb();

    const snippet = data.snippets.find(
        s => s.id == req.params.id
    );

    if(snippet.userId !== req.body.userId){
        return res.json({message: "Not allowed, only user who posted the snippet can delete it"})
    }

    //Delete snippet
    data.snippets = data.snippets.filter(
        s=> s.id != req.params.id
    );
    writeDataDb(data);

    res.json({message : "Snippet deleted"});
};

module.exports = {
        getAllSnippets,
        createSnippet,
        deleteSnippet,
        addComment
};
