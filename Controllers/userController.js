
exports.register=(req,res)=>{
    console.log("inside register function");
    const{username,email,password}=req.body
    res.status(200).json("Register request received")
    console.log(username,email,password);
}