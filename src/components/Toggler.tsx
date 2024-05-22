import { useContext } from "react";
import { GlobalContext } from "../Context";

const Toggler = ({ heading }: any) => {
  const { setGuidlinesToggle, setTraceToggle, guidlinesToggle, traceToggle,setPlayone } =
    useContext(GlobalContext);

  const handleOff = () => {
    if (heading == "guidelines") setGuidlinesToggle(false);
    else{ setTraceToggle(false);
          setPlayone(false);   }
  };
  const handleOn = () => {
    if (heading == "guidelines") setGuidlinesToggle(true);
    else {setTraceToggle(true);
          setPlayone(true);
    }
  };
  return (
    <div className="switch">
      <div className="txt">{heading}:</div>
      <div
        onClick={handleOn}
        className={
          "onBtn onOffBtn " +
          (heading == "guidelines" && guidlinesToggle ? "active" : "") +
          " " +
          (heading == "trace" && traceToggle ? "active" : "")
        }
      >
        on
      </div>
      <div
        onClick={handleOff}
        className={
          "offBtn onOffBtn " +
          (heading == "guidelines" && !guidlinesToggle ? "active" : "") +
          " " +
          (heading == "trace" && !traceToggle ? "active" : "")
        }
      >
        off
      </div>
    </div>
  );
};

export default Toggler;
