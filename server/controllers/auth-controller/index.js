//import the User schema from the model folder`1`

const User = require('../../model/User')
//for encrypting the password
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const collectUser = async(req,res)=>{

  const {username, email, password, role}=req.body

  const userPresent = new User.findOne({email})

  if(email){
    res.status(400).json({
      success:false,
      messsage:'user already exists. please use another email'
    })
  }
  const passwordHashed = await bcrypt.hash
}




const registerUser = async(req, res)=>{
  const { userName, userEmail, password, role } = req.body;

  // Validation could be added here
  const existingUser = await User.findOne({
    //here we are using more than one parameter to check for validity
    $or: [{ userName }, { userEmail }],

    //alternatively we could use only the email
    // ,{userEmail}
  });


  if (existingUser) {
    return res.status(400).json({
      success: false,
      message: "User name or User email already exists",
    });
  }

  //hashing the password
  const hashPassword = await bcrypt.hash(password,10);
  const newUser = new User({
    userName,
    userEmail,
    role,
    password: hashPassword,
  })

  await newUser.save();

  return res.status(201).json({
    success: true,
    message: "User registered successfully",
  })
}


const loginUser = async(req,res)=>{
  const {userEmail, password} = req.body;

  const checkUser = await User.findOne({userEmail});

  if(!checkUser || !(await bcrypt.compare(password,checkUser.password))){
    return res.status(401).json({
      success:false,
      message:'Invalid credentials'
    })
  }

  const accessToken = jwt.sign({
    _id: checkUser.id,
    userName: checkUser.userName,
    userEmail: checkUser.userEmail,
    role: checkUser.role
  },'JWT_SECRET',{expiresIn:'1d'});
  res.status(200).json({
    success:true,
    message:'Login successful',
    data:{
      accessToken,
      user:{
        _id: checkUser.id,
        userName: checkUser.userName,
        userEmail: checkUser.userEmail,
        role: checkUser.role
      }
    }
  })
}





module.exports = {registerUser, loginUser}