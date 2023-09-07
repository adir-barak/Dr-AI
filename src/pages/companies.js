import Head from "next/head";
import ArrowUpOnSquareIcon from "@heroicons/react/24/solid/ArrowUpOnSquareIcon";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import PlusIcon from "@heroicons/react/24/solid/PlusIcon";
import {
  Box,
  Button,
  Container,
  Pagination,
  Stack,
  SvgIcon,
  Typography,
  Unstable_Grid2 as Grid,
} from "@mui/material";
import { Layout as DashboardLayout } from "src/layouts/dashboard/layout";
import { CompanyCard } from "src/sections/companies/company-card";
import { CompaniesSearch } from "src/sections/companies/companies-search";
import { useState } from "react";

const companiesData = [
  {
    id: "2569ce0d517a7f06d3ea1f24",
    createdAt: "27/03/2019",
    description:
      "The patient presented to the emergency department with complaints of severe chest pains and general weakness. The chest pain was described as crushing in nature and radiating to the left arm. The patient reported that the symptoms had been...",
    logo: "/assets/logos/logo-dropbox.png",
    title: "Myocardial Infarction (MI)",
    tags: "chest pain%chest pains%heart attack%mi",
    downloads: "92%",
  },
  {
    id: "ed2b900870ceba72d203ec15",
    createdAt: "31/03/2019",
    description:
      "The patient presented to the emergency department with complaints of persistent chest pains. The chest pain was described as burning and discomfort located in the epigastric region and radiating upwards towards the throat...",
    logo: "/assets/logos/logo-medium.png",
    title: "Gastroesophageal Reflux Disease (GERD)",
    tags: "chest pain%chest pains%gastroesophageal reflux diseasek%gerd",
    downloads: "84%",
  },
  {
    id: "a033e38768c82fca90df3db7",
    createdAt: "03/04/2019",
    description:
      "The patient presented to the emergency department with complaints of severe abdominal pain and general weakness. The abdominal pain was initially periumbilical and subsequently migrated to the right lower quadrant of the abdomen...",
    logo: "/assets/logos/logo-slack.png",
    title: "Appendicitis",
    tags: "abdominal pain%abdominal pains%appendicitis",
    downloads: "70%",
  },
  {
    id: "1efecb2bf6a51def9869ab0f",
    createdAt: "04/04/2019",
    description:
      "The patient presented to the emergency department with complaints of an allergic reaction. The patient reported the sudden onset of symptoms shortly after exposure to a known allergen, which...",
    logo: "/assets/logos/logo-lyft.png",
    title: "Allergic Reaction",
    tags: "allergic reaction",
    downloads: "44%",
  },
  {
    id: "1ed68149f65fbc6089b5fd07",
    createdAt: "04/04/2019",
    description:
      "The patient presented to the emergency department with a fever and respiratory symptoms. The patient reported a history of fever, cough, and difficulty breathing. The fever was associated with chills and rigors...",
    logo: "/assets/logos/logo-github.png",
    title: "Pneumonia",
    tags: "fever%pneumonia%cold",
    downloads: "35%",
  },
  {
    id: "5dab321376eff6177407e887",
    createdAt: "04/04/2019",
    description:
      "The patient presented to the emergency department with severe burns. The burns were sustained in...",
    logo: "/assets/logos/logo-squarespace.png",
    title: "Severe Burns",
    tags: "%severe burns",
    downloads: "16%",
  },
];

const Page = () => {
  const [companies, setCompanies] = useState(companiesData);
  return (
    <>
      <Head>
        <title>Discharge Letter</title>
      </Head>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
              <Stack spacing={1}>
                <Typography variant="h4">
                  Write a new discharge letter
                </Typography>
                <Stack alignItems="center" direction="row" spacing={1}>
                  {/* <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowUpOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Import
                </Button>
                <Button
                  color="inherit"
                  startIcon={(
                    <SvgIcon fontSize="small">
                      <ArrowDownOnSquareIcon />
                    </SvgIcon>
                  )}
                >
                  Export
                </Button> */}
                </Stack>
              </Stack>
              {/* <div>
              <Button
                startIcon={(
                  <SvgIcon fontSize="small">
                    <PlusIcon />
                  </SvgIcon>
                )}
                variant="contained"
              >
                Add
              </Button>
            </div> */}
            </Stack>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                flexBasis: "50%",
              }}
            >
              <CompaniesSearch companies={companiesData} setCompanies={setCompanies} />
            </Box>

            <Grid container spacing={3}>
              {companies.map((company) => (
                <Grid xs={12} md={6} lg={4} key={company.id}>
                  <CompanyCard company={company} />
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Pagination count={3} size="small" />
            </Box>
          </Stack>
        </Container>
      </Box>
    </>
  );
};

Page.getLayout = (page) => <DashboardLayout>{page}</DashboardLayout>;

export default Page;
