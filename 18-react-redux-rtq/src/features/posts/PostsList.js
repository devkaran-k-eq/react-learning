import { useSelector } from "react-redux";
import { selectPostIds } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useGetPostsQuery } from "./postsSlice";

const PostsList = () => {
  // Destructure the query result properly
  const {
    data: postsData, // Access the normalized data
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetPostsQuery();

  // Fetch ordered post IDs from the selector
  const orderedPostIds = useSelector(selectPostIds);

  let content;

  if (isLoading) {
    content = <p>Loading...</p>;
  } else if (isSuccess) {
    // Ensure orderedPostIds is an array before mapping
    content = orderedPostIds?.length ? (
      orderedPostIds.map((postId) => (
        <PostsExcerpt key={postId} postId={postId} />
      ))
    ) : (
      <p>No posts available</p>
    );
  } else if (isError) {
    // Log error for debugging
    console.error("Error fetching posts:", error);
    // Handle different error structures safely
    const errorMessage =
      error?.data?.message || error?.status || "An error occurred";
    content = <p>{errorMessage}</p>;
  }

  return <section>{content}</section>;
};

export default PostsList;