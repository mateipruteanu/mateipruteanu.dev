import React from "react";
import ReactLoading from "react-loading";

export default function Loading() {
    return (
        <div className={"loading-container"}>
            <ReactLoading type="cylon" color="#147161"
                          height={200} width={200} className={"loading-animation"}/>
        </div>
    );
}