const fs = require("fs"); //using node built in file manager required for reading and writing the database.json file

const path = require("path");

const dbPath = path.join(__dirname, "..", "db.json");
function getDataDb(){
    const data = fs.readFileSync(dbPath); //reading the data from the db.json file in a synchronous form as the server waits until the read is complete
    return JSON.parse(data); // to convert the data that is a  string into a json object
}
function writeDataDb(data){
    fs.writeFileSync(dbPath,JSON.stringify(data,null,2)); // write the file in a synchronous form, and JSON.stringify converts the JSON object into a text
}
module.exports = {getDataDb,
                  writeDataDb
};