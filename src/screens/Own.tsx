import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import { GlobalContext } from "../Context";
import LetterBox from "../components/LetterBox";
import WritingArea from "../components/WritingArea";

const Own = () => {
  const { lowerCaseLetters,setTraceToggle,setSelectedWord,setActiveLetter,setNewWord} = useContext(GlobalContext);
  useEffect(()=>{
    setTraceToggle(true);
    setSelectedWord("");
    setActiveLetter("");
    setNewWord("");
  },[])
  return (
    <Layout>
      <div className="screen_6">
        <LetterBox letters={lowerCaseLetters} />
        <div className="writtenParent">
          <WritingArea />
        </div>
      </div>
    </Layout>
  );
};

export default Own;
