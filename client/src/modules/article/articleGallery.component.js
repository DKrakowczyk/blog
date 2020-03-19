import { useQuery } from "@apollo/react-hooks";

import React from "react";
import Masonry from "react-masonry-css";
import { ArticleBox } from "./article.component";

const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};

export const ArticleGallery = props => {
  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className="my-masonry-grid"
      columnClassName="my-masonry-grid_column"
    >
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/480016-PGKTGR-852-1.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo fugiat id iure ad error ratione tenetur laborum. Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/2019/05/2004612-1.jpg"
        desc="Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/482596-PGZQXX-298.jpg"
        desc="Esse rem explicabo fugiat id iure ad error ratione tenetur laborum. Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/483797-PGTKAX-720-1.jpg"
        desc=" Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/04/282024-P60RDW-857.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo fugiat id iure ad error ratione tenetur laborum. Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/2019/05/2004612-1.jpg"
        desc="Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/482596-PGZQXX-298.jpg"
        desc="Esse rem explicabo fugiat id iure ad error ratione tenetur laborum. Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/05/483797-PGTKAX-720-1.jpg"
        desc=" Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
      <ArticleBox
        image="http://ghost.estudiopatagon.com/breek/content/images/size/w760h400/2019/04/282024-P60RDW-857.jpg"
        desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse rem explicabo fugiat id iure ad error ratione tenetur laborum. Repellendus vel doloremque velit, quibusdam corrupti autem est explicabo qui magnam."
      />
    </Masonry>
  );
};
