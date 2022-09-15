import React, { useCallback } from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const GLOVAL_ROOT = '/project_pfolio/'

export default function Lnblist(props) {
    // const arrDevice = useFetch("http://localhost:8000/device");
    const url = "https://img.enuri.info/images/publist/publist2.json";
    const [data, setData] = useState([]);

    const fnFetch = useCallback (() => {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data=> {
            setData(data);
        })
        
    })
    
    useEffect(() => {
        fnFetch();
        console.log(data)
    },[])

    // const pubDevice = publist[0].device;
    // console.log(pubDevice)

    // const mdevice = publist.map((list) => { 
    //     return list
    // })
    return (
        <ul className="lnb__depth1"> 
            {/* {mdevice.map((device,index) => (
                <li key={index}>
                    <Link 
                        to={`${GLOVAL_ROOT}device/${device.type}`} 
                        className="device" 
                        data-device={device.type}
                        >   
                        {device[index].type}
                    </Link>
                    <ul className="lnb__depth2">
                        {device.category.map((category, index) => (
                            <li key={index}>
                                <Link 
                                    to={`${GLOVAL_ROOT}device/${device.type}/category/${category}`} 
                                    className="childlist" 
                                    >   
                                    {category}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
            ))} */}
        </ul>
    )
}