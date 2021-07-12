// Search GIPHY API
export const searchGIF = async (searchString, goToPage = 0) => {
  const params = new URLSearchParams({
    q: searchString,
    api_key: process.env.REACT_APP_GIPHY_API_KEY,
    limit: 12,
    offset: goToPage,
  });
  const response = await fetch(`https://api.giphy.com/v1/gifs/search?${params}`);

  return response.ok ? response.json() : { status: "error" };
};

// Trending GIPHY API
export const getTrendingGIF = async () => {
  const params = new URLSearchParams({
    api_key: process.env.REACT_APP_GIPHY_API_KEY,
    limit: 12,
  });
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?${params}`
  );

  return response.ok ? response.json() : { status: "error" };
};
