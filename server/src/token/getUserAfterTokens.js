import User from "../models/userModel.js"; // Example model import

export const getUserAfterTokens = async (req, res) => {
  try {
    // Access user information from req.user if authentication succeeds
    // console.log();
    const user = await User.findById(req.user.userId).select("-password");
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
