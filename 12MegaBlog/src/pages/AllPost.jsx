import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";
export default function AllPost() {
  const [posts, setPosts] = useState([]);

  const userData = useSelector((state) => state.authSlice.userData);
  // console.log("UserData in All Posts", userData.name);
  // console.log("posts in All Name", posts);
  

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      //   console.log("---------", posts, userData);
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  // useEffect(() => {}, [])
  //   appwriteService.getPosts([]).then((posts) => {
  //       if (posts) {
  //           setPosts(posts.documents)
  //       }
  //   })

  return (
    <div className="py-3 w-full">
      <Container>
        <div className="flex flex-wrap">
          {
            posts.map((post) => (
              console.log("posts in All Name", post)
              
            )
              
            )
            
          }
          {posts.map((post) =>
            post.name === userData.name ? (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCard {...post} />
                {console.log("UserData in All Posts", userData.name)}
                
              </div>
            ) : null
          )}
        </div>
      </Container>
    </div>
  );
}
