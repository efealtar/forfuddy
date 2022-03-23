import { Box, Button, Divider, Grid, List } from "@mui/material";
import { Category } from "../interfaces";
import { v4 as uuidv4 } from "uuid";

const SingleCategory = ({
	item,
	searched,
}: {
	item: Category;
	searched: string;
}) => {
	return (
		<>
			{item.subCategories
				.filter((i) => i.name.toLowerCase().includes(searched.toLowerCase()))
				.map((e) => (
					<List
						key={uuidv4()}
						style={{ paddingLeft: "5px", paddingRight: "5px" }}
					>
						<Grid
							display='flex'
							alignItems='center'
							justifyContent='space-between'
							style={{
								marginBottom: "5px",
								marginTop: "5px",
								fontSize: "10px",
							}}
							key={uuidv4()}
						>
							<Box key={uuidv4()}>{e.name}</Box>
							<Button
								key={uuidv4()}
								variant='outlined'
								style={{
									fontSize: "7px",
									textAlign: "center",
								}}
							>
								{item.name}
							</Button>
						</Grid>
						<Divider />
					</List>
				))}
		</>
	);
};

export default SingleCategory;
