import { useState } from 'react'
import './App.css'





function Products() {


	const [value, setValue] = useState('0')

	// CONST FUNC implemented with help by CHATGPT
	const handleChange = (event, newValue) => {
		//setDesc(event.target.value);
		setValue(newValue)
	};


	return (
		<>
			<h2>Products list</h2>
			<p>This page is about the products</p>
		</>
	)
}

export default Products