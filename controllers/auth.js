import { StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import User from '../models/User.js';

export const register = async (req, res) => {
  const user = await User.create({ ...req.body });
  const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtSecret', {
    expiresIn: '30d',
  });
  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

export const login = async (req, res) => {
  res.send('login user');
};
