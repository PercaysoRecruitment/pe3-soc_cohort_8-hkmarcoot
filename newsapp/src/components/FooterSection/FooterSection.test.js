import { render, screen } from "@testing-library/react";
import FooterSection from "./index.js";

test("Check footer wording", () => {
  render(<FooterSection />);
  const FooterElement = screen.getByText(/© Copyright © 2022 Your News App/i);

  expect(FooterElement).toBeInTheDocument();
});
