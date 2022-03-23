import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import SearchSubCategories from "../SearchSubCategories";

const setSearched = function () {};

test("to have change setSearch when you enter a text", async () => {
	render(<SearchSubCategories setSearched={setSearched} />);
	expect(screen.getByTestId("SearchSubCategories")).toHaveTextContent("Search");
});
