import { useCallback, useState } from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Divider,
  Stack,
  TextField,
} from "@mui/material";

export const SettingsPassword = (props) => {
  const [popup, setPopup] = useState(false);
  const [values, setValues] = useState({
    password: "",
    confirm: "",
  });

  const handleEnter = (event) => {
    setPopup(true);
  };

  const handleLeave = (event) => {
    setPopup(false);
  };

  const handleChange = useCallback((event) => {
    setValues((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  }, []);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader
          // subheader="Update password"
          title="Treatment"
        />
        <Divider />
        <CardContent>
          <Stack spacing={3} sx={{ maxWidth: 400 }}>
            <div onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
              <TextField
                fullWidth
                label="Medications"
                name="Medications"
                onChange={handleChange}
                type="text"
                value="Aspirin. 100mg"
                // onMouseEnter={handleEnter}
                // onMouseLeave={handleLeave}
              />
            </div>
            <TextField
              fullWidth
              label="Instructions"
              name="Instructions"
              onChange={handleChange}
              type="text"
              value="Lifestyle modifications, dietary changes, regular exer..."
              tabIndex="12"
            />
            {popup && (
              <img
                style={{
                  border: "1px solid #e4e4e4",
                  position: "absolute",
                  top: "1550px",
                  left: "480px",
                  width: "700px",
                }}
                src="/assets/literature.gif"
              />
            )}
          </Stack>
        </CardContent>
        <Divider />
        <CardActions sx={{ justifyContent: "flex-end" }}>
          <Button variant="contained">Update</Button>
        </CardActions>
      </Card>
    </form>
  );
};
