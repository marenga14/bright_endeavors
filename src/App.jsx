import { useState } from "react";
import { ColorModeContext, useMode } from "./theme";
import { Route, Routes } from "react-router-dom";
import { ProSidebarProvider } from "react-pro-sidebar";
import Chart from "./Components/hoola";
import Home from "./Views/Home";

import Contacts from "./Views/contancts";
import Bars from "./Views/Bar";
import ChartsPie from "./Views/Pie/ index";

import Faq from "./Views/FAQ";
import BarChart from "./Components/BarChart";
// import Geography from "./Views/Geography";
import Invoices from "./Views/Invoices";
import Line from "./Views/Line";
import PieCharts from "./Views/Pie/ index";
import Team from "./Views/Teams";
import HeadTopBar from "./Views/globals/headTopBar";
import SideBar from "./Views/globals/sidebar";
import Header from "./Components/head";
import Calender from "./Views/Calender";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import Dashboard from "./Views/dashboard/ index";
import Form from "./Views/Forms";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <div className="app">
          {/* <SideBar /> */}
          <main className="content">
            {/* <HeadTopBar /> */}
            {/* <Header /> */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Dashboard />} />
              <Route path="/te" element={<Team />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/invoices" element={<Invoices />} />
              <Route path="/forms" element={<Form />} />
              <Route path="/calendar" element={<Calender />} />
              <Route path="/faq" element={<Faq />} />
              <Route path="/bar" element={<BarChart />} />
              <Route path="/pie" element={<ChartsPie />} />
              <Route path="/line" element={<Line />} />
            </Routes>
          </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
