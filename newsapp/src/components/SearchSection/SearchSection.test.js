import { render, screen } from "@testing-library/react";
import SearchSection from "./index.js";

test("Check if Search Section have correct className", () => {
  render(<SearchSection />);
  const SearchSectionTestid = screen.getByTestId("search-section-testing");
  expect(SearchSectionTestid).toBeInTheDocument();

  //testing for className
  expect(SearchSectionTestid).toHaveClass("search-section");
  expect(SearchSectionTestid).toHaveClass("text-centered");
  expect(SearchSectionTestid).toHaveClass("tbmargin-30");
});

test("Check Search Button Text", () => {
  render(<SearchSection />);
  const SearchElement = screen.getByText(/Search/i);

  expect(SearchElement).toBeInTheDocument();
});

test("Check Search Placeholder", () => {
  render(<SearchSection />);
  const PlaceholderElement = screen.getByPlaceholderText(/News Topic Here/i);

  expect(PlaceholderElement).toBeInTheDocument();
});
