//import packages from node modules
import React from "react";
import {getAllRGBColors} from "../utilities/functions/common";

//define viewport to render all colors

const VIEWPORT_WIDTH = 256;
const VIEWPORT_HEIGHT = 128;

function RectangleRow(props){
  const {rowData,rowIndex} = props;
  if(rowData && rowData.length){
    return rowData.map((colData,colIndex)=>{
      return (
          <rect key={colIndex} x={colIndex} y={rowIndex} width={1} height={1} fill={`rgb(${colData.r},${colData.g},${colData.b})`}/>
      )
    })
  }
  return (<></>)
}

const RectangleList= ({array})=>{
  if(array && array.length){
    return array.map((rowData,rowIndex)=>{
      return(<RectangleRow key={rowIndex} rowData={rowData} rowIndex={rowIndex} />)
    })
  }
  return (<></>)
}


export default function ColorImage({width}){
  const height = ( VIEWPORT_HEIGHT / VIEWPORT_WIDTH ) * width;
  const RGB_Array = getAllRGBColors();
  return (
      <svg width={width} height={height} viewBox={`0 0 ${VIEWPORT_WIDTH} ${VIEWPORT_HEIGHT}`} xmlns="http://www.w3.org/2000/svg">
        <RectangleList array={RGB_Array} />
      </svg>
  );
}



