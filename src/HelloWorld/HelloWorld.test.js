import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("render HelloWorld", () => {
  render(<HelloWorld />);
  const text = screen.getByText(/hello/i);
  expect(text).toBeInTheDocument();
});

test("check text name", () => {
  render(<HelloWorld />);
  const text = screen.getByTestId("hello-world--name");
  expect(text).toBeInTheDocument();
  expect(text).toHaveTextContent("Abel");
});
