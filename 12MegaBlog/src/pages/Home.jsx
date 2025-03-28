import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";
import { useSelector } from "react-redux";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const userData = useSelector((state) => state.authSlice.userData);

  useEffect(() => {
    appwriteService.getPosts([]).then((fromPosts) => {
      //   console.log("---------", posts, userData);
      if (fromPosts) {
        setPosts(fromPosts.documents);
        console.log("Inside Home", fromPosts.documents);
      }
    });
  }, []);

  // console.log("Post from home", posts);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              {userData?.email ? (
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  Please Wait Page is Loading......
                </h1>
              ) : (
                <h1 className="text-2xl font-bold hover:text-gray-500">
                  Login Or SignUp to Enjoy Our Engaging Post ... ❤️❤️
                  
                </h1>
              )}
            </div>
          </div>
        </Container>
      </div>
    )
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
