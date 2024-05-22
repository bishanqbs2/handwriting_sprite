import { useContext ,useEffect} from "react";
import Layout from "../components/Layout";
import LetterBox from "../components/LetterBox";
import { GlobalContext } from "../Context";
import WritingArea from "../components/WritingArea";
import ImageWordCard from "../components/ImageWordCard";

const Uppercase = () => {
  const { upperCaseLetters ,setTraceToggle} = useContext(GlobalContext);
  useEffect(()=>{
    setTraceToggle(true);
  },[])
  return (
    <Layout>
      <div className="screen_3">
        <LetterBox letters={upperCaseLetters} />
        <div className="writtenParent">
          <WritingArea />
          <ImageWordCard />
        </div>
      </div>
    </Layout>
  );
};

export default Uppercase;
