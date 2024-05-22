import React, { useContext ,useEffect} from "react";
import Layout from "../components/Layout";
import LetterBox from "../components/LetterBox";
import { GlobalContext } from "../Context";
import WritingArea from "../components/WritingArea";
import ImageWordCard from "../components/ImageWordCard";

const Lowercase = () => {
  const { lowerCaseLetters , setTraceToggle} = useContext(GlobalContext);
  useEffect(()=>{
    setTraceToggle(true);
  },[])
  return (
    <Layout>
      <div className="screen_2">
        <LetterBox letters={lowerCaseLetters} />
        <div className="writtenParent">
          <WritingArea />
          <ImageWordCard />
        </div>
      </div>
    </Layout>
  );
};

export default Lowercase;
