import { useContext, useEffect, useRef, useState, useMemo } from "react";
import React from "react";
import { GlobalContext } from "../Context";
import Toggler from "./Toggler";
import { useLocation } from "react-router-dom";
import { noInstructions, noPractice } from "../utils/utils";
import { url } from "inspector";

const WritingArea = () => {
  const location = useLocation();
  const { pathname } = location;
  const repeatation = 5;
  const {
    data,
    selectedNode,
    activeLetter,
    guidlinesToggle,
    selectedWord,
    setActiveLetter,
    setSelectedWord,
    traceToggle,
    setTraceToggle,
    newWord,
    setNewWord,
    onClickState,
    traced,
    playonetime,
    setPlayone,
  } = useContext(GlobalContext);

  const [playedindex, setplayedindex] = useState<any>(false);
  const [playedvid, setPlayedvid] = useState<any>(false);

  const [st, setSt] = useState(0);

  const clearPage = () => {
    setActiveLetter("");
    setNewWord("");
    setPlayedvid(false);
    setPlayone(true);
  };

  let arr: any = [];
  const renderMultiple = () => {
    console.log(selectedNode);

    if (selectedNode) {
      for (let index = 0; index < repeatation; index++) {
        if (selectedNode["refAnim"] && !["/own", "/words"].includes(pathname))
          arr.push(
            // <video
            <div
              key={index}
              className={`lettar_${activeLetter}`}
              id={activeLetter + (index + 1)}
              style={{
                width: selectedNode["width"],
                height: selectedNode["height"],
                backgroundImage: `url(${
                  process.env.PUBLIC_URL + selectedNode["refSprite"]
                })`,
              }}
              onEnded={() => {
                if (
                  index + 1 !== repeatation &&
                  elements.length &&
                  traceToggle
                ) {
                  elements[index + 1].play();
                }
              }}
              onAnimationEnd={() => {
                if (
                  index + 1 !== repeatation &&
                  elements.length &&
                  traceToggle
                ) {
                  elements[index].classList.add(`end`);
                  elements[index].classList.remove(`start`);
                  elements[index + 1].classList.add(`start`);
                } else if (
                  index + 1 == repeatation &&
                  elements.length &&
                  traceToggle
                ) {
                  resetVideos();
                  playLetterAnimation();
                }
              }}
            />
          );
      }
      return arr;
    } else return <></>;
  };
  let arrays: any = [];
  const memoList = React.useMemo(
    () =>
      newWord.split("").map((curr: any, index: any) => {
        const node =data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][curr];    
          
        if (
          data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][curr][
            "refAnim"
          ] &&
          ["/own", "/words"].includes(pathname)
        ) {
          return (
            // <video height={210} width={curr == curr.toLowerCase() ? (data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][curr]["refWord"] === "space" ? 40 : 82) : 145}
            <div
              className={curr==" "?"space":`${curr}`}
              id={curr==" "?"space":`${curr}` + (index + 1)}
              onAnimationEnd={() => {
                const traceArea = document.querySelector(".traceLetter");
                let elementArr: any = traceArea ? traceArea.children : [];
                if (elementArr) setElements([...elementArr]);
                console.log(elementArr.length > index + 1);

                if (elementArr.length > index + 1) {
                  elementArr[index].classList.add(`end`);
                  elementArr[index].classList.remove(`start`);
                  elementArr[index + 1].classList.add(`start`);
                  setplayedindex(index + 1);
                } else if (elementArr.length == index + 1) {
                  resetVideos();
                  const timeout = setTimeout(() => {
                    playLetterAnimation();
                    clearTimeout(timeout);
                  }, 500);
                  setPlayedvid(true);
                  setSt(index + 1);
                }
              }}
              style={{
                marginRight: node["mright"] ? node["mright"] : "0",
                marginLeft: node["mleft"] ? node["mleft"] : "0",
                width:
                  data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][
                    curr
                  ]["width"],
                height:
                  data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][
                    curr
                  ]["height"],
                backgroundImage: `url(${
                  process.env.PUBLIC_URL +
                  data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][
                    curr
                  ]["refSprite"]
                })`,
              }}
            ></div>
          );
        }
      }),
    [newWord]
  );

  const renderSpecifiedWord = () => {
    console.log(newWord);
    
    if (pathname == "/own" && newWord) {
      return <div className={"traceLetter"}>{memoList}</div>;
    }
    return (
      <div className={"traceLetter"}>
        {selectedWord
          ? selectedWord.split("").map((curr: any, index: any) => {
              const node =
                data[curr == curr.toLowerCase() ? "lowercase" : "uppercase"][
                  curr
                ];
              return (
                <>
                  <div
                    className={curr==" "?"space":`${curr}`}
                    id={curr==" "?"space":`${curr}` + (index + 1)}
                    onAnimationEnd={() => {
                      if (
                        index + 1 !== elements.length &&
                        elements.length &&
                        traceToggle
                      ) {
                        elements[index].classList.add(`end`);
                        elements[index].classList.remove(`start`);
                        elements[index + 1].classList.add(`start`);
                      }
                      if (
                        index + 1 == elements.length &&
                        elements.length &&
                        traceToggle
                      ) {
                        resetVideos();
                        playLetterAnimation();
                      }
                    }}
                    style={{
                      marginRight: node["mright"] ? node["mright"] : "0",
                      marginLeft: node["mleft"] ? node["mleft"] : "0",
                      width:
                        data[
                          curr == curr.toLowerCase() ? "lowercase" : "uppercase"
                        ][curr]["width"],
                      height:
                        data[
                          curr == curr.toLowerCase() ? "lowercase" : "uppercase"
                        ][curr]["height"],
                      backgroundImage: `url(${
                        process.env.PUBLIC_URL +
                        data[
                          curr == curr.toLowerCase() ? "lowercase" : "uppercase"
                        ][curr]["refSprite"]
                      })`,
                    }}
                  ></div>
                </>
              );
            })
          : ""}
      </div>
    );
  };

  useEffect(() => {
    // console.log(activeLetter);
    if (
      activeLetter &&
      !selectedWord &&
      pathname == "/own" &&
      activeLetter.toLowerCase() != "xcross"
    ) {
      if (newWord.length < 15) {
        setNewWord((prev: any) => prev + activeLetter);
      }
    } else if (
      activeLetter &&
      !selectedWord &&
      pathname == "/own" &&
      activeLetter.toLowerCase() == "xcross"
    ) {
      if (newWord.length < 15 && newWord.length > 0) {
        setNewWord((prev: any) => prev.slice(0, -1));
        console.log(newWord);
      }
    }
  }, [activeLetter, onClickState]);

  useEffect(() => {
    const resettime = setTimeout(() => {
      console.log('changed',playonetime);
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      
      if (
        newWord.length &&
        traceToggle &&
        noPractice.includes(pathname) &&
        pathname == "/own"&& playonetime 
      ) {
        console.log(elementArr);
        
        if (elementArr) {
          setElements([...elementArr])
          setPlayone(false);
        };
        [...elementArr]?.forEach((vid: any, i: number) => {
          if ([...elementArr].length && traceToggle) {
            [...elementArr][0]?.classList.add(`start`);
          } else if ([...elementArr].length && !traceToggle) {
          }
        });
      
      } else if (
        activeLetter &&
        traceToggle &&
        noPractice.includes(pathname) &&
        pathname == "/own"
      ) {
        // playLetterAnimation();
      }
    }, 500);
    return () => clearTimeout(resettime);
  }, [newWord, traceToggle]);

  useEffect(() => {
    if (noPractice.includes(pathname) && pathname !== "/word") {
    }
  }, [traceToggle]);

  useEffect(() => {
    return () => {
      clearPage();
      setSelectedWord("");
    };
  }, []);

  const traceAreaRef = useRef(null);
  const [elements, setElements] = useState<any>([]);
  const playLetterAnimation = () => {
    if (!noPractice.includes(pathname)) {
      const traceArea = document.querySelector(".traceArea");
      let elementArr: any = traceArea ? traceArea.children : [];
      if (elementArr) setElements([...elementArr]);
      [...elementArr]?.forEach((vid: any, i: number) => {
        if ([...elementArr].length && traceToggle) {
          [...elementArr][0]?.classList.add(`start`);
        } else if ([...elementArr].length && !traceToggle) {
          // [...elementArr][0]?.pause();
        }
      });
    }
    if (noPractice.includes(pathname) && pathname != "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];

      if (elementArr) setElements([...elementArr]);
      [...elementArr]?.forEach((vid: any, i: number) => {
        if ([...elementArr].length && traceToggle) {
          [...elementArr][0]?.classList.add(`start`);
        } else if ([...elementArr].length && !traceToggle) {
          // [...elementArr][0]?.pause();
        }
      });
    }
    if (noPractice.includes(pathname) && pathname != "/word") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      if (elementArr) setElements([...elementArr]);
      [...elementArr]?.forEach((vid: any, i: number) => {
        if ([...elementArr].length && traceToggle) {
          [...elementArr][0]?.classList.add(`start`);
        } else if ([...elementArr].length && !traceToggle) {
          // [...elementArr][0]?.pause();
        }
      });
    }
  };
  useEffect(() => {
    if (playedvid) {
      playLetterAnimation();
    }
  }, [playedvid]);

  const playWordAnimation = () => {
    if (noPractice.includes(pathname) && pathname != "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      if (elementArr) setElements([...elementArr]);
      [...elementArr]?.forEach((vid: any) => {
        // console.log(vid);
        if (vid) {
          vid.play();
        } else if ([...elementArr].length && !traceToggle) {
          // [...elementArr][0]?.pause();
        }
      });
    }
  };
  const resetVideos = () => {
    if (!noPractice.includes(pathname)) {
      const traceArea = document.querySelector(".traceArea");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        vid.classList.remove(`end`);
        vid.classList.remove(`start`);
      });
    }
    // console.log('test');

    if (noPractice.includes(pathname) && pathname == "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        vid.classList.remove(`end`);
        vid.classList.remove(`start`);
      });
    }
    if (noPractice.includes(pathname) && pathname !== "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        vid.classList.remove(`end`);
        vid.classList.remove(`start`);
      });
    }
  };

  const pauseAllVideos = () => {
    if (!noPractice.includes(pathname)) {
      const traceArea = document.querySelector(".traceArea");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        // vid.pause();
      });
    }
    if (noPractice.includes(pathname) && pathname != "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        // vid.pause();
      });
    }
    if (noPractice.includes(pathname) && pathname == "/own") {
      const traceArea = document.querySelector(".traceLetter");
      let elementArr: any = traceArea ? traceArea.children : [];
      [...elementArr]?.forEach((vid: any) => {
        // vid.pause();
      });
    }
  };

  useEffect(() => {
    const lastVid = document.getElementById("vid5");

    lastVid?.addEventListener("ended", () => {
      console.log("rset");

      resetVideos();
      playLetterAnimation();
    });
  }, [activeLetter]);

  useEffect(() => {
    resetVideos();
    // pauseAllVideos();
    playLetterAnimation();
  }, [selectedWord]);

  useEffect(() => {
    if (!traceToggle) {
      resetVideos();
    } else {
      setPlayone(true);
      resetVideos();
      playLetterAnimation();
    }
  }, [traceToggle]);

  useEffect(() => {
    // resetVideos();
    // pauseAllVideos();
    // playLetterAnimation();
  }, [newWord]);

  useEffect(() => {
    if (activeLetter && traceToggle && !noPractice.includes(pathname)) {
      playLetterAnimation();
    } else if (
      selectedWord &&
      traceToggle &&
      noPractice.includes(pathname) &&
      pathname !== "/own"
    ) {
      playLetterAnimation();
    } else if (
      activeLetter &&
      traceToggle &&
      noPractice.includes(pathname) &&
      pathname == "/own"
    ) {
    } else {
      resetVideos();
      pauseAllVideos();
    }
  }, [activeLetter, traceToggle, selectedWord]);
  useEffect(() => {
    if (
      selectedWord &&
      traceToggle &&
      noPractice.includes(pathname) &&
      pathname !== "/own"
    ) {
      resetVideos();
      playLetterAnimation();
    }
  }, [traced]);

  const headText: any = {
    home: "",
    before: "",
    lowercase: "Watch the letter being written.",
    uppercase: "Watch the letter being written.",
    num: "Watch the number being written.",
    words: "Watch the word being written.",
    own: "Turn trace on to watch the letter being written.",
  };

  return (
    <div className="writtenTable">
      <div className="guidelineHeader">
        <div className="guidelineTxt">
          <div>{headText[pathname.slice(1)]}</div>
          {pathname == "/own" && (
            <div className="clearBtn" onClick={clearPage}></div>
          )}
        </div>
        <div className="onOff">
          <Toggler heading={"guidelines"} />
          <Toggler heading={"trace"} />
        </div>
      </div>
      <div ref={traceAreaRef} className={"traceArea " + guidlinesToggle}>
        {!noPractice.includes(pathname)
          ? renderMultiple()
          : renderSpecifiedWord()}
      </div>
      {selectedNode && !noInstructions.includes(pathname) && (
        <div className="startNote">
          <img
            src={process.env.PUBLIC_URL + "/media/img/arrowBlue.png"}
            alt=""
          />
          {selectedNode.instruction}
        </div>
      )}
    </div>
  );
};

export default WritingArea;
