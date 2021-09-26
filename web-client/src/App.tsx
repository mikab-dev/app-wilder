import React, { useEffect, useState } from "react";
import axios from "axios";
// import AddWilder from "./components/AddWilder";
import { WilderType } from "./components/types/types";
import Loader from "./components/loader/Loader";

import * as styled from "./App.styled";
import "./App.css";
import WildersList from "./components/wilders/WildersList";
import { Route, Switch } from "react-router";
import WilderDetails from "./components/wilders/WilderDetails";
// import SearchBar from "./components/searchbar/SearchBar";

const App = () => {
  const [wilders, setWilders] = useState<WilderType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  // const [searchTerm, setSearchTerm] = useState<string>("");

  const apiUrl = "/wilders";

  const fetchWilders = async () => {
    const response = await axios.get(apiUrl);
    setWilders(response.data.result);
    setLoading(false);
  };

  useEffect(() => {
    fetchWilders();
  }, []);

  const deleteWilder = (_id: string) => {
    setWilders(wilders.filter((wilder) => wilder._id !== _id));
  };

  // const handleUpdateWilderInfo = async (_id: string) => {
  //   await axios.put(`${apiUrl}/${_id}`);
  //   await fetchWilders();
  // };

  return (
    <div>
      <styled.Header>
        <styled.Container>
          <h1>Wilders Book</h1>
        </styled.Container>
      </styled.Header>
      <Switch>
        {/* <Route exact path="/"/> */}
        <Route path="/wilders/:_id" component={WilderDetails} />
        <styled.Container>
          <h2>Wilders</h2>
          <styled.CardRow>
            {loading && <Loader />}
            <WildersList
              list={wilders}
              deleteWilder={deleteWilder}
              onSuccess={fetchWilders}
            />
          </styled.CardRow>
        </styled.Container>
      </Switch>
      {/* <AddWilder onSuccess={fetchWilders} /> */}
      <styled.Footer>
        <styled.Container>
          <p>&copy; 2020 Wild Code School</p>
        </styled.Container>
      </styled.Footer>
    </div>
  );
};

export default App;
