import * as React from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { API } from "../../interfaces";

type FilterTypes = {
	api: API;
	setCategoryFilter: any;
};

export default function FilterCategory({
	api,
	setCategoryFilter,
}: FilterTypes) {
	const options = api.categories.map((item) => item.name);
	const [value, setValue] = React.useState<string | null>(null);

	return (
		<div>
			<Autocomplete
				value={value}
				isOptionEqualToValue={(option, value) => option !== value}
				onChange={(event: any, newValue: string | null) => {
					setValue(newValue);
					setCategoryFilter(newValue);
				}}
				options={options}
				sx={{ width: 300 }}
				renderInput={(params) => (
					<TextField
						data-testid='FilterCategory'
						{...params}
						label='Filter By Category'
					/>
				)}
				style={{ marginTop: "20px" }}
			/>
		</div>
	);
}
