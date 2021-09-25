import "react-toastify/dist/ReactToastify.css";
import * as styled from "../../App.styled";
import blank_profile from "../images/blank-profile-picture-female.png";
import AddModal from "../modal/AddModal";

const CreateWilder = ({ onSuccess }: { onSuccess: () => void }) => {
  return (
    <>
      <styled.AddWilderCard>
        <img src={blank_profile} alt="Jane Doe Profile" />
        <div style={{ display: "flex", justifyContent: "center" }}>
          <AddModal onSuccess={onSuccess} />
        </div>
      </styled.AddWilderCard>
    </>
  );
};

export default CreateWilder;
