import { render, screen } from "@testing-library/react";
import App from "./App";

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

test("Check Your News App Logo", () => {
  render(<App />);
  const linkElement = screen.getByText(/Your News App/i);
  expect(linkElement).toBeInTheDocument();
});
