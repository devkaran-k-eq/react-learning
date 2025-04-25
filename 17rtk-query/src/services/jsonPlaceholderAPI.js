import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// It is like Slice in redux for API 
export const jsonPlaceholderAPI = createApi({
    reducerPath: 'jsonPlaceholderAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    refetchOnFocus: true,   // move come  to other page to retutn this page do refetch
    endpoints: (builder) => ({
        getPosts: builder.query({
            query: () => "posts", keepUnusedDataFor: 10
        }),
        createPosts: builder.mutation({
            query: (newPost) => ({
                url: "posts",
                method: "POST",
                body: newPost
            })
        })
    })
});

// Corrected export of hooks
export const { useGetPostsQuery, useCreatePostsMutation } = jsonPlaceholderAPI;