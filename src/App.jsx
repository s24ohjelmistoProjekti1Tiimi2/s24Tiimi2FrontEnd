import './App.css'

import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Toolbar, Typography } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

function App() {
  return (

    <Container maxWidth="xl">
      <CssBaseline />
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(64, 160, 86, 0.3)",
        }}>
        <Toolbar className="toolbar">
          <Typography variant="h6">Omppu and Rane&apos;s Shop</Typography>
          <nav>
            <Link to={"/"} className="nav-links">Home</Link>
            <Link to={"/products"} className="nav-links">Products</Link>
            <Link to={"/about"} className="nav-links">About</Link>
            <Link to={"/registration"} className="nav-links">Registration</Link>
          </nav>
        </Toolbar>
      </AppBar>
      <Outlet />
    </Container>
  )
}

export default App