import React from "react";
import Masonry from "react-masonry-css";
import { ArticleBox } from "./article.component";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export const ArticleGallery = ({ articles, ...props }) => {
  const Articles = articles ? (
    articles.map(article => {
      return (
        <ArticleBox
          key={article._id}
          image={article.heroImg}
          title={article.title}
          desc={article.description}
          id={article._id}
          category={article.categories.name}
        />
      );
    })
  ) : (
    <></>
  );

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="masonry"
      columnClassName="masonry_column"
    >
      {Articles}
    </Masonry>
  );
};
