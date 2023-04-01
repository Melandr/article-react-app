import React from "react";
import { Article } from "./Article";

export const ArticleList = ({ articles }) => {
    return (
        <ul className="list">
            {articles.map((i) => (
                <Article article={i} key={i.id} />
            ))}
        </ul>
    );
};
