import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import BarChart from "../../Components/BarChart";
import { mockDataTeam, mockDataContacts } from "../../../Data/mockdata";

import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../Components/head";

const contacts = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "NAME",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    {
      field: "age",
      headerName: "AGE",
      type: "number ",
      headerAlign: "left",
      align: "left",
    },
    {
      field: "phone",
      headerName: "PHONE",
      flex: 1,
    },
    {
      field: "email",
      headerName: "EMAIL",
      flex: 1,
    },
    {
      field: "city",
      headerName: "CITY",
      flex: 1,
    },
    {
      field: "registrarId",
      headerName: "Registration ID",
      type: "number",
      flex: 1,
    },
    {
      field: "zipCode",
      headerName: "ZIP#",
      flex: 1,
    },
  ];
  return (
    <Box>
      <Header title="CONTACTS" subtittle="Voila contactos" />
      <Box
        m="40px 2px 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.blueAccent[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[300],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.blueAccent[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
          "& .MuiDataGrid-toolbarContainer": {
            backgroundColor: colors.blueAccent[300],
          },
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataContacts}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
        />
      </Box>
      <BarChart />
    </Box>
  );
};

export default contacts;
