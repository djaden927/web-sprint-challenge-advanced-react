import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent  from "@testing-library/user-event"
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/Checkout Form/i)
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />);

    // const firstNameInput = screen.findByLabelText(/FirstName:/i);
    // userEvent.type(firstNameInput, "jaden");
    // const lastNameInput = screen.getByLabelText(/last name/i);
    // userEvent.type(lasttNameInput, "walker");
    const addressInput = screen.queryByLabelText(/address/i);
    userEvent.type(addressInput, "992");
    const cityInput = screen.getByLabelText(/city/i);
    userEvent.type(cityInput, "springville");
    const stateInput = screen.getByLabelText(/state/i);
    userEvent.type(stateInput, "utah");
    const zipInput = screen.getByLabelText(/zip/i);
    userEvent.type(zipInput, "84663");

    const button = screen.getByRole("button");
    userEvent.click(button);

    await waitFor(() => {
        const success = screen.queryByTestId("successMessage")
        expect(success).toBeInTheDocument();
    });
});
