import express from 'express';
import {
  getUser,
  getUserFriends,
  addRemoveFriend,
} from '../controllers/users.js';
import { verifyToken } from '../middleware/auth.js';

const Router = express.Router();

//READ
Router.get('/:id', verifyToken, getUser);
Router.get('/:id/friends', verifyToken, getUserFriends);

//UPDATE
Router.patch('/:id/:friendId', addRemoveFriend);

export default Router;
