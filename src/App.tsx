import { useEffect, useState } from "react";
import axios from "axios";
import ListCategories from "./components/ListCategories";
import { API } from "./interfaces";

import { Grid } from "@mui/material";
import Header from "./components/Header/Header";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import SearchSubCategories from "./components/SearchSubCategories/SearchSubCategories";

const App = () => {
	useEffect(() => {
		async function getList() {
			try {
				const response = await axios({
					method: "get",
					headers: { "Content-Type": "application/json" },
					url: "/sapigw-product/product-categories",
				});
				setApi(response.data);
			} catch (error) {
				console.error(error);
			}
		}

		getList();
	}, []);

	const [api, setApi] = useState<API | undefined>();
	const [categoryFilter, setCategoryFilter] = useState("");
	const [searched, setSearched] = useState("");

	return (
		<Grid sx={{ mx: "auto", width: 300 }}>
			{api === undefined ? (
				"Loading"
			) : (
				<>
					<Header />
					<SearchSubCategories setSearched={setSearched} />
					<FilterCategory api={api} setCategoryFilter={setCategoryFilter} />

					<ListCategories
						api={api}
						categoryFilter={categoryFilter}
						searched={searched}
					/>
				</>
			)}
		</Grid>
	);
};

export default App;
