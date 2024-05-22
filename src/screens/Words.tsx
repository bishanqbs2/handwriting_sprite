import { NavLink } from "react-router-dom";
import Layout from "../components/Layout";
import { useContext ,useEffect} from "react";
import { GlobalContext } from "../Context";
import LetterBox from "../components/LetterBox";
import ChooseAWord from "../components/ChooseAWord";
import WritingArea from "../components/WritingArea";

const Words = () => {
  const { lowerCaseLetters,setTraceToggle,setNewWord } = useContext(GlobalContext);
  useEffect(()=>{
    setTraceToggle(true);
    setNewWord("");
  },[])
  return (
    <Layout>
      <div className="screen_5">
        <LetterBox letters={lowerCaseLetters} />
        <div className="writtenParent">
          <ChooseAWord />
          <WritingArea />
        </div>
      </div>
    </Layout>
  );
};

export default Words;
