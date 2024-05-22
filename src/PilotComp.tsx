import "./ui/App.scss";
import "animate.css/animate.css";

import { useEffect, useReducer, useState } from "react";
import { GlobalContext, reducer } from "./Context";
import Router from "./router/Router";
import { BrowserRouter, HashRouter } from "react-router-dom";

function PilotComp() {
  /* eslint-disable react-hooks/exhaustive-deps */
  const [state, dispatch] = useReducer(reducer, {});
  const [pages, setPages] = useState([
    "Home",
    "Before",
    "Lowercase",
    "Uppercase",
    "Num",
    "Words",
    "Own",
  ] as any);
  const [data, setData] = useState([]);
  const [guidlinesToggle, setGuidlinesToggle] = useState(true);
  const [traceToggle, setTraceToggle] = useState(true);
  const [lowerCaseLetters, setLowerCaseLetters] = useState<any>([]);
  const [upperCaseLetters, setUpperCaseLetters] = useState<any>([]);
  const [numbers, setNumbers] = useState<any>([]);
  const [selectedNode, setSelectedNode] = useState(null);
  const [activeLetter, setActiveLetter] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  const [filteredWords, setFilteredWords] = useState<any>([]);
  const [wordindex,setWordindex] = useState<any>("")
  const [newWord, setNewWord] = useState<any>("");
  const [onClickState, SetonClickState] = useState(false);
  const [traced,setTraced]=useState(false)
  const [playonetime, setPlayone] = useState<any>(true);
  // Load JSON
  const fetchData = async () => {
    const response = await fetch(process.env.PUBLIC_URL + "/data/data.json");
    const json = await response.json();
    const data = await json;
    setData(data);
    // console.log(data);
    
    setLowerCaseLetters(Object.keys(data["lowercase"]));
    setUpperCaseLetters(Object.keys(data["uppercase"]));
    setNumbers(Object.keys(data["num"]));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
        guidlinesToggle,
        setGuidlinesToggle,
        traceToggle,
        setTraceToggle,
        lowerCaseLetters,
        upperCaseLetters,
        numbers,
        data,
        selectedNode,
        setSelectedNode,
        activeLetter,
        setActiveLetter,
        selectedWord,
        setSelectedWord,
        filteredWords,
        setFilteredWords,
        wordindex,setWordindex,
        newWord, setNewWord,
        onClickState, SetonClickState,
        traced,setTraced,
        playonetime, setPlayone
      }}
    >
      <HashRouter>
        <Router pages={pages} data={data} />
      </HashRouter>
    </GlobalContext.Provider>
  );
}

export default PilotComp;
