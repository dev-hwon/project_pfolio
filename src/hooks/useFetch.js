import { useCallback, useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    const fnFetch = useCallback (() => {
        fetch(url)
        .then(res =>{
            return res.json()
        })
        .then(data=> {
            setData(data);
            console.log(data)
        })

    })

    
    return {data, fnFetch};
}