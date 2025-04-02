import React from "react";

const ImageEditor = (onClose, previewURL, settings, setSettings):(
    onClose:()=>void,
    previewURL:string,
    settings:{
        type:"original" | "wide"|"square",
        sensitive:boolean,
        
    },
    setSettings:React.Dispatch<React.SetStateAction<{
        type: "original" | "wide" | "square";
        sensitive: boolean;
    }>>,
) => {
  return <div className="fixed w-screen h-screen left-0 top-0 bg-black bg-opacity-75 z-10 flex items-center justify-center">ImageEditor</div>;
};

export default ImageEditor;
