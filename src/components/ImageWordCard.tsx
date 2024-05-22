import { useContext } from "react";
import { GlobalContext } from "../Context";

const ImageWordCard = () => {
  const { selectedNode } = useContext(GlobalContext);  
  return (
    <div className="letterWithImg">
      {selectedNode && (
        <>
          <img
            src={process.env.PUBLIC_URL + selectedNode["refImage"]}
            alt={selectedNode.refWord}
          />
          <div className="imgTxt">{selectedNode.refWord}</div>
        </>
      )}
    </div>
  );
};

export default ImageWordCard;
