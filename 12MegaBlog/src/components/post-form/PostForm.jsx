import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Input, RTE } from "../index";
import appwriteService from "../../appwrite/config";

export default function PostForm({ post }) {
  // get userData object from auth slice
  const userData = useSelector((state) => state.auth.userData);

  // form-hook for form handling
  const { register, handleSubmit, setValue, control, getValues, watch } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        slug: post?.$id || "",
        status: post?.status || "active",
        content: post?.content || "",
      },
    });

  const navigate = useNavigate();

  // submit function for form which get datas from form and send to appwrite
  const submit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? appwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        appwriteService.deleteFile(post.featuredImage);
      }

      const dbPost = await appwriteService.updatePost(data.$id, {
        ...data,
        featuredImage: file ? file.$id : undefined,
      });

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);

      if (file) {
        const fileId = file.$id; // this id comes from image
        data.featuredImage = fileId;

        const dbPost = await appwriteService.createPost({
          ...data,
          userId: userData.$id,
        });

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  const slugTransform = useCallback(
    (value) => {

    }
  )

  return <div>PostForm</div>;
}
