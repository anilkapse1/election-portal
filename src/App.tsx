import { Clear, Search } from "@mui/icons-material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, IconButton, InputAdornment, Tab, TextField, Typography } from "@mui/material";
import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import Listofparticipant from "./pages/participants";
import ElectedMember from "./pages/elected";

import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const App = () => {
  const [tabValue, setTabValue] = React.useState("1");
  const [participants, setParticipants] = useState([]);
  const [searchMember, setSearchMember] = useState<string>("");

  const handleChange = (newValue: any) => {
    setTabValue(newValue);
  };

  useEffect(() => {
    const fetchParticipants = async () => {
      try {
        const response = await axios.get("./list/participants.json");
        setParticipants(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchParticipants();
  }, []);

  return (
    <div id="rsst">
      <Box className="heading-area" sx={{ mt: 1, mb: 5 }}>
        <Typography variant="h3" gutterBottom>
          Welcome To RSST Election Portal - 2024
        </Typography>
        <Box sx={{ display: "flex", alignItems: "flex-end", width: "500px" }}>
          <TextField
            fullWidth
            className="search"
            placeholder="Search participants"
            variant="standard"
            size="small"
            color="primary"
            value={searchMember}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchMember(e.target.value)}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position="end">
                  {searchMember && (
                    <IconButton onClick={() => setSearchMember("")}>
                      <Clear fontSize="small" />
                    </IconButton>
                  )}
                </InputAdornment>
              ),
            }}
          />
        </Box>
      </Box>

      <Box>
        <TabContext value={tabValue}>
          <Box sx={{ borderBottom: 1, borderColor: "divider", display: "inline-flex" }}>
            <TabList onChange={handleChange}>
              <Tab label="participants members" value="1" />
              <Tab label="Elected members" value="2" />
            </TabList>
          </Box>
          <TabPanel value="1">
            <Listofparticipant participants={participants} searchMember={searchMember} />
          </TabPanel>
          <TabPanel value="2">
            <ElectedMember participants={participants} searchMember={searchMember} />
          </TabPanel>
        </TabContext>
      </Box>
    </div>
  );
};

export default App;
