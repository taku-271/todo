import { render } from "@testing-library/react";
import * as test from "bun:test";
import App from "../app/page";

test.test("Render", () => {
  const screen = render(<App />);

  test.expect(screen.getByText("Hello World!"));
});
