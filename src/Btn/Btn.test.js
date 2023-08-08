import { render, screen } from "@testing-library/react";
import Btn from "./Btn";

test("render Btn", () => {
  render(<Btn text="Enviar" />);
  const text = screen.getByText(/enviar/i)
  expect(text).toBeInTheDocument();
});