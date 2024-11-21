import { Box, Typography } from '@mui/material';
import '../App.css'

function About() {

	// About text was improved with the help of CHATGPT
	return (
		<Box 
      sx={{ 
        display: 'block', 
        justifyContent: 'center', 
        alignItems: 'center',
        backgroundColor: 'rgba(245, 245, 245, 0.8)',
		margin: 0,
        padding: 2,
      }}
    >
		
      <Typography variant="h4" gutterBottom>
        About us
      </Typography>
      <Typography variant="body1" paragraph>
        Hi! We are Omppu and Rane!
      </Typography>
      <Typography variant="body1" paragraph>
        Since 2022, our small cozy shop has dedicated itself to improving the lives of pets and
        their owners by offering high-quality, safe, and carefully selected products.
      </Typography>
      <Typography variant="body1" paragraph>
        We focus on supporting local brands, sustainability, and personalized service. We want to
        ensure that every pet gets what they truly deserve - only the best.
      </Typography>
      <Typography variant="body1" paragraph>
        Come and join us in making the world a better place for our lovely companions &lt;3
      </Typography>
      <Typography
        variant="body2"
        sx={{ textAlign: 'right', fontStyle: 'italic', marginTop: 2 }}
      >
        Orshop Oy, 1083808-5
      </Typography>
    </Box>
	)
}

export default About