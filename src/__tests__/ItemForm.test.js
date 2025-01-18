import { render, screen, fireEvent } from "@testing-library/react";
import ItemForm from "../components/ItemForm"; // Adjust the path based on your structure

test("adds a new item to the list when the form is submitted", () => {
    const handleItemFormSubmit = jest.fn(); // Mock function to handle form submission
    render(<ItemForm onItemFormSubmit={handleItemFormSubmit} />);

    // Use getByLabelText to find the input field
    const nameInput = screen.getByLabelText(/Name/i);
    fireEvent.change(nameInput, { target: { value: "Ice Cream" } });

    const categorySelect = screen.getByLabelText(/Category/i);
    fireEvent.change(categorySelect, { target: { value: "Dessert" } });

    const submitButton = screen.getByRole("button", { name: /Add to List/i });
    fireEvent.click(submitButton);

    expect(handleItemFormSubmit).toHaveBeenCalledWith({
        id: expect.any(String), // Check that an id is generated
        name: "Ice Cream",
        category: "Dessert",
    });
});