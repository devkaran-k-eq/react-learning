import React, { useState, useEffect } from "react";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import appwriteService from "../appwrite/config";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Container } from "../components";
import authService from "../appwrite/auth";

export default function Post() {
  const [post, setPost] = useState(null);
  const [userName, setUsername] = useState("");

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.authSlice.userData);

  // const isAuthor = (post && userData) ? ( post.userId === userData.$id) : false;
  const isAuthor = post && userData;
  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
      });
    } else {
      navigate("/");
    }
    console.log("userData ===>", post);

    authService
      .getCurrentUser()
      .then((userData) => {
        console.log("userData from Post", setUsername(userData.name));
      })
      .catch((error) => {
        console.error("Error fetching user: ++++++++++++++", error); // Log the error
      });
  }, [slug, navigate]);

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
          {/* Left Side: Title */}
          <h1 className="text-2xl font-bold">Title: {post.title}</h1>

          {/* Right Side: Logo and Username */}
          <div className="flex items-center space-x-3">
            {/* Logo */}
            <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <span className="font-bold text-2xl text-gray-600 dark:text-gray-300">
                {userName.charAt(0).toUpperCase()}
              </span>
            </div>
            {/* Username */}
            <h1 className="text-xl font-bold">{userName.toUpperCase()}</h1>
          </div>
        </div>

        <div className="w-full flex justify-center mb-4 relative border rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl w-1/2"
          />

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
        <div className="border rounded-2xl m-2 h-fit italic font-bold">
          <div className="browser-css text-2xl text-justify m-2">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}
