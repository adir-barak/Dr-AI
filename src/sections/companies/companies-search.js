import MagnifyingGlassIcon from "@heroicons/react/24/solid/MagnifyingGlassIcon";
import { Card, InputAdornment, OutlinedInput, SvgIcon } from "@mui/material";

export const CompaniesSearch = (props) => {
  const searchUpdateHandler = (event) => {
    const value = event.target.value.toLowerCase();

    props.setCompanies(
      props.companiesData.filter((company) => {
        return (
          company.title.toLowerCase().includes(value) || company.tags.toLowerCase().includes(value)
        );
      })
    );
    // console.log(props.companies);
  };
  return (
    <Card sx={{ p: 2, width: "50%" }}>
      <OutlinedInput
        onChange={searchUpdateHandler}
        defaultValue=""
        fullWidth
        placeholder="Search Template"
        startAdornment={
          <InputAdornment position="start">
            <SvgIcon color="action" fontSize="small">
              <MagnifyingGlassIcon />
            </SvgIcon>
          </InputAdornment>
        }
        sx={{ maxWidth: 500 }}
      />
    </Card>
  );
};
