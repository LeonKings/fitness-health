export const exerciseOptions = {
  method: "GET",
  params: {
    limit: "100",
    offset: "0",
  },
  headers: {
    "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  console.log(data);
  return data;
};
