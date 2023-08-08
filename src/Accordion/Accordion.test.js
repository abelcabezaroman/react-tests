import { fireEvent, render, screen } from "@testing-library/react";
import Accordion from "./Accordion";

test("render Accordion and click show / hide", () => {
  render(<Accordion/>);

  const btn = screen.getByTestId("accordion--click");
  const text = screen.getByTestId("accordion--text");
 
  expect(text).toHaveTextContent("");
  fireEvent.click(btn);
  expect(text).toHaveTextContent("Me estoy mostrando");
});