import React from "react";
import { useCustomContexts } from "../Context/ContextsProvider";

export default function Test() {
    const { user } = useCustomContexts();
    console.log(user);
    return <div>Test</div>;
}
