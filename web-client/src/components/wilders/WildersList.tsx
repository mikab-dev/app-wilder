import CreateWilder from "./CreateWilder";
import WilderItem from "./WilderItem";

import { WilderType } from "../types/types";

type Props = {
  list: WilderType[];
  filteredList: WilderType[];
  sortedListByAlphabeltAsc: WilderType[];
  favoritesList: WilderType[];
  orderedListByAsc: boolean;
  deleteWilder: (_id: string) => void;
  onSuccess: () => void;
  toggleFavorites: (wilder: any) => void;
};

const WildersList = ({
  list,
  filteredList,
  sortedListByAlphabeltAsc,
  favoritesList,
  // orderedListByAsc,
  deleteWilder,
  onSuccess,
  toggleFavorites,
}: Props) => {
  return (
    <>
      {/* {filteredList.length > 0 &&
        filteredList.map((wilder: any) => {
          const isFavorite = favoritesList.some((favorite) => {
            return favorite._id === wilder._id;
          });
          return (
            <WilderItem
              wilder={wilder}
              key={wilder._id}
              _id={wilder._id}
              name={wilder.name}
              city={wilder.city}
              description={wilder.description}
              // skills={wilder.skills}
              deleteWilder={deleteWilder}
              toggleFavorites={toggleFavorites}
              isFavorite={isFavorite}
            />
          );
        })} */}
      {sortedListByAlphabeltAsc.map((wilder: any) => {
        const isFavorite = favoritesList.some((favorite) => {
          return favorite._id === wilder._id;
        });
        return (
          <WilderItem
            wilder={wilder}
            isFavorite={isFavorite}
            key={wilder._id}
            _id={wilder._id}
            name={wilder.name}
            city={wilder.city}
            description={wilder.description}
            // skills={wilder.skills}
            deleteWilder={deleteWilder}
            toggleFavorites={toggleFavorites}
          />
        );
      })}
      <CreateWilder onSuccess={onSuccess} />
      <button>Next</button>
    </>
  );
};
export default WildersList;
