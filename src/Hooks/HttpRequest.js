import React, { useState, useEffect } from "react";
import axios from "axios";

export function useAxiosGet(url) {
    const [product, setProduct] = useState({
        loading: false,
        data: null,
        error: false
    });
    useEffect(() => {
        setProduct({
            loading: true,
            data: null,
            error: false
        })
        axios.get(url).then((res) => {
            setProduct({
                loading: false,
                data: res.data,
                error: false
            });
        }).catch((e) => {
            setProduct({
                loading: false,
                data: null,
                error: true
            })
        });
    }, [url]);

    return product;
}