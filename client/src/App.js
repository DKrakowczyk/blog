import React from "react";
import { ApolloProvider } from "@apollo/react-hooks";
import { Layout, Row, Col, Card } from "antd";
import { client } from "./ApolloClient";
import Masonry from "react-masonry-css";
import styled from "styled-components";
import { ArtcleBox } from "./modules/article/article.component";
import { ArtcleBoxShort } from "./modules/article/article-short.component";
const { Header, Content, Footer } = Layout;
const breakpointColumnsObj = {
  default: 3,
  1100: 3,
  700: 2,
  500: 1
};
function App() {
  return (
    <ApolloProvider client={client}>
      <Layout>
        <Header>HEDER</Header>
        <Content>
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {[
              <ArtcleBoxShort />,
              <ArtcleBox text="Cras laoreet id nunc nec finibus. Aenean massa orci, maximus id rutrum tincidunt, semper vitae mauris. Vestibulum at est lacus. Aenean convallis commodo risus non pulvinar. Suspendisse nec maximus erat. Vestibulum eleifend varius risus, auctor pretium libero semper sit amet. Aenean tempor ligula felis, lobortis placerat sem malesuada sit amet. Praesent maximus mi dignissim mollis accumsan." />,
              <ArtcleBoxShort />,
              <ArtcleBox text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam fermentum dapibus ornare. Phasellus elit est, finibus ac accumsan quis, dapibus eget lacus. Suspendisse ullamcorper, massa et congue condimentum, purus nisi elementum libero, eu tristique justo metus vel sem. Mauris efficitur ante sed nibh pretium viverra." />,
              <ArtcleBoxShort />,
              <ArtcleBox text="Sed vulputate massa leo, id interdum metus accumsan vel. Pellentesque condimentum velit vitae velit vestibulum, ac molestie dui dictum. Aenean eget elementum justo. Donec vitae arcu eget tortor mollis interdum luctus vel justo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum turpis odio, sagittis non interdum eu, viverra convallis nisl. Nulla facilisi. Nullam porta, dolor eu gravida aliquam, lorem enim elementum leo, interdum finibus nibh dui ut dolor. Integer nisl dui, porttitor et dui nec, iaculis auctor sapien. Nullam cursus ultrices leo vel posuere. Morbi sem risus, fringilla vitae bibendum sit amet, tempus in dolor. Pellentesque id rhoncus justo. Morbi iaculis, lectus non dignissim aliquet, diam ex molestie enim, et eleifend lectus felis vel purus. Praesent non pretium tellus. Duis fringilla felis sit amet nunc porta auctor. Fusce mattis sodales nisi, quis tempor tortor pharetra ac." />,
              <ArtcleBoxShort />,
              <ArtcleBox text="Cras laoreet id nunc nec finibus. Aenean massa orci, maximus id rutrum tincidunt, semper vitae mauris. Vestibulum at est lacus. Aenean convallis commodo risus non pulvinar. Suspendisse nec maximus erat. Vestibulum eleifend varius risus, auctor pretium libero semper sit amet. Aenean tempor ligula felis, lobortis placerat sem malesuada sit amet. Praesent maximus mi dignissim mollis accumsan." />
            ]}
          </Masonry>
        </Content>
        <Footer>&copy; {new Date().getFullYear()} blogsystem.</Footer>
      </Layout>
    </ApolloProvider>
  );
}

export default App;
