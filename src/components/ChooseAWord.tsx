import { useContext, useState ,useEffect} from "react";
import { GlobalContext } from "../Context";

const ChooseAWord = () => {
  const { data, selectedWord, setSelectedWord, filteredWords,wordindex,setWordindex, traced,setTraced } = useContext(GlobalContext);
  const { words } = data;
  
  const handleSelect = (word: string) => {
    setSelectedWord(word)
    const index = filteredWords.indexOf(word)
    setWordindex(index);
    setTraced(!traced);
   
  };

document.onkeydown = function(evt:any) {
  evt = evt || window.event;
  var charCode = evt.keyCode || evt.which;
  if (charCode===40 && wordindex < filteredWords.length-1 ) {
    setWordindex(wordindex+1);    
  }
if (charCode===38 && wordindex>0) {
  setWordindex(wordindex-1);
}
}
useEffect(()=>{
  if (filteredWords) {    
    setSelectedWord(filteredWords[wordindex])
  }
},[wordindex])

  return (
    <div className="chooseWord">
      <div className="txtTitle">Choose a word.</div>
      <div className="leftLink">
        {filteredWords &&
          filteredWords.map((word: string, index: number) => {
            return (
              <a
                role="button"
                onClick={() => handleSelect(word)}
                key={index}
                className={selectedWord == word ? "active" : ""}
              >
                {word}
              </a>
            );
          })}
      </div>

    {/* <div className="leftLink">
      <select  multiple>
        {filteredWords &&
          filteredWords.map((word: string, index: number) => {
            return (
              
              <option
                role="button"
                onClick={() => handleSelect(word)}
                key={index}
                className={selectedWord == word ? "active" : ""}
              >
                {word}
              </option>
              
            );
          })}
          </select>
      </div> */}


    </div>
  );
};

export default ChooseAWord;
