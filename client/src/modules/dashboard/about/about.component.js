import { useMutation, useQuery } from "@apollo/react-hooks";
import { Button, Divider, Icon, Input, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { EDIT_ABOUT } from "../../gql/about.mutations";
import { GET_ABOUT_SHORT } from "../../gql/about.queries";
import { openNotification } from "../common/notification.component";
import { AboutHelp, HelpButton } from "../common/notification.helper";
const { TextArea } = Input;

export const About = props => {
  const { data } = useQuery(GET_ABOUT_SHORT);
  const about = data ? data.getAbout.about : null;
  const [aboutDescription, setAboutDescription] = useState("");

  useEffect(() => {
    setAboutDescription(about);
  }, [about]);

  const [editAbout] = useMutation(EDIT_ABOUT, {
    refetchQueries: () => [
      {
        query: GET_ABOUT_SHORT
      }
    ]
  });

  const edit = async () => {
    try {
      await editAbout({
        variables: { about: { about: aboutDescription } }
      });
      openNotification(
        "success",
        "Bio updated",
        `You successfully updated your bio`
      );
    } catch (error) {
      openNotification("error", "Oh no, there is a problem!", error.message);
    }
  };

  const Edit =
    about !== null ? (
      <TextArea
        autoSize={{ minRows: 8 }}
        value={aboutDescription}
        onChange={e => setAboutDescription(e.target.value)}
      ></TextArea>
    ) : (
      <Skeleton />
    );

  return (
    <div>
      <HelpButton fn={AboutHelp} />
      <Divider>
        <Icon type="environment" /> Bio
      </Divider>
      <p>
        Want to tell your subscribers something about you? Type it right here!
      </p>
      {Edit}
      <Divider />
      <Button
        type="primary"
        style={{ margin: "auto" }}
        block
        ghost
        onClick={() => edit()}
      >
        Save
      </Button>
      <Divider />
    </div>
  );
};
