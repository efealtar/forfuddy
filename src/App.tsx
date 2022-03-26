import { useEffect, useState } from "react";
import axios from "axios";
import ListCategories from "./components/ListCategories";
import { API } from "./interfaces";

import { Grid } from "@mui/material";
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
		axios
			.get("/sapigw-product/product-categories", {
				headers: {
					"Content-Type": "application/json",
					"Access-Control-Allow-Origin": "*",
				},
			})
			.then((response) => setApi(response.data))
			.then(() => setLoading(false))
			.catch((error) => console.log(error));
	}, []);

	return (
		<>
			{loading === true ? (
				<Loading />
			) : (
				<Grid sx={{ mx: "auto", width: 300 }}>
					<Header />
					<SearchSubCategories setSearched={setSearched} />

					<FilterCategory
						//@ts-ignore
						api={api}
						setCategoryFilter={setCategoryFilter}
					/>
					<ListCategories
						//@ts-ignore
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
