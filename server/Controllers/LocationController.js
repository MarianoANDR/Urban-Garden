import asyncHandler from "express-async-handler";

export const locateUser = asyncHandler(async (req, res) => {
  const ip = "209.142.68.29"; // req.ip
  const accessKey = process.env.ACCESS_KEY;
  const geoLocationAPI = `http://api.ipapi.com/${ip}?access_key=${accessKey}`;

  const response = await fetch(geoLocationAPI);
  const location = await response.json();
  const latitude = location.latitude;
  const hemisphere =
    latitude > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
  res.status(200).send(`Your are in the ${hemisphere}`);
});
