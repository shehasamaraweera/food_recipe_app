const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userSignUp = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide all required fields",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({
        error: "Email already exists",
      });
    }

    const hashPwd = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      email,
      password: hashPwd,
    });

    let token = jwt.sign({ email, id: newUser._id }, process.env.SECRET_KEY);

    return res.status(201).json({
      message: "User created successfully",
      token,
      user: {
        id: newUser._id,
        email: newUser.email,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: "Signup failed",
      error: error.message,
    });
  }
  
};


const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "Please provide email and password",
      });
    }

    const user = await User.findOne({ email });

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign({ email, id: user._id }, process.env.SECRET_KEY);

      return res.status(200).json({
        message: "Login successful",
        token,
        user: {
          id: user._id,
          email: user.email,
        },
      });
    }

    return res.status(400).json({
      message: "Invalid email or password",
    });
  } catch (error) {
    return res.status(500).json({
      message: "Login failed",
      error: error.message,
    });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    return res.status(200).json({
      email: user.email,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to get user",
    });
  }
};

module.exports = { userSignUp, userLogin, getUser };
