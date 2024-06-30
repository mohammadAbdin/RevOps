import User from "../../models/userModel.js"; // it must be changed

export const addProject = async (req, res) => {
  //   const { email, password, name } = req.body;

  console.log(req.body);
  //   try {
  //     const existingUser = await User.findOne({ email });
  //     if (existingUser) {
  // return res.status(200).json({ message: "User already exists" });
  //     }
  //     const isAdmin = false;
  //     const newUser = new User({ name, email, password, isAdmin });

  //     await newUser.save();

  res
    .status(201)
    .json({ message: "User created successfully", user: req.body });
  //   } catch (error) {
  //     console.error("Error registering user:", error);
  //     res.status(500).json({ message: "Internal server error" });
  //   }
};
