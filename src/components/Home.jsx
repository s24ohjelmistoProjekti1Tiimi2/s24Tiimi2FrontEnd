import { Box, Typography } from '@mui/material'
import '../App.css'

export default function Home() {

    return(
        <Box
        sx={{
        display: 'block',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        paddingTop: '130px',
        paddingRight: '350px',
        boxSizing: 'border-box'
        }}
        
        >

        <Typography
        variant='h3'
        sx={{
            color: 'black',
            fontSize: 'clamp(1.5rem, 5vw, 3rem)'
        }}
        >
            Welcome to Omppu and Rane&apos;s Shop
        </Typography>

        <Typography
        variant='subtitle1'
        sx={{
            fontSize: 'clamp(0,8rem, 3vw, 1,5rem)',
          }}        
        >
            Here you will find the latest and most popular dog supplies and food for your furry friend!</Typography>
        
        </Box>
    )
    
}