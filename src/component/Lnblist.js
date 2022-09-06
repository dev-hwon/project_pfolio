import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import publist from "../db/publist.json";

export default function Lnblist(props) {
    const param = useParams();
    const handleClick = (e) => {
        props.cateName({
            device : , // 부모 값 넣어야함..
            category : e.target.dataset.name
        })
    }

    return (
        <ul className="lnb__depth1"> 
            {publist.lists.map((list, index) => (
                <li key={index} >
                    <Link to="" className="device" >{list.device}</Link>
                    <ul className="lnb__depth2">
                        {list.childcategory.map((list, index) => (
                            <li key={index} ><Link to={`/category/${list}`} onClick={handleClick} data-name={list}>{list}</Link></li>
                        ))}
                    </ul>
                </li>
            ))}
        </ul>
    )
}