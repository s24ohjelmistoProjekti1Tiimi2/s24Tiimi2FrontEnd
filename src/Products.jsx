import { useEffect, useState } from 'react'
import './App.css'
import { getProducts } from './shopApi';
import { AgGridReact } from 'ag-grid-react';

import "ag-grid-community/styles/ag-grid.css"; 
import "ag-grid-community/styles/ag-theme-material.css";



function Products() {

	const [products, setProducts] = useState([]);

	const [colDefs, setColDefs] = useState([
		{ field : "name", filter: true },
		{ field: "color", filter: true, width:150 },
		{ field: "price", filter: true, width: 150 },
		{ field: "size", filter: true, width: 120 },
		{ field: "manufacturer", filter: true },
		{ field: "type", filter: true, width:150 },
	])
	
	useEffect(() => {
		handleFetch();
	}, []);
	
	const handleFetch = () => {
		getProducts()
			.then(data => {
				const updatedData = data.map(product => ({
					...product, 
					manufacturer: product.manufacturer.name,
					type: product.type.name
				}));
				setProducts(updatedData)
			})
			.catch(error => console.error(error))
	};


	// const [value, setValue] = useState('0')

	// // CONST FUNC implemented with help by CHATGPT
	// const handleChange = (event, newValue) => {
	// 	//setDesc(event.target.value);
	// 	setValue(newValue)
	// };


	return (
		<>
			<h2>Products list</h2>
			<div className='ag-theme-material' style={{height: 500, width:1000}}>
			<AgGridReact
				rowData={products}
				columnDefs={colDefs}
				pagination={true}
				paginationAutoPageSize={true}
				suppressCellFocus={true}
			/>
			</div>
		</>
	)
}

export default Products;