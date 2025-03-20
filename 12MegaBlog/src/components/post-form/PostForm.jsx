import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input, RTE, Select } from "../index";
import appwriteService from "../../appwrite/config";
import { ID } from "appwrite";

export default function PostForm({ post }) {
  // get userData object from auth slice
  const userData = useSelector((state) => state.authSlice.userData);

  // form-hook for form handling
  const { register, handleSubmit, setValue, control, getValues, watch } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        status: post?.status || "active",
        content: post?.content || "",
      },
    });

  const navigate = useNavigate();

  // submit function for form which get datas from form and send to appwrite
  console.log("'userData.name' in PostForm rfce -------->", userData.name);
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      console.log("dbPost 'data.image[0]' in post PostForm rfce ----------->", data.image[0]);
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);

        console.log("Error in deletefile PostForm rfce -------->");
      }

      const dbPost = await appwriteService.updatePost({
        id: post.$id, // Pass the unique document ID
        title: data.title,
        content: data.content,
        status: data.status,
        featuredImage: file ? file.$id : post.featuredImage,
        name: data.name,
        email: data.email
      });
      console.log("Debug: In Update Post  PostForm rfce -------->", dbPost);

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      console.log("Debug: In new Post 'data'  PostForm rfce -------->", data);

      if (file) {
        const fileId = file.$id; // this id comes from image
        data.featuredImage = fileId;
        console.log(
          "----post form userdata-----",
          userData,
          file,
          userData.$id,
          userData.name,
          userData.email
        );

        if (!userData) {
          console.error("User data is not available. Please log in.");
          alert("You must be logged in to create a post.");
          return;
        }
        const dbPost = await appwriteService.createPost({
          ...data,
          name: userData.name,
          email: userData.email,
          userId: userData.$id,
        });

        console.log("Debug: In new Post 'dbPost' appwriteService.createPost  PostForm rfce -------->", dbPost);
        console.log("Debug: Data  coming from form  ----------->", data);
        

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />

        <RTE
          label="Content :"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image :"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={appwriteService.getFilePreview(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-10"
          {...register("status", { required: true })}
        />
        <Button
          type="submit"
          bgcolor={post ? "bg-green-500 hover:bg-green-700" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
