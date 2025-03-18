import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";

export default function AllPost() {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   appwriteService.getPosts([]).then((posts) => {
  //     setPosts(posts.documents);
  //   });
  // }, []);


  useEffect(() => {}, [])
    appwriteService.getPosts([]).then((posts) => {
        if (posts) {
            setPosts(posts.documents)
        }
    })



  return (
    <div className="py-3 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="w-1/2" key={post.$id}>
              <PostCard  {...post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}
