import { useEffect, useState } from "react";
import axios from "axios";
import ListCategories from "./components/ListCategories";
import { API } from "./interfaces";

import { Box, Grid } from "@mui/material";
import Header from "./components/Header/Header";
import FilterCategory from "./components/FilterCategory/FilterCategory";
import SearchSubCategories from "./components/SearchSubCategories/SearchSubCategories";
import Loading from "./components/Loading/Loading";

const App = () => {
	const [api, setApi] = useState<API>();
	const [loading, setLoading] = useState<Boolean>(true);
	const [categoryFilter, setCategoryFilter] = useState("");
	const [searched, setSearched] = useState("");
	useEffect(() => {
		setLoading(true);
		axios
			.get("/sapigw-product/product-categories", {
				headers: { "Content-Type": "application/json" },
			})
			.then((response) => setApi(response.data))
			.catch((error) => console.log(error));
		setLoading(false);
	}, []);

	return (
		<>
			{loading ? (
				<Loading />
			) : (
				<Grid sx={{ mx: "auto", width: 300 }}>
					<Header />
					<SearchSubCategories setSearched={setSearched} />
					<FilterCategory api={api} setCategoryFilter={setCategoryFilter} />

					<ListCategories
						api={api}
						categoryFilter={categoryFilter}
						searched={searched}
					/>
				</Grid>
			)}
		</>
	);
};

export default App;
