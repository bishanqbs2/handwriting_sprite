// QBS Resizer
var scaleVar = { x: 1, y: 1 },
  zoomFactor = 1,
  stageLeft = 0,
  config = { stageWidth: 1600, stageHeight: 1200 };
function scaleStage() {
  var e = document.getElementById("mainwrapper");
  (scaleVar.x = window.innerWidth / config.stageWidth),
    (scaleVar.y = window.innerHeight / config.stageHeight);
  var t = scaleVar.x + ", " + scaleVar.y;
  scaleVar.x < scaleVar.y
    ? ((zoomFactor = scaleVar.x), (t = scaleVar.x + ", " + scaleVar.x))
    : ((zoomFactor = scaleVar.y), (t = scaleVar.y + ", " + scaleVar.y));
  var o = Number(t.split(",")[0]) * config.stageWidth,
    a = (window.innerWidth - o) / 2;
  (stageLeft = a), (window.rootLeftElmPos = stageLeft);
  var s = {};
  for (var i in (s = {
    "-webkit-transform": "scale(" + t + ")",
    "-moz-transform": "scale(" + t + ")",
    "-ms-transform": "scale(" + t + ")",
    "-o-transform": "scale(" + t + ")",
    transform: "scale(" + t + ")",
    "-webkit-transform-origin": "left top",
    "-moz-transform-origin": "left top",
    "-ms-transform-origin": "left top",
    "-o-transform-origin": "left top",
    "transform-origin": "left top",
    position: "absolute",
    top: "0px",
    left: a + "px",
    width: config.stageWidth + "px",
    height: config.stageHeight + "px",
  }))
    s.hasOwnProperty(i) && (e.style[i] = s[i]);
  window.zoomFactor = zoomFactor;

  // Update the :ROOT CSS variable value
  var mwl = document.getElementById("mainwrapper").offsetLeft / zoomFactor;
  var diff = 480 - mwl;
  var mw = mwl > 480 ? 0 : diff > 480 ? 480 : diff;
  var root = document.documentElement;
  root.style.setProperty("--left-gap", mw + "px");
  root.style.setProperty("--right-gap", mw + "px");
  // root.style.setProperty('--eleft-gap',  (diff > 0 ? diff : 0) + "px");
  // root.style.setProperty('--eright-gap', (diff > 0 ? diff : 0) + "px");
}
scaleStage(), window.addEventListener("resize", scaleStage);

// pinch-to-zoom + double tap
var doubleTouchStartTimestamp = 0;
document.addEventListener("touchstart", touchHandler, { passive: false });
function touchHandler(evt) {
  var event = evt.originalEvent || evt;
  var now = +new Date();
  if (doubleTouchStartTimestamp + 500 > now) {
    event.preventDefault();
  }
  doubleTouchStartTimestamp = now;
  if (event.touches.length > 1) {
    event.preventDefault();
  }
}

// touch move - overflow
document.addEventListener(
  "touchmove",
  function (event) {
    event = event.originalEvent || event;
    // if(event.target.offsetParent.classList[0] === "recordsSlide" || event.target.offsetParent.classList[0] === "tips_block") return;
    // if(event.scale !== 1) { event.preventDefault(); event.stopPropagation(); }
    event.preventDefault();
    event.stopPropagation();
  },
  { passive: false }
);

// Disable right-click / contextmenu
document.addEventListener("contextmenu", (event) => event.preventDefault());
