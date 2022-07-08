import { render, screen } from "@testing-library/react";
import HeroSection from "./index.js";

test("Check A Simple APP Title", () => {
  render(<HeroSection />);
  const TitleElement = screen.getByText(/A Simple APP/i);

  expect(TitleElement).toBeInTheDocument();
});
