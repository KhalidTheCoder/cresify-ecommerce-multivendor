/**
 * @file ChatApi.js
 * @description RTK Query API slice for chat conversation REST endpoints.
 * @module services/chat/ChatApi
 */

import { base_url } from '@/utils/utils';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const ChatApi = createApi({
  reducerPath: 'ChatApi',
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  tagTypes: ['Chat'],

  endpoints: (builder) => ({
    myChatList: builder.query({
      query: (id) => `/chat/chatList/${id}`,
      providesTags: ['Chat'],
    }),

    providerChatList: builder.query({
      query: (id) => `/chat/chatList/provider/${id}`,
      providesTags: ['Chat'],
    }),

    sellerChatList: builder.query({
      query: (id) => `/chat/chatList/seller/${id}`,
      providesTags: ['Chat'],
    }),
  }),
});

// ✅ Correct auto-generated hooks
export const { useMyChatListQuery, useProviderChatListQuery, useSellerChatListQuery } = ChatApi;
