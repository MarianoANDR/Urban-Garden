import asyncHandler from "express-async-handler";
//API ENDPOINTS HAVE LIMITED QUANTITY OF REQUESTS **
export const dateLocateUser = asyncHandler(async (req, res) => {
  const ip = req.ip; // (req.ip)
  const accessKey = process.env.ACCESS_KEY;
  const geoLocationAPI = `http://api.ipapi.com/api/${ip}?access_key=${accessKey}`;

  const response = await fetch(geoLocationAPI);
  const location = await response.json();
  console.log(location);
  const latitude = location.latitude;
  const hemisphere =
    latitude > 0 ? "Northern Hemisphere" : "Southern Hemisphere";
  res.status(200).send(`You are in the ${hemisphere}`);
});

//Northern Ip 209.142.68.29
//Southern Ip 131.255.7.26
