import { render } from "@testing-library/react";
import { App } from "./app";

describe("App component", () => {
  it("should render a welcome message", () => {
    const { getByTestId } = render(<App />);

    expect(getByTestId("welcome")).toBeTruthy();
  });
});
