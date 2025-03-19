import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import apppwriteService from "../appwrite/config";
import { login } from "../store/authSlice";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    apppwriteService.getPosts().then((post) => {
      setPosts(post.documents ? post.documents : []);
    });
  }, []);

  console.log("Post from home", posts);
    if (posts.length === 0) {
      return (
        <div className="w-full py-8 mt-4 text-center">
          <Container>
            <div className="flex flex-wrap">
              <div className="p-2 w-full">
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  Login to read posts
                </h1>
              </div>
            </div>
          </Container>
        </div>
      );
    }
  return (
    <div className="w-full py-8">
      <Container>
        {posts.length === 0 ? (
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                No Post Available
              </h1>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        )}
      </Container>
    </div>
  );
}
