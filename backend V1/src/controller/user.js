const User = require("../models/user");

exports.signup = (req, res) => {
    User.findOne({ email: req.body.email }).exec((error, user) => {
      if (user) return res.status(400).json({
          error: "User already registered",
        });
  
      const { firstName, lastName, email, password } = req.body;
      //const hash_password = await bcrypt.hash(password, 10);
      const _user = new User({
        firstName,
        lastName,
        email,
        password,
        username:Math.random().toString()
      });
  
      _user.save((error, data) => {
        if (error) {
          return res.status(400).json({
            message: "Something went wrong",
          });
        }
  
        if (data) {
          //const token = generateJwtToken(user._id, user.role);
          //const { _id, firstName, lastName, email, role, fullName } = user;
          return res.status(201).json({
            //token,
            user:  data //{ _id, firstName, lastName, email, role, fullName },
          });
        }
      });
    });
  };