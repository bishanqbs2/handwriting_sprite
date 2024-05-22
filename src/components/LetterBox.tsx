import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { GlobalContext } from "../Context";

const LetterBox = ({ letters }: any) => {
  const location = useLocation();
  const {
    data,
    setSelectedNode,
    activeLetter,
    setActiveLetter,
    setFilteredWords,
    setSelectedWord,
    upperCaseLetters,
    lowerCaseLetters,
    onClickState, SetonClickState
  } = useContext(GlobalContext);
  const [selectedCasing, setSelectedCasing] = useState<any>(null);
  const [active, setActive] = useState("L");
  const lettersToShow = selectedCasing ? selectedCasing : letters;
  const pathname = location.pathname.slice(1);

  const filterWords = () => {
    console.log(data && data.words);
    
    if (data && data.words) {
      let filtered = data.words.filter(        
        (ele: any) => {          
          if (activeLetter.toLowerCase()=="x") {
            return ele.toLowerCase().toString().split("").includes("x")            
          }else{
            return ele[0].toLowerCase() == activeLetter.toLowerCase()
          }         
        }
      );      
      setFilteredWords(filtered);
    }
  };

  useEffect(() => {
    if (activeLetter) filterWords();
    else setFilteredWords(data?.words);
  }, [activeLetter]);

  const handleSelect = (letter: any) => {
    setSelectedNode(data[pathname][letter]);
    setActiveLetter(letter);
    setSelectedWord("");
    SetonClickState(!onClickState)
  };

  useEffect(() => {
    return () => {
      setActiveLetter("");
      setSelectedNode(null);
    };
  }, []);

  const lowerCasedKeyboard = () => {
    setSelectedCasing(lowerCaseLetters);
    setActive("L");
  };
  const upperCasedKeyboard = () => {
    setSelectedCasing(upperCaseLetters);
    setActive("U");
  };

  return (
    <div className="letterTable">
      <div className="letterTxt">
        <div className="txt">
          Choose a {lettersToShow.length > 10 ? "letter" : "number"}.
        </div>
        {pathname == "own" && (
          <div className="casing">
            <div
              className={"caseL " + (active === "L")}
              onClick={lowerCasedKeyboard}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/media/img/" +
                  (active === "L" ? "caseIcon2.png" : "caseIcon1.png")
                }
                alt=""
              />
              lower case
            </div>
            <div
              className={"caseU " + (active === "U")}
              onClick={upperCasedKeyboard}
            >
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/media/img/" +
                  (active === "U" ? "caseIcon2.png" : "caseIcon1.png")
                }
                alt=""
              />
              upper case
            </div>
          </div>
        )}
      </div>
      <div className="letterBox">
        {lettersToShow?.map((letter: string, i: number) => {
          // console.log(letter);          
          return (
            <div
              key={i}
              onClick={() => handleSelect(letter)}
              className={"letter " + (activeLetter === letter ? "active" : "")}
            >
              {letter}
            </div>
          );
        })}
        {pathname === "own" && (
          <div onClick={() => setActiveLetter(" ")} className="letter">
            Space
          </div>
        )}
      </div>
    </div>
  );
};

export default LetterBox;
