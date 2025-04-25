// Import helper functions from Redux Toolkit and a utility from date-fns
import { createSelector, createEntityAdapter } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import { apiSlice } from "../api/apiSlice"; // Import the base API setup


const postsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.date.localeCompare(a.date), // Sort by date descending
});


const initialState = postsAdapter.getInitialState();
console.log(initialState); // For debugging: shows { ids: [], entities: {} }


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
      providesTags: (result, error, arg) => {
        if (!result || !result.ids) {
          // Handle cases where result is undefined or does not have ids
          return [{ type: "Post", id: "LIST" }];
        }

        return [
          { type: "Post", id: "LIST" }, // Tag the full list
          ...result.ids.map((id) => ({ type: "Post", id })), // Tag each post by ID
        ];
      },
    }),
    getPostsByUserId: builder.query({
      query: (id) => `/posts/?userId=${id}`,
      transformResponse: (responseData) => {
        let min = 1;
        const loadedPosts = responseData.map((post) => {
          if (!post?.date) // Fixed typo: changed `Date` to `date`
            post.date = sub(new Date(), { minutes: min++ }).toISOString(); // Added assignment
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
      providesTags: (result, error, arg) => [
        ...result.ids.map((id) => ({ type: "Post", id })),
      ],
    }),
    addNewPost: builder.mutation({
      query: (initialPost) => ({
        url: "/posts",
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

      // invalidatesTags is like saying “throw away anything labeled Product:1 and get it fresh again”

      invalidatesTags: (result, error, arg) => [{ type: "Post", id: "LIST" }],
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
      invalidatesTags: (result, error, arg) => [
        {
          type: "Post",
          id: arg.id,
        },
      ],
    }),
    deletePost: builder.mutation({
      query: ({ id }) => ({
        url: `/posts/${id}`,
        method: "DELETE",
        body: { id },
      }),
      invalidatesTags: function (result, error, arg) {
        return [{ type: "Post", id: arg.id }];
      },
    }),
    addReaction: builder.mutation({
      query: ({ postId, reactions }) => ({
        url: `posts/${postId}`,
        method: "PATCH",
        body: {
          reactions,
        },
      }),
      onQueryStarted: async (
        { postId, reactions },
        { dispatch, queryFulfilled }
      ) => {
        const patchResult = dispatch(
          extendedApiSlice.util.updateQueryData(
            "getPosts",
            undefined,
            (draft) => {
              const post = draft.entities[postId];
              if (post) post.reactions = reactions;
            }
          )
        );
        try {
          await queryFulfilled;
        } catch (error) {
          patchResult.undo();
        }
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
  useAddReactionMutation,
} = extendedApiSlice;

// 🧠 Step 5: Create a Selector to extract the query result from the Redux store

export const selectPostsResult = extendedApiSlice.endpoints.getPosts.select();

// 📌 Step 6: Extract just the post data from the result
const selectPostsData = createSelector(
  selectPostsResult,
  (postResult) => postResult.data // This gives us the normalized posts
);

export const {
  selectAll: selectAllPosts,
  selectById: selectPostById,
  selectIds: selectPostIds,
} = postsAdapter.getSelectors(
  (state) => selectPostsData(state) ?? initialState
  // fallback to empty if data hasn't loaded yet
);
