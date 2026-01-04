import { StatusCodes } from 'http-status-codes';
import bcryptjs from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const salt = await bcryptjs.genSalt(10);

  const hashedPassword = await bcryptjs.hash(password, salt);

  const tempUser = { name, email, password: hashedPassword };

  const user = await User.create({ ...tempUser });
  res.status(StatusCodes.CREATED).json({ user });
};

export const login = async (req, res) => {
  res.send('login user');
};
