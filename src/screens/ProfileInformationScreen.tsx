import { Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import useRouter from "use-react-router";
import * as Yup from "yup";

import { Screen, TextField } from "../components";
import { updatePlayerProfile } from "../providers";

export default function ProfileInformationScreen() {
  const dispatch = useDispatch();
  const { history } = useRouter();

  function handleFormSubmit({ profileName, organizationName }: any) {
    dispatch(updatePlayerProfile({ name: profileName, organizationName }));
    history.push("/select-a-profile");
  }

  return (
    <Formik
      initialValues={{
        profileName: "AAA",
        organizationName: "AAA"
      }}
      validationSchema={Yup.object().shape({
        profileName: Yup.string()
          .min(3, "A profile name must contain at least three characters.")
          .max(50, "A profile name must contain 50 or fewer characters.")
          .required("A profile name is required."),
        organizationName: Yup.string()
          .min(
            3,
            "An organization name must contain at least three characters."
          )
          .max(50, "An organization name must contain 50 or fewer characters.")
          .required("An organization name is required.")
      })}
      onSubmit={handleFormSubmit}
      render={({ handleSubmit }) => (
        <Screen
          title="Enter Profile Information"
          actions={[
            {
              name: "Continue",
              positive: true,
              onClick: handleSubmit
            }
          ]}
        >
          <StyledProfileInformationScreen>
            <Form>
              <TextField
                label="Profile Name"
                name="profileName"
                placeholder="Enter a name for your profile"
              />
              <TextField
                label="Organization Name"
                name="organizationName"
                placeholder="Enter a name for your organization"
              />
            </Form>
          </StyledProfileInformationScreen>
        </Screen>
      )}
    />
  );
}

const StyledProfileInformationScreen = styled.div<any>``;
