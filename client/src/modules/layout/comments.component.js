import { Comment, Empty } from "antd";
import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, FormTextarea } from "shards-react";
import styled from "styled-components";

const ShadowCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  margin-top: 25px;
`;

export const Comments = (article, props) => {
  const CommentsList =
    article && article.comments ? (
      article.comments.map(comment => {
        return (
          <Comment
            author="Han Solo"
            content={
              <p>
                We supply a series of design principles, practical patterns and
                high quality design resources (Sketch and Axure), to help people
                create their product prototypes beautifully and efficiently.
              </p>
            }
          />
        );
      })
    ) : (
      <Empty description="No comments 😥" />
    );

  const PostComment =
    localStorage.getItem("TOKEN") !== null ? (
      <div>
        <p className="mb-2"> Waiting for you to say something...</p>
        <FormTextarea />
        <Button
          outline
          squared
          theme="dark"
          style={{ marginTop: "20px", float: "right" }}
        >
          Post a comment
        </Button>
      </div>
    ) : (
      <p>You need to be registered to post comments</p>
    );

  return (
    <ShadowCard>
      <CardBody>
        <CardTitle>Comments</CardTitle>
        {PostComment}
        <br />
        <br />
        <br />
        {CommentsList}
      </CardBody>
    </ShadowCard>
  );
};
