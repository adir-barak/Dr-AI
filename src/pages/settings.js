import Head from "next/head";
import { Box, Container, Stack, Typography } from "@mui/material";
import { SettingsNotifications } from "src/sections/settings/settings-notifications";
import { SettingsPassword } from "src/sections/settings/settings-password";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";

let lastElement = null;

const preCompletionStyle = {
  padding: "2px",
  backgroundColor: "rgb(247,247,247)",
  border: "1px solid rgb(174,174,174)",
  // borderRadius: "18%",
  color: "rgb(247,247,247)",
};

const Page = () => {
  const handleFocus = (event) => {
    if (event.target.className === "completion-span") {
      event.target.style.color = "rgb(174,174,174)";
    }
  };

  const handleCompletion = (event) => {
    if (
      event.target.className === "completion-span" &&
      (event.key === "Tab" || event.key === "Enter")
    ) {
      // Call your function when Tab or Enter is pressed
      event.target.style = {};
      if (lastElement) {
        lastElement.tabIndex += 12;
      }
      lastElement = event.target;
    }
  };
  return (
    <>
      <Head>
        <title>Template | MI</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={3}>
            <Typography variant="h4">Template | Myocardial Infarction (MI)</Typography>
            <SettingsNotifications
              lastElement={lastElement}
              preCompletionStyle={preCompletionStyle}
              handleCompletion={handleCompletion}
              handleFocus={handleFocus}
            />
            <SettingsPassword
              lastElement={lastElement}
              preCompletionStyle={preCompletionStyle}
              handleCompletion={handleCompletion}
              handleFocus={handleFocus}
            />
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
