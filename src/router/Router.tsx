import { useEffect, useState } from "react";
import { Route, Routes, Navigate, useLocation } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import {
  backgroudImages,
  noFooter,
  noHeader,
  handlePaths,
} from "../utils/utils";

const Router = ({ pages, data }: any) => {
  const location = useLocation();
  const DynamicComponents = handlePaths(pages);
  const pageName = location.pathname.slice(1);  

  return (
    <div
      className={pageName}
      style={{
        backgroundImage: backgroudImages[pageName],
      }}
    >
      <div className="handwriting">
        {!noHeader.includes(pageName) && <Header />}
        <Routes>
          <Route index element={<Navigate to={"home"} replace={true} />} />
          {DynamicComponents &&
            [...DynamicComponents].length &&
            [...DynamicComponents].map((Comp: any, i: number) => {
              const [path, DynamicComponent] = [...Comp];
              return (
                <Route
                  key={i}
                  path={path}
                  element={<DynamicComponent data={data[path]} />}
                />
              );
            })}
        </Routes>
        {!noFooter.includes(pageName) && <Footer />}
      </div>
    </div>
  );
};

export default Router;
