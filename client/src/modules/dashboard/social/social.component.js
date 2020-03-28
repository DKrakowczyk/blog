import { useMutation, useQuery } from "@apollo/react-hooks";
import { Divider, Drawer, Empty, Icon, Input } from "antd";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { EDIT_ABOUT } from "../../gql/about.mutations";
import { GET_ABOUT_SOCIAL } from "../../gql/about.queries";
import { openNotification } from "../common/notification.component";
import { HelpButton, MediaHelp } from "../common/notification.helper";

export const SocialComponent = props => {
  const [modalVisible, setModalVisible] = useState(false);

  const Content = styled.div`
    width: 100%;
  `;
  const { data } = useQuery(GET_ABOUT_SOCIAL);
  const about = data ? data.getAbout : null;
  const [social, setSocial] = useState({
    facebook: "",
    instagram: "",
    twitter: "",
    linkedIn: ""
  });

  useEffect(() => {
    setSocial(about);
  }, [about]);

  useEffect(() => {
    if (!modalVisible && social.facebook !== "") {
      save();
    }
    // eslint-disable-next-line
  }, [modalVisible]);

  const [editAbout] = useMutation(EDIT_ABOUT, {
    refetchQueries: () => [
      {
        query: GET_ABOUT_SOCIAL
      }
    ]
  });

  const save = async () => {
    try {
      delete social.__typename;
      await editAbout({
        variables: { about: social }
      });
      openNotification(
        "success",
        "You are so social!",
        `Social section updated`
      );
    } catch (error) {
      openNotification("error", "Oh no, you can not do this!", error.message);
    }

    setModalVisible(false);
  };
  //
  return (
    <div>
      <Content>
        <HelpButton fn={MediaHelp} />
        <Divider>
          <Icon type="heat-map" /> Social
        </Divider>
        <Empty
          image="https://www.printgenie.com/images/setting/1563463544VYKkuDUP2HGBJubCeVdi-website-design-in-patna.png"
          imageStyle={{
            height: 120
          }}
          description={<span>Edit Social URL's</span>}
          onClick={() => setModalVisible(true)}
        ></Empty>
      </Content>
      <Divider />
      <Drawer
        title="Edit your social's"
        placement={"right"}
        closable={false}
        onClose={() => {
          setModalVisible(false);
        }}
        visible={modalVisible}
        width={"40%"}
      >
        <Divider> Facebook </Divider>
        <Input
          placeholder="Enter your Facebook URL"
          prefix={<Icon type="facebook" />}
          value={social && social.facebook}
          onChange={e =>
            setSocial({
              facebook: e.target.value,
              instagram: social.instagram,
              twitter: social.twitter,
              linkedIn: social.linkedIn
            })
          }
        />
        <Divider> Instagram </Divider>
        <Input
          placeholder="Enter your Instagram URL"
          prefix={<Icon type="instagram" />}
          value={social && social.instagram}
          onChange={e =>
            setSocial({
              facebook: social.facebook,
              instagram: e.target.value,
              twitter: social.twitter,
              linkedIn: social.linkedIn
            })
          }
        />
        <Divider> Twitter </Divider>
        <Input
          placeholder="Enter your Twitter URL"
          prefix={<Icon type="twitter" />}
          value={social && social.twitter}
          onChange={e =>
            setSocial({
              facebook: social.facebook,
              instagram: social.instagram,
              twitter: e.target.value,
              linkedIn: social.linkedIn
            })
          }
        />
        <Divider> LinkedIn </Divider>
        <Input
          placeholder="Enter your LinkedIn URL"
          prefix={<Icon type="linkedin" />}
          value={social && social.linkedIn}
          onChange={e =>
            setSocial({
              facebook: social.facebook,
              instagram: social.instagram,
              twitter: social.twitter,
              linkedIn: e.target.value
            })
          }
        />
      </Drawer>
    </div>
  );
};
