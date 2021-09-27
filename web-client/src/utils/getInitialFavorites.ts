const getInitialFavorites = () => {
  const getMyLocalFavoritesWilder = localStorage.getItem(
    "addToFavoritesWilder"
  );
  const myFavWilder = getMyLocalFavoritesWilder
    ? JSON.parse(getMyLocalFavoritesWilder)
    : [];
  return myFavWilder;
};

export default getInitialFavorites;
