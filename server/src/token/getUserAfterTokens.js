import User from "../models/userModel.js";

export const getUserAfterTokens = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");
    console.log("user: ", user, "hereeeeeeeeeeeeeeee");
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user data:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
