import { describe, expect, it } from "vitest";
import { estimateReadingTime } from "./reading-time";

describe("estimateReadingTime", () => {
  it("returns at least one minute for empty content", () => {
    expect(estimateReadingTime("")).toBe(1);
  });

  it("estimates Japanese text", () => {
    expect(estimateReadingTime("あ".repeat(1000))).toBe(2);
  });

  it("estimates Latin text", () => {
    expect(estimateReadingTime(Array(1000).fill("word").join(" "))).toBe(2);
  });
});
