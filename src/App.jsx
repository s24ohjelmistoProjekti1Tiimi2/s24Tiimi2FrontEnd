import './App.css'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
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
            <nav>
              <Link to={"/"}>Home</Link>
              <Link to={"/products"}>Products</Link>
              <Link to={"/about"}>About</Link>
            </nav>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Stack>
    </Container>
  )
}

export default App