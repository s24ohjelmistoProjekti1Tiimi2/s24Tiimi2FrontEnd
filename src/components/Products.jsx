import '../App.css'

import { useEffect, useState } from 'react'
import { getProducts } from '../shopApi';
import { Stack, Typography } from '@mui/material';

import { DataGrid, GridToolbarColumnsButton, GridToolbarContainer, GridToolbarDensitySelector, GridToolbarFilterButton } from '@mui/x-data-grid';

function CustomToolbar() {
	return (
	  <GridToolbarContainer sx={{ backgroundColor: "white" }}>
		<GridToolbarColumnsButton />
		<GridToolbarFilterButton />
		<GridToolbarDensitySelector
		  slotProps={{ tooltip: {title: "Change density"} }}
		/>
	</GridToolbarContainer>
	);
}

function Products() {

	const [products, setProducts] = useState([]);

	const columns = [
		{ field: "name", headerName:"Name" },
		{ field: "color", headerName:"Color", width: 150 },
		{ field: "price", headerName:"Price", width: 150 },
		{ field: "size", headerName:"Size", width: 120 },
		{ field: "manufacturer", headerName:"Manufacturer", width: 150 },
		{ field: "type", headerName:"Type", width: 150 },
	];

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

	return (
		<>
		{/* <Stack
			mt={2}
			direction="column"
			spacing={5}
			justifyContent="center"
			alignItems="center"
		> */}
		<Typography variant='h3'>Products</Typography>
		<div style={{ display: "flex", alignContent: "center", justifyContent: "center"}}>
			<div style={{ height: 600, width: "80%" }}>
				<DataGrid 
				style={{ backgroundColor: "white" }}
				rows={products}
				columns={columns}
				slots={{
					toolbar: CustomToolbar,
				}}
				/>
			</div>
    	</div>
		{/* </Stack> */}
		</>
	)
}

export default Products;