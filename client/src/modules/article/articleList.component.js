import React from "react";
import { ArticleHorizontal } from "./articleHorizontal.component";
import { Empty } from "antd";

export const ArticleList = ({ articles, ...props }) => {
  const Articles = articles ? (
    articles.map(article => {
      return (
        <ArticleHorizontal
          key={article._id}
          image={article.heroImg}
          title={article.title}
          desc={article.description}
          id={article._id}
          category={article.categories.name}
          date={article.created_at}
        />
      );
    })
  ) : (
    <Empty />
  );

  return <>{Articles}</>;
};
