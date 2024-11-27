import { Box, Typography } from '@mui/material'
import '../App.css'

export default function Home() {

    return(
        <Box style={{ marginTop: '-400px', marginLeft: '-350px' }}>

        <Typography variant='h2' style={{color: 'black'}}>Welcome to Omppu and Rane's shop</Typography>

        <Typography style={{}}>Here you will find the latest and most popular dog supplies and food for your furry friend!</Typography>
        
        </Box>
    )
    
}