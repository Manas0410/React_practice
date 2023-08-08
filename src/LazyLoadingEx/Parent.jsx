import React, { Suspense } from "react";
const Prods = React.lazy(() => import("./Prods")); //1

const Parent = () => {
  return (
    <div>
      <p>this is Parent</p>
      <Suspense fallback={<div>LOADING..... </div>}>
        <Prods />
      </Suspense>
    </div>
  );
};

export default Parent;

//1-Impot by react.lazy it takes callback inside in import ("give path")
//2-wrap the child comp with suspense
//3- in suspense with  fallback we can give whhat we want to show while loading
//prefetch preload pfreconnect async deffer
