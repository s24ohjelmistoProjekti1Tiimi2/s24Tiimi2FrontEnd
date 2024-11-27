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
          <Toolbar className="toolbar">
            <Typography variant="h6">Omppu and Rane Shop</Typography>
            <nav>
              <Link to={"/"} className="nav-links">Home</Link>
              <Link to={"/products"} className="nav-links">Products</Link>
              <Link to={"/about"} className="nav-links">About</Link>
            </nav>
          </Toolbar>
        </AppBar>
        <Outlet />
      </Stack>
    </Container>
  )
}

export default App