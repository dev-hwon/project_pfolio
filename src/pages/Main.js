import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import publist from "../db/publist.json";

export default function Main(props) {
    const param = useParams();
    const publists = publist.lists.filter((list, index) => (
        list
    ))
    console.log(publists);

    return (
        <div id="main">
            <ul className="publist_list">
                {/* {publists.map((list, index) => (
                    <li key={index}>
                        <Link to="/">
                            <div className="board_date">{list.category}</div>
                            <div className="board_subject">{list.title}</div>
                            <div className="board_content">{list.url}</div>
                        </Link>
                    </li>
                ))} */}
            </ul>
        </div>
    )
}