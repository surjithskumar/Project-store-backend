const projects = require('../Model/projectSchema')

//add projects
exports.addProjects=async(req,res)=>{
    console.log("inside add project");
    const{title,languages,overview,github,website}=req.body
    const projectImage= req.file.filename
    const userId = req.payload
    console.log(title,languages,overview,github,website,projectImage,userId);
    res.status(200).json("add project request received");
}