import User from "./../../models/userModel.js";

export const addNotification = async (req, res) => {
  const { notification, userId } = req.body;

  try {
    const user = await User.findById(userId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.notification = user.notification || [];
    user.notification.push(notification);

    await user.save();

    res
      .status(200)
      .json({
        message: "Notification added successfully",
        notifications: user.notification,
      });
  } catch (error) {
    console.error("Error adding notification:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
