import { Route } from "react-router";
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
