import React, { useEffect, useState } from "react";
import getInitialFavorites from "../../utils/getInitialFavorites";
import { WilderType } from "../types/types";
import WilderItem from "./WilderItem";
import * as styled from "../../App.styled";

interface Props {}

const Favorites = (props: Props) => {
  const [favorites, setFavorites] = useState(getInitialFavorites());

  useEffect(() => {
    localStorage.setItem("addToFavoritesWilder", JSON.stringify(favorites));
  }, [favorites]);

  //   const removeFromFavorite = (wilder: WilderType) => {
  //     const newFavorite = favorites.filter(
  //       (favorite: any) => wilder._id !== favorite._id
  //     );
  //     setFavorites(newFavorite);
  //   };

  //   const removeAllFavorite = () => {
  //     const newFavorite: never[] = [];
  //     setFavorites(newFavorite);
  //   };

  return (
    <styled.Container>
      <styled.CardRow>
        {favorites &&
          favorites.map((wilder: any) => (
            <WilderItem
              wilder={wilder}
              isFavorite
              key={wilder._id}
              _id={wilder._id}
              name={wilder.name}
              city={wilder.city}
              description={wilder.description}
              deleteWilder={function (_id: string): void {
                throw new Error("Function not implemented.");
              }}
              toggleFavorites={function (_id: string): void {
                throw new Error("Function not implemented.");
              }} // skills={wilder.skills}
            />
          ))}
      </styled.CardRow>
    </styled.Container>
  );
};

export default Favorites;
