import { fireEvent, render, screen } from "@testing-library/react";
import App from "./index.js";
import ResultSection from "../ResultSection";

//------------------Note---------------------//
//Be careful not to run this test too many times since
//there is a query limit of 100 request per day in gnew.io.
//-------------------------------------------//
test("Check Showing Number Index in Result", async () => {
  render(<App />, <ResultSection />);

  fireEvent.click(screen.getByText("Tiger Woods"));

  await screen.findByTestId("result-section-testing");
  expect(screen.getByText("01")).toBeInTheDocument();
  expect(screen.getByText("02")).toBeInTheDocument();
  expect(screen.getByText("03")).toBeInTheDocument();
  expect(screen.getByText("04")).toBeInTheDocument();
  expect(screen.getByText("05")).toBeInTheDocument();
  expect(screen.getByText("06")).toBeInTheDocument();
  expect(screen.getByText("07")).toBeInTheDocument();
  expect(screen.getByText("08")).toBeInTheDocument();
  expect(screen.getByText("09")).toBeInTheDocument();
  expect(screen.getByText("10")).toBeInTheDocument();
});
