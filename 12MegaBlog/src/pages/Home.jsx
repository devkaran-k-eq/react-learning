import React, { useState, useEffect } from "react";
import { Container, PostCard } from "../components";
import apppwriteService from "../appwrite/config";

export default function Home() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    apppwriteService.getPosts([]).then((post) => {
      setPosts((post.documents) ? post.documents : []);
    });
  }, []);

  return posts.length === 0 ? (
    <div className="py-3 w-full text-center mt-4">
      <h1 className="text-2xl font-bold">No Posts Found</h1>
    </div>
  ) : (
    <div className="py-3 w-full">
      <Container>
        <div className="flex flex-wrap">
          {posts.map((post) => {
            <div className="w-1/2" key={post.$id}>
              <PostCard {...post} />
            </div>;
          })}
        </div>
      </Container>
    </div>
  );
}
