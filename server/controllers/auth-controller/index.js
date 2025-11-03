//import the User model from it folder
const User = require('../../model/User')

//for encrypting the password
const bcrypt = require('bcryptjs')

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
  const hashPassword = await bcrypt.hash(password,20);
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


module.exports = {registerUser}