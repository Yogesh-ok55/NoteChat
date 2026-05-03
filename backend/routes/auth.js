//login and registering for  a user is done here

import express  from "express";
const router = express.Router();
import User from '../model/Userschema.js';
import bcrypt from 'bcrypt';

//register
router.post('/register', async (req,res)=>{
  
    try{
         //generate new password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password, salt);

    console.log(req.body);

    const newuser = new User({
        username:req.body.username,
        email: req.body.email,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        password:hashedPassword,
        institution:req.body.institution,
        desc:req.body.desc,
        profilePicture:req.body.profilePicture,
        
    }) 

        const user=await newuser.save();
        res.status(200).json(user);

    } catch(err){
      console.log(err);
      // Handle duplicate key error
      if (err.code === 11000) {
          return res.status(400).json({ error: "Username or email already exists" });
      }
        res.status(500).json(err);
    }
})



//Login
router.post("/login", async (req, res) => {
    try {
      const { identifier, password } = req.body;
      const user = await User.findOne({
        $or: [{ email: identifier }, { username: identifier }],
      });

      if (!user) {
        return res.status(404).json({
          error: "user not found",
        });
      }

      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(400).json({ error: "wrong password" });
      }

      return res.status(200).json(user);
    } catch (err) {
      return res.status(500).json(err);
    }
  });

export default router;
