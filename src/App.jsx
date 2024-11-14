import { useState } from 'react'
import './App.css'


import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Stack, Tab, Tabs, Toolbar, Typography } from '@mui/material';
import { TabContext, TabPanel } from '@mui/lab';
import Products from './Products';
import About from './About';


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
        <AppBar position="fixed">
          <Toolbar>
            <Typography variant="h6">Ompun ja Ranen kauppa</Typography>
          </Toolbar>
        </AppBar>



        {/*TABCONTEXT, TABS and TABPANEL implemented with help by MUI docs and CHATGPT */}
        <TabContext value={value}>
          <Tabs
            value={value} onChange={handleChange}
            centered>

            <Tab label="HOME PAGE" value="0" />
            <Tab label="PRODUCTS" value="1" />
            <Tab label="ABOUT" value="2" />
          </Tabs>


          <TabPanel value="0">


            <p>Welcome to the app!</p>
          </TabPanel>

          <TabPanel value="1">
            <Products/>
          </TabPanel>

          <TabPanel value="2">
            <About/>
          </TabPanel>

        </TabContext>
      </Stack>

    </Container>
  )
}

export default App