import React, {useId} from "react";
import { Link } from "react-router-dom";
import appwriteService from "../appwrite/config"


const PostCard = ({
    $id,  // we use $ because id comes from appwrite 
    title,
    featuredImage
}) => {

    return(
        <Link to={`${$id}`}>
            <div className="w-full bg-gray-100 rounded-xl p-4">
                <div className="mb-4 justify-center w-full">
                    <img src={appwriteService.getFilePreview(featuredImage)} alt={title}
                    className="rounded-xl"                    
                    />
                </div>

                <h2 className="text-xl font-bold">
                    {title}
                </h2>
            </div>
        </Link>
    )
}

export default PostCard