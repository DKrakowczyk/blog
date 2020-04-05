import { Comment, Empty, Icon } from "antd";
import { useMutation } from "@apollo/react-hooks";
import React, { useState } from "react";
import { Button, Card, CardBody, CardTitle, FormTextarea } from "shards-react";
import styled from "styled-components";
import { ADD_COMMENT, REMOVE_COMMENT } from "../gql/articles.mutations";
import { GET_SINGLE_ARTICLE } from "../gql/articles.queries";
import { openNotification } from "../dashboard/common/notification.component";
import { ROLE } from "../../constants/constants";
const ShadowCard = styled(Card)`
  -webkit-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0px 0px 33px 3px rgba(0, 0, 0, 0.4);
  margin-top: 25px;
`;

export const Comments = ({ article }, props) => {
  const [commentBody, setCommentBody] = useState();
  const [addComment] = useMutation(ADD_COMMENT, {
    refetchQueries: () => [
      {
        query: GET_SINGLE_ARTICLE,
        variables: { articleId: article._id }
      }
    ]
  });

  const [deleteComment] = useMutation(REMOVE_COMMENT, {
    refetchQueries: () => [
      {
        query: GET_SINGLE_ARTICLE,
        variables: { articleId: article._id }
      }
    ]
  });

  const removeComment = async id => {
    try {
      await deleteComment({
        variables: {
          articleId: article._id,
          commentId: id
        }
      });
      openNotification(
        "success",
        "Want to delete something else?",
        `Comment was successfully deleted`
      );

      setCommentBody("");
    } catch (error) {
      openNotification("error", "Oh no, you can not do this!", error.message);
    }
  };

  const postComment = async () => {
    try {
      await addComment({
        variables: {
          articleId: article._id,
          addComment: { comment: commentBody }
        }
      });
      openNotification(
        "success",
        "Want to say something else?",
        `Comment was successfully added`
      );

      setCommentBody("");
    } catch (error) {
      openNotification("error", "Oh no, you can not do this!", error.message);
    }
  };
  const CommentsList =
    article && article.comments ? (
      article.comments.map(comment => {
        return (
          <>
            <Comment
              author={comment.authorName ? comment.authorName : "anonymous"}
              content={
                <>
                  <p>{comment.comment}</p>
                  {localStorage.getItem("ROLE") === ROLE.Admin ? (
                    <Button
                      outline
                      theme="danger"
                      style={{ float: "right" }}
                      onClick={() => {
                        removeComment(comment._id);
                      }}
                    >
                      <Icon type="cross" />
                    </Button>
                  ) : (
                    <></>
                  )}
                </>
              }
            />
            <div className="comment-wrapper"></div>
          </>
        );
      })
    ) : (
      <Empty description="No comments 😥" />
    );

  const PostComment =
    localStorage.getItem("TOKEN") !== null ? (
      <div>
        <p className="mb-2"> Waiting for you to say something...</p>
        <FormTextarea
          value={commentBody}
          onChange={e => {
            setCommentBody(e.target.value);
          }}
        />
        <Button
          outline
          squared
          theme="dark"
          style={{ marginTop: "20px", float: "right" }}
          onClick={() => {
            postComment();
          }}
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
