import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Switch } from "react-router";

import { WilderType } from "./components/types/types";
import Loader from "./components/loader/Loader";
import WildersList from "./components/wilders/WildersList";
import WilderDetails from "./components/wilders/WilderDetails";
import SearchBar from "./components/searchbar/SearchBar";

import getInitialFavorites from "./utils/getInitialFavorites";

import * as styled from "./App.styled";
import "./App.css";
import Favorites from "./components/wilders/Favorites";
import { Link } from "react-router-dom";

const App = () => {
  const [wilders, setWilders] = useState<WilderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [favorites, setFavorites] = useState(getInitialFavorites());
  const [orderedListByAsc, setOrderedListByAsc] = useState<boolean>(true);

  const apiUrl = "/wilders";

  const fetchWilders = async () => {
    const response = await axios.get(apiUrl);
    setWilders(response.data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchWilders();
  }, []);

  useEffect(() => {
    localStorage.setItem("addToFavoritesWilder", JSON.stringify(favorites));
  }, [favorites]);

  const deleteWilder = (_id: string) => {
    setWilders(wilders.filter((wilder) => wilder._id !== _id));
  };

  const toggleOrderedList = () => {
    setOrderedListByAsc(!orderedListByAsc);
  };

  const filteredList = wilders.filter((wilder) =>
    wilder.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );
  const sortedListByAlphabeltAsc = wilders.sort((a, b) =>
    a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? 1 : -1
  );

  // const sortedListByAlphabeltDesc = wilders.sort((a, b) =>
  //   a.name.toLocaleLowerCase() > b.name.toLocaleLowerCase() ? -1 : 1
  // );

  const toggleFavoriteWilder = (wilder: WilderType) => {
    if (
      !favorites.some((favWilder: WilderType) => favWilder._id === wilder._id)
    ) {
      setFavorites([...favorites, wilder]);
    } else {
      const newFavorites = favorites.filter(
        (favorite: WilderType) => favorite._id !== wilder._id
      );
      setFavorites(newFavorites);
    }
  };

  console.log(favorites);

  return (
    <div>
      <styled.Header>
        <styled.Container>
          <h1>Wilders Book</h1>
        </styled.Container>
      </styled.Header>
      <Switch>
        <Route path="/wilders/:_id" component={WilderDetails} />
        <Route path="/favorites" component={Favorites} />
        <styled.Container>
          <h2>Wilders</h2>
          <Link to="/favorites">Favorites</Link>
          <SearchBar
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            toggleOrderedList={toggleOrderedList}
            orderedListByAsc={orderedListByAsc}
          />
          <styled.CardRow>
            {loading && <Loader />}
            <WildersList
              list={wilders}
              sortedListByAlphabeltAsc={sortedListByAlphabeltAsc}
              orderedListByAsc={orderedListByAsc}
              filteredList={filteredList}
              deleteWilder={deleteWilder}
              favoritesList={favorites}
              onSuccess={fetchWilders}
              toggleFavorites={toggleFavoriteWilder}
            />
          </styled.CardRow>
        </styled.Container>
      </Switch>
      <styled.Footer>
        <styled.Container>
          <p>&copy; 2020 Wild Code School</p>
        </styled.Container>
      </styled.Footer>
    </div>
  );
};

export default App;
