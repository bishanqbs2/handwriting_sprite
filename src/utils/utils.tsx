import { lazy } from "react";
import SuspenceHOC from "../components/SuspenceHOC";

import Home from "../screens/Home";
import Before from "../screens/Before";
import Lowercase from "../screens/Lowercase";
import Uppercase from "../screens/Uppercase";
import Num from "../screens/Num";
import Words from "../screens/Words";
import Own from "../screens/Own";

const nonLazy: any = {
  Home: Home,
  Before: Before,
  Lowercase: Lowercase,
  Uppercase: Uppercase,
  Num: Num,
  Words: Words,
  Own: Own,
};

// export const noHeader = ["Home"];
export const noHeader = [""];
export const noFooter = [""];
export const noInstructions = ["/num", "/uppercase", "/words", "/own"];
export const noPractice = ["/words", "/own"];
export const backgroudImages: any = {
  home: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  before: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  lowercase: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  uppercase: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  num: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  words: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
  own: `url('${process.env.PUBLIC_URL}/media/img/intro_bg.png')`,
};

const OBJECT = {};

export const persistData = (counter: number, uIndex: any, cIndex: any) => {
  Object.assign(OBJECT, { [counter]: `${uIndex}|${cIndex}` });
};
export const getPersistData = () => {
  return OBJECT;
};
export const removeDuplicates = (arr: any) => {
  let outputArray = Array.from(new Set(arr));
  return outputArray;
};
export const handlePaths = (paths: any) => {
  let RouteMap: any = new Map();
  paths.forEach((ele: any) => {
    // for Lazy loading
    // let Comp = SuspenceHOC(lazy(() => import(`../screens/${ele}`)));
    // for direct calling
    let Comp = nonLazy[ele];
    RouteMap.set(ele.toLowerCase(), Comp);
  });
  return RouteMap;
};

export const getSelectedNodeData = (alphaNum: any) => {};
