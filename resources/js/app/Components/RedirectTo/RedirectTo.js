import React from "react";
import { useEffect } from "react";

export default function RedirectTo(route, user) {
    return useEffect(() => {
        if (user) {
            console.log("redirect");
            window.location.replace(`http://www.smartrentals.test${route}`);
        }
    }, [user]);
}
