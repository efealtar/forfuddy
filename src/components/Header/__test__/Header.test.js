import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Header from "../Header";

test("to have header input with exact text", async () => {
	render(<Header />);
	expect(screen.getByTestId("Header")).toHaveTextContent("Fuddy");
});
