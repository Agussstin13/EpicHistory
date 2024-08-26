import { Route } from "react-router-dom";
import Introduction from "./Introduction";
import Combat from "../Combat";

export default function Chapter1(){
  return(
    <>
      <Route path="Introduction" element={<Introduction/>}/>
      <Route path="Combat" element={<Combat/>}/>
    </>
  );
}