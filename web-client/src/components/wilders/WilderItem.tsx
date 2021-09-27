import { Link } from "react-router-dom";

import DeleteModal from "../modal/DeleteModal";

import { WilderType } from "../types/types";
import * as styled from "../../App.styled";

import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as fasFaHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as falFaHeart } from "@fortawesome/free-regular-svg-icons";

import blank_profile from "../images/blank-profile-picture-female.png";

type WilderProps = Pick<WilderType, "name" | "city" | "description" | "_id"> & {
  deleteWilder: (_id: string) => void;
  toggleFavorites: (_id: string) => void;
  isFavorite: boolean;
  wilder: string
};
const WilderItem = ({
  name,
  city,
  description,
  _id,
  isFavorite,
  wilder,
  deleteWilder,
  toggleFavorites,
}: WilderProps) => {
  return (
    <>
      <styled.Card>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {isFavorite ? (
            <FontAwesomeIcon
              style={{ color: "#f76c6c", fontSize: "20px", cursor: "pointer" }}
              icon={fasFaHeart}
              onClick={() => toggleFavorites(wilder)}
            />
          ) : (
            <FontAwesomeIcon
              icon={falFaHeart}
              style={{ fontSize: "20px", cursor: "pointer" }}
              onClick={() => toggleFavorites(wilder)}
            />
          )}
          <DeleteModal name={name} _id={_id} deleteWilder={deleteWilder} />
        </div>
        <img src={blank_profile} alt="Jane Doe Profile" />
        <h3>{name}</h3>
        <h4>{city}</h4>
        <p style={{ wordWrap: "break-word" }}>
          {description.substring(0, 250)}...
        </p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Link to={`/wilders/${_id}`}>
            <styled.Button theme={{ bg: "#f76c6c", color: "#ececec" }}>
              More
            </styled.Button>
          </Link>
        </div>
      </styled.Card>
    </>
  );
};

export default WilderItem;
