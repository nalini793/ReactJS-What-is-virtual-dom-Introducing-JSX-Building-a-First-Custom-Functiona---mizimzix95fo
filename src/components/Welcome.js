// write code for Welcome component here
import React, {Component, useState} from "react";

export default function Welcome(props){
    const [data, setData] = useState(
       {name: props.name}
    );
    return(
      <div>
        <div>Hey !<h1>{props.name}</h1>
            </div>
        <h2>Welcome to Newton School.</h2>
        </div>
    )
}
