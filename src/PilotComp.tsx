import "./ui/App.scss";
import "animate.css/animate.css";

import { useEffect, useReducer, useState } from "react";
import { GlobalContext, reducer } from "./Context";
import Router from "./router/Router";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { AsyncPreloader } from "async-preloader";


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
    //  console.log(data);    
    setLowerCaseLetters(Object.keys(data["lowercase"]));
    setUpperCaseLetters(Object.keys(data["uppercase"]));
    setNumbers(Object.keys(data["num"]));
    
  };
const items = [
  {src:"/media/sprite/lowercase/a.png"},
  {src:"/media/sprite/lowercase/b.png"},
  {src:"/media/sprite/lowercase/c.png"},
  {src:"/media/sprite/lowercase/d.png"},
  {src:"/media/sprite/lowercase/e.png"},
  {src:"/media/sprite/lowercase/f.png"},
  {src:"/media/sprite/lowercase/g.png"},
  {src:"/media/sprite/lowercase/h.png"},
  {src:"/media/sprite/lowercase/i.png"},
  {src:"/media/sprite/lowercase/j.png"},
  {src:"/media/sprite/lowercase/k.png"},
  {src:"/media/sprite/lowercase/l.png"},
  {src:"/media/sprite/lowercase/m.png"},
  {src:"/media/sprite/lowercase/n.png"},
  {src:"/media/sprite/lowercase/o.png"},
  {src:"/media/sprite/lowercase/p.png"},
  {src:"/media/sprite/lowercase/q.png"},
  {src:"/media/sprite/lowercase/r.png"},
  {src:"/media/sprite/lowercase/s.png"},
  {src:"/media/sprite/lowercase/t.png"},
  {src:"/media/sprite/lowercase/u.png"},
  {src:"/media/sprite/lowercase/v.png"},
  {src:"/media/sprite/lowercase/w.png"},
  {src:"/media/sprite/lowercase/x.png"},
  {src:"/media/sprite/lowercase/y.png"},
  {src:"/media/sprite/lowercase/z.png"},


  {src:"/media/sprite/uppercase/A.png"},
  {src:"/media/sprite/uppercase/B.png"},
  {src:"/media/sprite/uppercase/C.png"},
  {src:"/media/sprite/uppercase/D.png"},
  {src:"/media/sprite/uppercase/E.png"},
  {src:"/media/sprite/uppercase/F.png"},
  {src:"/media/sprite/uppercase/G.png"},
  {src:"/media/sprite/uppercase/H.png"},
  {src:"/media/sprite/uppercase/I.png"},
  {src:"/media/sprite/uppercase/J.png"},
  {src:"/media/sprite/uppercase/K.png"},
  {src:"/media/sprite/uppercase/L.png"},
  {src:"/media/sprite/uppercase/M.png"},
  {src:"/media/sprite/uppercase/N.png"},
  {src:"/media/sprite/uppercase/O.png"},
  {src:"/media/sprite/uppercase/P.png"},
  {src:"/media/sprite/uppercase/Q.png"},
  {src:"/media/sprite/uppercase/R.png"},
  {src:"/media/sprite/uppercase/S.png"},
  {src:"/media/sprite/uppercase/T.png"},
  {src:"/media/sprite/uppercase/U.png"},
  {src:"/media/sprite/uppercase/V.png"},
  {src:"/media/sprite/uppercase/W.png"},
  {src:"/media/sprite/uppercase/X.png"},
  {src:"/media/sprite/uppercase/Y.png"},
  {src:"/media/sprite/uppercase/Z.png"},

  {src:"/media/sprite/num/1.png"},
  {src:"/media/sprite/num/2.png"},
  {src:"/media/sprite/num/3.png"},
  {src:"/media/sprite/num/4.png"},
  {src:"/media/sprite/num/5.png"},
  {src:"/media/sprite/num/6.png"},
  {src:"/media/sprite/num/7.png"},
  {src:"/media/sprite/num/8.png"},
  {src:"/media/sprite/num/9.png"},
  {src:"/media/sprite/num/10.png"},

]
async function preload() {
  await Promise.all(
    items.map(async (item) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const data = await AsyncPreloader.loadItems(process.env.PUBLIC_URL + item["src"]);
      console.log(data);

      // loadedCount++;
      // console.log(`Progress: ${(100 * loadedCount) / preloadList.length}%`);

      // let prcntg = (100 * loadedCount) / preloadList.length;
      // setProgress(Math.floor(prcntg));

      // if (prcntg === 100) {
      //   setProgress(100);

      //   setTimeout(() => {
      //     setBounceOutDown(false);
      //     // setShowLoading(false);
      //     // setFade(true);
      //   }, 2000);
      // } else {
      //   setTimeout(() => {
      //     setBounceOutDown(false);
      //   }, 12000);
      // }
    })
  );
}

  useEffect(() => {
    fetchData();
    preload();
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
