// Import helper functions from Redux Toolkit and a utility from date-fns
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice"; // Import the base API setup

// 🧠 Step 1: Create an Entity Adapter
// Entity Adapter helps organize post data in a normalized way (easy to manage)
// Also lets us sort posts by their `date` — latest first

const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date), // Sort by date descending
});

// 📦 Step 2: Create initial state for posts
// This is the "empty shelf" for storing posts

const initialState = postsAdapter.getInitialState();
console.log(initialState); // For debugging: shows { ids: [], entities: {} }

// 🛰️ Step 3: Extend the base API with a `getPosts` endpoint

export const extendedApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // Define a GET request to /posts

    getPosts: builder.query({
      query: () => "/posts", // API endpoint
      transformResponse: (responseData) => {
        let min = 1;

        // 🛠️ Fix each post before storing
        const loadedPosts = responseData.map((post) => {
          // If post has no date, assign one manually
          if (!post?.date)
            post.date = sub(new Date(), { minutes: min++ }).toISOString();

          // If post has no reactions, add empty reaction counts
          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };

          return post;
        });

        // 📦 Store all posts in normalized state using the adapter
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      // 🏷️ Tell RTK Query how to cache this query
      providesTags: (result, error, arg) => [
        { type: "Post", id: "LIST" }, // Tag the full list
        ...result.ids.map((id) => ({ type: "Post", id })), // Tag each post by ID
      ],
    }),
    getPostsByUserId: builder.query({
      query: (id) => `/posts/?userId=${id}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.Date) sub(new Date(), { minutes: min++ }).toISOString();

          if (!post?.reactions)
            post.reactions = {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            };

          return post;
        });
        return postsAdapter.setAll(initialState, loadedPosts);
      },
      providesTags: (result, error, arg) => {
        console.log(result);
        return [...result.ids.map((id) => ({ type: "Post", id }))];
      },
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/post",
        method: "POST",
        body: {
          ...initialPost,
          userId: Number(initialPost.userId),
          date: new Date().toISOString(),
          reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0,
          },
        },
      }),

      invalidatesTags: (result, error, args) => [{ type: "Post", id: "LIST" }],
    }),
    updatePost: builder.mutation({
      query: (initialPost) => ({
        url: `/posts/${initialPost.id}`,
        method: "PUT",
        body: {
          ...initialPost,
          date: new Date().toISOString(),
        },
      }),
      invalidatesTags: (result, error, id) => [
        {
          type: "Post",
          id: arg.id,
        },
      ],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: function (result, error, id) {
        return [{ type: "Post", id: arg.id }];
      },
    }),
  }),
});

// 🧪 Step 4: Hook to use in React components
// Automatically fetches data and keeps it in sync with cache

export const {
  useGetPostsQuery,
  useGetPostsByUserIdQuery,
  useAddNewPostMutation,
  useDeletePostMutation,
  useUpdatePostMutation,
} = extendedApiSlice;

// 🧠 Step 5: Create a Selector to extract the query result from the Redux store

export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// 📌 Step 6: Extract just the post data from the result
const selectPostsData = createSelector(
  selectPostsResult,
  (postResult) => postResult.data // This gives us the normalized posts
);

// 🧹 Step 7: Create selectors to work with normalized state
// These allow us to read data easily from the Redux store like:
// - selectAllPosts(state) => gets all posts
// - selectPostById(state, postId) => gets post by ID

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
  // fallback to empty if data hasn't loaded yet
);
