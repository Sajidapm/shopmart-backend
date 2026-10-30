
const User = require("../models/user")
const generateToken = require("../utils/generateToken")
const bcrypt = require("bcrypt")

//get users
const getUsers = async(req, res) => {

    try {
        const users = await User.find();
        res.status(200).json({
            success: true,
            data: users
        });
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }

}

  // /api/users/:id
const getUserbyId=async(req,res,next)=>{
    //const id = Number(req.params.id)
    // find user matching the id
  //  const user= users.find((user)=>user.id === id)
  const user = await User.findById(id)
    if(!user){
        const error = new Error("User not found")
        error.status =404
        return next(error)

    }
    res.status(200).json({
        success:true,
        data:user
    })


}
// product Update /api/users/:id
const updateUser =async(req,res,next)=>{
  try{
    const  updatedUser = await User.findByIdAndUpdate(req.params.id, req.body,
         {new:true,runValidators:true})

             if(!updatedUser){
        const error = new Error("User not found")
        error.status =404
        return next(error)

    }
        res.status(200).json({
        success:true,
        message:"user updated",
        data:updatedUser
    })


  } catch(error){
  }
}
//delete

const deleteUser =async(req,res,next)=>{
  const deletedUser = await User.findByIdAndDelete(req.params.id)
if (!deletedUser) {
    const error = new Error("User not found");
    error.status = 404;
    return next(error);
}    
  //  const deleteUser =users.splice(userIndex,1)

    res.status(200).json({
        success:true,
        message:"user deleted",
        data:deleteUser
    })

}
const checkUser = async(req,res,next)=>{
    return res.status(200).json({message:"user validate"})
}

module.exports = {
    getUsers,
    
    getUserbyId,
    updateUser,
    deleteUser,

    checkUser
}