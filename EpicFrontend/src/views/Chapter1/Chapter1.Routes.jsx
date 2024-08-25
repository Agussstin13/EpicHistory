import { Route } from "react-router-dom";
import Introduction from "./Introduction";

export default function Chapter1(){
  return(
    <>
      <Route path="Introduction" element={<Introduction/>}/>
      <Route path="Start" element={<Introduction/>}/>
    </>
  );
}