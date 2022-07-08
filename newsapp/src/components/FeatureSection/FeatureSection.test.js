import { render, screen } from "@testing-library/react";
import FeatureSection from "./index.js";

test("Check if all blocks in Feature Section have correct className", () => {
  render(<FeatureSection />);
  const FeatureSectionBk01Testid = screen.getByTestId(
    "feature-section-bk01-testing"
  );
  const FeatureSectionBk02Testid = screen.getByTestId(
    "feature-section-bk02-testing"
  );
  const FeatureSectionBk03Testid = screen.getByTestId(
    "feature-section-bk03-testing"
  );
  const FeatureSectionBk04Testid = screen.getByTestId(
    "feature-section-bk04-testing"
  );
  const FeatureSectionBk05Testid = screen.getByTestId(
    "feature-section-bk05-testing"
  );
  const FeatureSectionBk06Testid = screen.getByTestId(
    "feature-section-bk06-testing"
  );
  expect(FeatureSectionBk01Testid).toBeInTheDocument();
  expect(FeatureSectionBk02Testid).toBeInTheDocument();
  expect(FeatureSectionBk03Testid).toBeInTheDocument();
  expect(FeatureSectionBk04Testid).toBeInTheDocument();
  expect(FeatureSectionBk05Testid).toBeInTheDocument();
  expect(FeatureSectionBk06Testid).toBeInTheDocument();

  //testing for className
  expect(FeatureSectionBk01Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk01Testid).toHaveClass("feature-boxsdw-blue");

  expect(FeatureSectionBk02Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk02Testid).toHaveClass("feature-boxsdw-blue");

  expect(FeatureSectionBk03Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk03Testid).toHaveClass("feature-boxsdw-orange");

  expect(FeatureSectionBk04Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk04Testid).toHaveClass("feature-boxsdw-orange");

  expect(FeatureSectionBk05Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk05Testid).toHaveClass("feature-boxsdw-green");

  expect(FeatureSectionBk06Testid).toHaveClass("feature-block");
  expect(FeatureSectionBk06Testid).toHaveClass("feature-boxsdw-green");
});
