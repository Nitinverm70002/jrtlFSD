import { render, screen, fireEvent } from "@testing-library/react";
import Form from "../components/Form";

test("shows validation message when input empty", () => {

  render(<Form />);

  fireEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Name is required")).toBeInTheDocument();
});

test("submits form successfully", () => {

  render(<Form />);

  fireEvent.change(screen.getByPlaceholderText("Enter Name"), {
    target: { value: "Nitin" }
  });

  fireEvent.click(screen.getByText("Submit"));

  expect(screen.getByText("Form submitted successfully")).toBeInTheDocument();
});