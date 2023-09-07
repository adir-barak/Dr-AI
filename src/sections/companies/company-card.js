import PropTypes from "prop-types";
import ArrowDownOnSquareIcon from "@heroicons/react/24/solid/ArrowDownOnSquareIcon";
import ChartPieIcon from "@heroicons/react/24/solid/ChartPieIcon";
import ClockIcon from "@heroicons/react/24/solid/ClockIcon";
import { Avatar, Box, Card, CardContent, Divider, Stack, SvgIcon, Typography } from "@mui/material";
import Link from "next/link";

export const CompanyCard = (props) => {
  const { company } = props;

  return (
    // <Link href={"/"} sx={{ color: "black", textDecoration: "none !important" }}>
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        color: "black",
        textDecoration: "none !important",
        "&:hover": {
          cursor: "pointer",
          // backgroundColor: "rgb(244 244 244)",
          border: "1px solid rgb(177 177 177)",
        },
      }}
    >
      <CardContent>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            pb: 3,
          }}
        >
          <Link href={"/settings"} sx={{ color: "black", textDecoration: "none !important" }}>
            <Avatar src={company.logo} variant="square" />
          </Link>
        </Box>
        <Typography align="center" gutterBottom variant="h5">
          {company.title}
        </Typography>
        <Typography align="center" variant="body1">
          {company.description}
        </Typography>
      </CardContent>
      <Box sx={{ flexGrow: 1 }} />
      <Divider />
      <Stack
        alignItems="center"
        direction="row"
        justifyContent="space-between"
        spacing={2}
        sx={{ p: 2 }}
      >
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <ClockIcon />
          </SvgIcon>
          <Typography color="text.secondary" display="inline" variant="body2">
            Last used 1 min ago
          </Typography>
        </Stack>
        <Stack alignItems="center" direction="row" spacing={1}>
          <SvgIcon color="action" fontSize="small">
            <ChartPieIcon />
          </SvgIcon>

          <Typography color="text.secondary" display="inline" variant="body2">
            Match Rate: {company.downloads}
          </Typography>
        </Stack>
      </Stack>
    </Card>
    // </Link>
  );
};

CompanyCard.propTypes = {
  company: PropTypes.object.isRequired,
};
