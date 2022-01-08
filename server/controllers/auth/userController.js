import { UserModel } from "../../models"
import CustomErrorHandler from "../../services/CustomErrorHandler"

const userController = {
  async me(req, res, next) {
    try {
      const user = await UserModel.findOne({ _id: req.user._id }).select(
        "-password -updatedAt -__v"
      );
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
    } catch (err) {
      return next(err);
    }
  },
  async users(req, res, next) {
    try {
      const user = await UserModel.find({ }).select(
        "-password -updatedAt -__v"
      );
      if (!user) {
        return next(CustomErrorHandler.notFound());
      }
      res.json(user);
    } catch (err) {
      return next(err);
    }
  },
};
export default userController