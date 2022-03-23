import { Paper } from "@mui/material";
import { API } from "../interfaces";
import SingleCategory from "./SingleCategory";

const ListCategories = ({
	api,
	categoryFilter,
	searched,
}: {
	api: API;
	categoryFilter: String;
	searched: string;
}) => {
	return (
		<>
			<Paper style={{ maxHeight: "70vh", overflow: "auto" }}>
				{categoryFilter
					? api.categories
							.filter((items) => items.name === categoryFilter)
							.map((item) => {
								return (
									<div key={item.id}>
										<SingleCategory item={item} searched={searched} />
									</div>
								);
							})
					: api.categories.map((item) => {
							return (
								<div key={item.id}>
									<SingleCategory item={item} searched={searched} />
								</div>
							);
					  })}
			</Paper>
		</>
	);
};

export default ListCategories;
