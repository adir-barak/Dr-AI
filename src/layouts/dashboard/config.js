import ChartBarIcon from "@heroicons/react/24/solid/ChartBarIcon";
import CubeTransparentIcon from "@heroicons/react/24/solid/CubeTransparentIcon";
import EyeDropperIcon from "@heroicons/react/24/solid/EyeDropperIcon";
import TableCellsIcon from "@heroicons/react/24/solid/TableCellsIcon";
import UserIcon from "@heroicons/react/24/solid/UserIcon";
import UserPlusIcon from "@heroicons/react/24/solid/UserPlusIcon";
import UsersIcon from "@heroicons/react/24/solid/UsersIcon";
import XCircleIcon from "@heroicons/react/24/solid/XCircleIcon";
import { SvgIcon } from "@mui/material";

export const items = [
  {
    title: "Overview",
    path: "/",
    icon: (
      <SvgIcon fontSize="small">
        <ChartBarIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Appointment",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <UserIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Discharge Letter",
    path: "/companies",
    icon: (
      <SvgIcon fontSize="small">
        <TableCellsIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Patients",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <UsersIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Analysis",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <CubeTransparentIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Medication",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <EyeDropperIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Check-In",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <UserPlusIcon />
      </SvgIcon>
    ),
  },
  {
    title: "Logout",
    path: "",
    icon: (
      <SvgIcon fontSize="small">
        <XCircleIcon />
      </SvgIcon>
    ),
  },
];
