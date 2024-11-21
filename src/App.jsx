import { useState } from 'react'
import './App.css'
import './tabsStyles.css';

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import Products from './components/Products';
import About from './components/About';


function App() {


  const [value, setValue] = useState('0')

  // CONST FUNC implemented with help by CHATGPT
  const handleChange = (event, newValue) => {
    //setDesc(event.target.value);
    setValue(newValue)
  };


  return (

    <Container maxWidth="xl">

      <CssBaseline />

      <Stack
        mt={2}
        direction="column"
        spacing={2}
        justifyContent="center"
        alignItems="center"
      >
        <AppBar position="fixed" sx={{ backgroundColor: '#40A056' }}>
          <Toolbar>
            <Typography variant="h6">Omppu and Rane Shop</Typography>
          </Toolbar>
        </AppBar>

        <img src="/src/images/Paw_Print.png" alt="Paw" style={{ width: '250px', height: 'auto', margin: '20px 0' }} />

        {/*TABCONTEXT, TABS and TABPANEL implemented with help by MUI docs and CHATGPT */}
        <TabContext value={value}>
          <Tabs
            value={value} onChange={handleChange}
            centered
            sx={{
              width: "100%",
              backgroundColor: '#40A056',
              "& .MuiTabs-indicator": { backgroundColor: "white" },
              "& .MuiTab-root": { color: "white" },
              "& .Mui-selected": { color: "white" },
            }}
          >

            <Tab label="HOME PAGE" value="0"
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
              }}
            />
            <Tab label="PRODUCTS" value="1"
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
              }}
            />
            <Tab label="ABOUT" value="2"
              sx={{
                color: "white",
                "&.Mui-selected": {
                  color: "white",
                },
              }} />
          </Tabs>


          <TabPanel value="0">


            <p>Welcome to the shop!</p>
          </TabPanel>

          <TabPanel value="1">
            <Products />
          </TabPanel>

          <TabPanel value="2">
            <About />
          </TabPanel>

        </TabContext>
      </Stack>

    </Container>
  )
}

export default App