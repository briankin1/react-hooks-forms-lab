import { render, screen, fireEvent } from "@testing-library/react";
import Filter from "../components/Filter"; // Adjust the path based on your structure

test("uses a prop of 'search' to display the search term in the input field", () => {
    const noop = () => {}; // Mock function for onSearchChange
    render(<Filter search="testing" onSearchChange={noop} />);

    expect(screen.getByPlaceholderText(/Search/).value).toBe("testing");
});

test("calls the onSearchChange callback prop when the input is changed", () => {
    const handleSearchChange = jest.fn(); // Mock function for onSearchChange
    render(<Filter search="" onSearchChange={handleSearchChange} />);

    fireEvent.change(screen.getByPlaceholderText(/Search/), {
        target: { value: "new search term" },
    });

    expect(handleSearchChange).toHaveBeenCalled(); // Check if the callback was called
});