import React from "react";
import "./Warning.css";

function Warning() {
  return (
    <div className='Warning'>
      <h2>Lokace nenalezena</h2>
      <p>Zadejte prosím město a stát</p>
      <p>např.: Asia, Japan</p>
      <p>např.: Praha, CZ</p>
    </div>
  );
}
export default Warning;