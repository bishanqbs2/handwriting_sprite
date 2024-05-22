import { Suspense } from "react";
import Suspence from "./Suspence";

const SuspenceHOC = (Component: any) => (props: any) => {
  return (
    <Suspense fallback={<Suspence />}>
      <Component {...props} />
    </Suspense>
  );
};

export default SuspenceHOC;
