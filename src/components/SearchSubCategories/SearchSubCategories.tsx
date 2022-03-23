import { Box, Grid, TextField } from "@mui/material";

const SearchSubCategories = ({ setSearched }: { setSearched: any }) => {
	return (
		<Grid
			display='flex'
			alignItems='center'
			justifyContent='center'
			sx={{ mx: "auto", width: 300 }}
		>
			<Box component='form' noValidate autoComplete='off'>
				<TextField
					data-testid='SearchSubCategories'
					onChange={(e) => setSearched(e.target.value)}
					id='outlined-basic'
					label='Search'
					variant='outlined'
				/>
			</Box>
		</Grid>
	);
};

export default SearchSubCategories;
