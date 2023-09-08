import { useCallback, useState, useEffect } from "react";
import { useRouter } from "next/router";

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Stack,
  Typography,
  Unstable_Grid2 as Grid,
  Box,
} from "@mui/material";

export const SettingsNotifications = (props) => {
  const router = useRouter(); // Initialize useRouter within your component

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
  }, []);

  const [isLoading, setIsLoading] = useState(false);

  const loading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      // Route to "/" after 2 seconds
      router.push("/");
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Card>
        <CardHeader subheader="...*Personal Information*" title="Discharge Summary" />
        <Divider />
        <CardContent sx={{ width: "84%" }}>
          <Typography variant="p">
            Diagnosis:
            <Divider sx={{ width: "22%" }} />
            Myocardial Infarction (MI)
            <br />
            <br />
            Medical History:
            <Divider sx={{ width: "22%" }} />
            Mr. John Smith is a 75-year-old male with a significant medical history, including
            hypertension, hyperlipidemia, and a previous myocardial infarction (MI) 5 years ago. He
            has been compliant with his medications, which include aspirin, atorvastatin, and
            lisinopril.
            <br />
            <br />
            Presenting Complaints:
            <Divider sx={{ width: "22%" }} />
            Mr. Smith presented to the emergency department with complaints of severe chest pain
            that had been ongoing for the past{" "}
            <span
              tabIndex="1"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              2
            </span>{" "}
            hours. He described the pain as a crushing sensation in his chest that radiated to his
            left arm. He also reported associated symptoms of shortness of breath and diaphoresis.
            <br />
            <span
              tabIndex="2"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              Additionally, he complained of general weakness and fatigue over the past week.
            </span>
            <br />
            <br />
            Physical Examination:
            <Divider />
            Upon admission, Mr. Smith appeared distressed and diaphoretic. Vital signs revealed a
            blood pressure of{" "}
            <span
              tabIndex="3"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              160/190
            </span>{" "}
            mmHg, heart rate of{" "}
            <span
              tabIndex="4"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              100
            </span>{" "}
            bpm, respiratory rate of{" "}
            <span
              tabIndex="5"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              20
            </span>{" "}
            breaths per minute, and oxygen saturation of{" "}
            <span
              tabIndex="6"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              95%
            </span>{" "}
            on room air. Cardiac auscultation revealed normal heart sounds with no murmurs or
            gallops. There were no signs of jugular venous distention, and lung auscultation was
            clear. Abdominal examination was unremarkable.
            <br />
            <br />
            Diagnostic Findings:
            <Divider sx={{ width: "22%" }} />
            1. Electrocardiogram (ECG) showed{" "}
            <span
              tabIndex="7"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              ST-segment elevation in leads II, III, aVF, and V2-V6, consistent with an acute
              myocardial infarction (MI).
            </span>
            <br />
            2. Troponin levels were{" "}
            <span
              tabIndex="8"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              elevated at 0.12ng/mL, confirming myocardial damage.
            </span>
            <br />
            3. Chest X-ray showed no acute pulmonary abnormalities.
            <br />
            <br />
            Treatment:
            <Divider sx={{ width: "22%" }} />
            Mr. Smith was immediately started on aspirin, clopidogrel, and intravenous nitroglycerin
            for chest pain relief. He was also administered oxygen via nasal cannula to maintain
            oxygen saturation above 94%. Subsequently, he underwent emergent cardiac
            catheterization, which revealed a significant occlusion in the left anterior descending
            (LAD) coronary artery. Percutaneous coronary intervention (PCI) was performed
            successfully, and a drug-eluting stent was placed in the LAD.{" "}
            <span
              tabIndex="9"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              Throughout his hospitalization, Mr. Smith received appropriate antiplatelet therapy,
              statin medication, and antihypertensive agents to manage his comorbidities.
            </span>{" "}
            He was closely monitored for any arrhythmias or complications.
            <br />
            <br />
            Outcome:
            <Divider sx={{ width: "22%" }} />
            Mr. Smith's chest pain resolved after the PCI procedure, and subsequent ECGs showed
            resolution of ST-segment elevation. His troponin levels began to trend downward. His
            general weakness improved with adequate rest and cardiac rehabilitation. He was educated
            on lifestyle modifications, including dietary changes, regular exercise, and smoking
            cessation.
            <br />
            <br />
            Discharge Plan:
            <Divider sx={{ width: "22%" }} />
            Mr. Smith was discharged in stable condition on aspirin, clopidogrel, atorvastatin,
            lisinopril, and metoprolol. He was advised to follow up with his cardiologist in one
            week and continue cardiac rehabilitation as prescribed.{" "}
            <span
              tabIndex="10"
              style={props.preCompletionStyle}
              onKeyDown={props.handleCompletion}
              onFocus={props.handleFocus}
              className="completion-span"
            >
              Throughout his hospitalization, Mr. Smith received appropriate antiplatelet therapy,
              statin medication, and antihypertensive agents to manage his comorbidities.
            </span>{" "}
            He was also instructed on the importance of adherence to medications, lifestyle
            modifications, and recognizing the signs of recurrent chest pain or heart-related
            symptoms.
            <br />
            <br />
            Follow-up:
            <Divider sx={{ width: "22%" }} />
            Mr. Smith's condition will be closely monitored by his cardiologist, and adjustments to
            his medication regimen will be made as needed to optimize his cardiovascular health.
            <br />
            <br />
            <br />
            <br />
            Provider's Signature: __________________________
            <br />
            Date of Discharge: 08/09/2023
          </Typography>
        </CardContent>

        {/* <CardContent>
          <Grid container spacing={6} wrap="wrap">
            <Grid xs={12} sm={6} md={4}>
              <Stack spacing={1}>
                <Typography variant="h6">Notifications</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Push Notifications"
                  />
                  <FormControlLabel control={<Checkbox />} label="Text Messages" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Phone calls" />
                </Stack>
              </Stack>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Stack spacing={1}>
                <Typography variant="h6">Messages</Typography>
                <Stack>
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Email" />
                  <FormControlLabel control={<Checkbox />} label="Push Notifications" />
                  <FormControlLabel control={<Checkbox defaultChecked />} label="Phone calls" />
                </Stack>
              </Stack>
            </Grid>
          </Grid>
        </CardContent> */}
        <Divider />
        <Box sx={{ display: "flex", justifyContent: "end", flexDirection: "row" }}>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <div>
              <img
                style={{ visibility: isLoading ? "visible" : "hidden", width: "65px" }}
                src="/assets/spinner.gif"
                alt="Loading..."
              />
              {/* {isLoading ? (
                
              ) : (
                <div></div>
              )} */}
            </div>
            <Button onClick={loading} variant="contained">
              Print
            </Button>
          </CardActions>
          <CardActions sx={{ justifyContent: "flex-end" }}>
            <Button onClick={loading} variant="contained">
              Send
            </Button>
          </CardActions>
        </Box>
      </Card>
    </form>
  );
};
