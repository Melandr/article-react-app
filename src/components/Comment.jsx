import React from "react";

export const Comment = ({ comment }) => {
    const { user, text } = comment;
    return (
        <div className="comment">
            <h2>{user}</h2>
            <p>{text}</p>
        </div>
    );
};
