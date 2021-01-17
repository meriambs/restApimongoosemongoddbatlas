
// ****-Create a person having this prototype:-****


const mongoose = require("mongoose");
let peopleSchema = new mongoose.Schema({
    name:{type:String,
      require:true},
    age:Number,
    favoriteFood:[String]
})
const Person = mongoose.model("Person", peopleSchema);

module.exports = Person;