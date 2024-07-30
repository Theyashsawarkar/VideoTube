import JWT from 'jsonwebtoken';
import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/apiError.js';
import { User } from '../models/user.model.js';

//NOTE: here we use the accessToken to add the user feild into the request if valid

export const verifyJWT = asyncHandler(async (req, _, next) => {
  try {
    // for frontend without the cookies (mobile apps , etc) the front end could pass the token as a Bearer token in headers
    const accessToken = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "");

    if (!accessToken) {
      throw new ApiError(401, "Unauthorized request");
    }

    const decodedToken = JWT.verify(accessToken, process.env.ACCESS_TOKEN_SECRET);

    const user = await User.findById(decodedToken?._id).select(" -password -refreshToken");

    if (!user) {
      throw new ApiError(401, "Invalid access token");
    }

    req.user = user;
    next();
  } catch (error) {
    throw new ApiError(401, error?.message || "Invalid access token");
  }
});
