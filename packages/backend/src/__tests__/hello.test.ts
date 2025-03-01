import * as test from "bun:test";
import { sendGraphql } from "./libs/send-graphql";

test.describe("hello", () => {
  test.test("hello query", async () => {
    const data = await sendGraphql("hello");

    test.expect(data).toEqual({ data: { hello: "Hello, World!" } });
  });
});
