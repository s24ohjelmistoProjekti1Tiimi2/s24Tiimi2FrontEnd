import { useState } from 'react'
import '../App.css'





function About() {


	const [value, setValue] = useState('0')

	// CONST FUNC implemented with help by CHATGPT
	const handleChange = (event, newValue) => {
		//setDesc(event.target.value);
		setValue(newValue)
	};


	return (
		<>
			<h2>About us</h2>
			<p>This page is about us.</p>
		</>
	)
}

export default About