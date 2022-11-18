import React from "react";
import "./Card.css";
export default function Card(props) {
    const classes = "card ";
    return <div className={classes}>{props.children}</div>;
}
