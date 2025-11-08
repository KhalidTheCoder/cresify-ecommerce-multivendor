/**
 * @file ChatRoute.js
 * @description Express router for chat conversation REST endpoints.
 * @module routes/chat/ChatRoute
 */

import { Router } from 'express';
import {
  myChatList,
  providerChatList,
  sellerChatList,
} from '../controllers/chat/ChatListController.js';
import {
  getConversations,
  getMessages,
  openConversation,
  sendMessage,
} from '../controllers/chat/ChatController.js';

const router = Router();
router.get('/chatList/:id', myChatList);
router.get('/chatList/provider/:id', providerChatList);
router.get('/chatList/seller/:id', sellerChatList);
router.post('/openConversation', openConversation);
router.get('/conversations/:userId', getConversations);
router.post('/sendMessage', sendMessage);
router.get('/messages/:conversationId', getMessages);

export default router;
