import { Box, Typography } from '@mui/material'
import '../App.css'

export default function Home() {

    return(
        <Box
        sx={{ display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'relative',
        top: '50px',
        left: '-50px' }}>

        <Typography variant='h2' style={{color: 'black'}}>Welcome to Omppu and Rane's shop</Typography>

        <Typography>Here you will find the latest and most popular dog supplies and food for your furry friend!</Typography>
        
        </Box>
    )
    
}