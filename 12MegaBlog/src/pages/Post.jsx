import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";

export default function Post() {
  const [post, setPost] = useState({});

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.authSlice.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((onePost) => {
        console.log("Fetched post:", onePost); // Debug the fetched post
        setPost(onePost);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);


  // console.log("Coming Inside Post Slug email------->", post.title);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  return post ? (
    <div className="py-8">
      <Container>
        <div className="w-full border rounded-2xl m-2 flex items-center justify-between p-4">
          <h1 className="text-2xl font-semibold">
            Date:{" "}
            {post?.$createdAt
              ? new Date(post.$createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "Unknown Date"}
          </h1>

          <div className="flex items-center space-x-3">
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-bold text-2xl text-gray-600 dark:text-gray-300">
                {post.name?.charAt(0).toUpperCase()}
              </span>
            </div>
            {/* Username */}
            <h1 className="text-xl font-bold">{post.name?.toUpperCase()}</h1>
          </div>
        </div>

        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          {post.featuredImage ? (
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-xl w-1/2"
            />
          ) : (
            <div className="w-1/2 h-40 bg-gray-300 rounded-xl flex items-center justify-center">
              <p className="text-gray-500">No Image Available</p>
            </div>
          )}

          {isAuthor && (
            <div className="absolute right-6 top-6">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgcolor="bg-green-500" className="mr-3">
                  Edit
                </Button>
              </Link>
              <Button bgcolor="bg-red-500" onClick={deletePost}>
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="border rounded-2xl m-4 h-fit bg-amber-50">
          <h1 className="text-2xl font-bold">{post.title}</h1>
        </div>
        {post.content ? (
          <div className="border rounded-2xl m-4 h-fit bg-amber-50">
            <div className="browser-css text-2xl text-justify m-9">
              {parse(post.content)}
            </div>{" "}
          </div>
        ) : (
          <p> No Content Available...</p>
        )}
      </Container>
    </div>
  ) : (
    <div>Loading post...</div>
  );
}
