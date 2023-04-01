import React, { useState } from "react";
import { CommentsList } from "./CommentsList";

const ArticleContent = ({ text, comments, showComments, onClick }) => {
    return (
        <div>
            <p>{text}</p>
            <button onClick={onClick}>{showComments ? "Hide comments" : "Show comments"}</button>
            {comments && showComments && <CommentsList comments={comments} />}
        </div>
    );
};

export const Article = ({ article }) => {
    const [showText, setShowText] = useState(false);
    const [showComments, setShowComments] = useState(false);
    const { date, title, comments, text } = article;
    const articleDate = new Date(date).toLocaleString();

    const handleTextToggle = () => {
        setShowText(!showText);
    };

    const handleCommentToggle = () => {
        setShowComments(!showComments);
    };

    return (
        <div className="article">
            <div className="article-title">
                <h1>{title}</h1>
                <p>{articleDate}</p>
            </div>
            <button onClick={handleTextToggle}>{showText ? "Hidden text" : "Show text"}</button>
            {showText && (
                <ArticleContent
                    text={text}
                    comments={comments}
                    showComments={showComments}
                    onClick={handleCommentToggle}
                />
            )}
        </div>
    );
};
