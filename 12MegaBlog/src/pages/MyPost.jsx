import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
export default function MyPost() {
  const [posts, setPosts] = useState([]);

  const userData = useSelector((state) => state.authSlice.userData);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      //   console.log("---------", posts, userData);
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  return (
    <div className="py-3 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) =>
            post?.name === userData.name ? (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />

                {console.log(
                  "Debug: In MyPost.jsx page for checking login userdata show  --->",
                  userData.name
                )}
              </div>
            ) : (
              null
            )
          )}
        </div>
      </Container>
    </div>
  );
}
