import React from "react";
import { Comment } from "./Comment";

export const CommentsList = ({ comments }) => {
    return (
        <ul>
            {comments.map((i) => (
                <Comment key={i.id} comment={i} />
            ))}
        </ul>
    );
};
