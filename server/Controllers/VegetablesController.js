import { readFile } from "fs/promises";
import asyncHandler from "express-async-handler";

export const getVegsController = asyncHandler(async (req, res) => {
  const veg = JSON.parse(
    await readFile(new URL("../data.json", import.meta.url))
  );
  res.json(veg);
});
