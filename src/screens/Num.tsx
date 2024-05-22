import { useContext,useEffect } from "react";
import Layout from "../components/Layout";
import { GlobalContext } from "../Context";
import LetterBox from "../components/LetterBox";
import WritingArea from "../components/WritingArea";
import ImageWordCard from "../components/ImageWordCard";

const Num = () => {
  const { numbers ,setTraceToggle} = useContext(GlobalContext);
  useEffect(()=>{
    setTraceToggle(true);
  },[])
  return (
    <Layout>
      <div className="screen_4">
        <LetterBox letters={numbers} />
        <div className="writtenParent">
          <WritingArea />
          <ImageWordCard />
        </div>
      </div>
    </Layout>
  );
};

export default Num;
