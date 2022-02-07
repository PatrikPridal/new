import React from "react";
import Search from "./Search";

import "./Header.css";

//header with input and search button
export default function Header({ searchCity }) {
    return (
        <header className="Header">
            <h1 className="Header_title"> Vyhledat předpověď </h1>
            <Search searchCity={searchCity} />
        </header>
    );

}