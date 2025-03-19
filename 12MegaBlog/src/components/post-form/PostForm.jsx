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
        // slug: post?.$id || "",
        status: post?.status || "active",
        content: post?.content || "",
      },
    });

  const navigate = useNavigate();

  // submit function for form which get datas from form and send to appwrite
  const submit = async (data) => {
    console.log("-----submit---", data, userData.name);

    if (post) {
      const file = data.image[0]
        ? await appwriteService.uploadFile(data.image[0])
        : null;
      console.log("dbPost in post", data.image[0]);
      if (file) {
        await appwriteService.deleteFile(post.featuredImage);

        console.log("Error in deletefile");
      }

      const dbPost = await appwriteService.updatePost({
        id: post.$id, // Pass the unique document ID
        title: data.title,
        content: data.content,
        status: data.status,
        featuredImage: file ? file.$id : post.featuredImage,
      });
      console.log("dbPost in post", data);

      if (dbPost) {
        navigate(`/post/${dbPost.$id}`);
      }
    } else {
      const file = await appwriteService.uploadFile(data.image[0]);
      console.log("file", data.image[0]);

      if (file) {
        const fileId = file.$id; // this id comes from image
        data.featuredImage = fileId;
        console.log(
          "----post form userdata-----",
          userData,
          file,
          userData.$id
        );
        const dbPost = await appwriteService.createPost({
          ...data
          // userId: userData.$id,
        });

        console.log("dbPost", dbPost);

        if (dbPost) {
          navigate(`/post/${dbPost.$id}`);
        }
      }
    }
  };

  // slugTransform function to transform title to slug
  // const slugTransform = useCallback((value) => {
  //   if (value && typeof value === "string")
  //     return value
  //       .trim()
  //       .toLowerCase()
  //       .replace(/^[a-zA-Z\d\s]+/g, "-")
  //       .replace(/\s/g, "-");

  //   return "";
  // }, []);

  // React.useEffect(() => {
  //   const subscription = watch((value, { name }) => {
  //     if (name === "title") {
  //       setValue("slug", slugTransform(value.title, { shouldValidate: true }));
  //     }
  //   });

  //   return () => {
  //     subscription.unsubscribe();
  //   };
  // }, [watch, slugTransform, setValue]);
  return (
    <form onSubmit={handleSubmit(submit)} className="flex flex-wrap">
      <div className="w-2/3 px-2">
        <Input
          label="Title :"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        {/* <Input
          label="Slug :"
          placeholder="Slug"
          className="mb-4"
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
        /> */}
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
          bgcolor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Submit"}
        </Button>
      </div>
    </form>
  );
}
