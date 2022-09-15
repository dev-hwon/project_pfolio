import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios'
const PUBLIST_ROOT = 'http://dev.enuri.com'

export default function Main(props) {
    const params = useParams();
    const [publist, setPublist] = useState([]);

	// useEffect(() => {
	// 	axios.get('https://img.enuri.info/images/publist/publist.json')
	// 	.then((list) => {
	// 		setPublist(list.data.lists);
	// 		// console.log("성공");
	// 	})
	// 	.catch(function(error) {
	// 		console.log("실패");
	// 	})
	// }, [])

    // const plist = publist.filter((list) => (
    //     list.device === params.idevice
    // ))[0];

    // console.log(plist.listbycategory);
    return (
        <div id="main">
            <div className="form_search_list">
            </div>
            <div className="main_header">
            </div>
            <ul className="plist_info">
                {/* {plist.listbycategory.map((list, index) => (
                    <li key={index} className="flex_box algin_center">
                        <div className="plist_no">{index+1}</div>
                        <div className="plist_title">{list.title}</div>
                        <div className="plist_url"><a href={PUBLIST_ROOT + list.url} target="_blank" className="common_btn btn_sm btn_blue">바로가기</a></div>
                        <div className="plist_modify"><a href={PUBLIST_ROOT + list.url} target="_blank" className="common_btn btn_sm btn_blue">바로가기</a></div>
                        <div className="plist_delete"><a href={PUBLIST_ROOT + list.url} target="_blank" className="common_btn btn_sm btn_blue">바로가기</a></div>
                    </li>
                ))} */}
            </ul>
        </div>
    )
}