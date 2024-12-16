const projects = require('../Model/projectSchema')

//add projects
exports.addProjects=async(req,res)=>{
    console.log("inside add project");
    res.status(200).json("add project request received")
}