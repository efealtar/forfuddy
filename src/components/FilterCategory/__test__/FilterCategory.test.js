import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import FilterCategory from "../FilterCategory";

const api = {
	categories: [
		{
			id: 368,
			name: "Aksesuar",
			parentId: null,
			subCategories: [],
		},
	],
};

const setCategoryFilter = function () {};

test("to have filter category input with exact text", async () => {
	render(<FilterCategory api={api} setCategoryFilter={setCategoryFilter} />);
	expect(screen.getByTestId("FilterCategory")).toHaveTextContent(
		"Filter By Category"
	);
});
