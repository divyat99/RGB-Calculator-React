import React, { useState } from "react";

const ColourBox = () => {
  const [red, setRed] = useState(0);
  const [green, setGreen] = useState(0);
  const [blue, setBlue] = useState(0);
  console.log("red", red);
  console.log("green", green);
  console.log("blue", blue);

  //decrease counter
  const increaseR = () => {
    if (red >= 0 && red < 255) {
      setRed(red + 1);
    }
  };
  const increaseG = () => {
    if (green >= 0 && green < 255) {
      setGreen(green + 1);
    }
  };
  const increaseB = () => {
    if (blue >= 0 && blue < 255) {
      setBlue(blue + 1);
    }
  };

  const decreaseR = () => {
    if (red <= 255 && red > 0) {
      setRed(red - 1);
    }
  };
  const decreaseG = () => {
    if (green <= 255 && green > 0) {
      setGreen(green - 1);
    }
  };
  const decreaseB = () => {
    if (blue <= 255 && blue > 0) {
      setBlue(blue - 1);
    }
  };

  ///////
  const handleRedChange = (e) => {
    const value = parseInt(e.target.value);
    if ( value >= 0 && value <= 255) {
      setRed(value);
    }
  };
  const handleGreenChange = (e) => {
    const value = parseInt(e.target.value);
    if ( value >= 0 && value <= 255) {
      setGreen(value);
    }
  };
  const handleBlueChange = (e) => {
    const value = parseInt(e.target.value);
    if ( value >= 0 && value <= 255) {
      setBlue(value);
    }
  };
 
  return (
    <>
    <div style={{backgroundColor:'#6f42c1', padding: " 12px",margin: "2px", height: "720px",}}>
      <div
        style={{
          backgroundColor: "grey",
          width: "900px",
          height: "600px",
          padding: " 12px",
          margin: "20px",
        }}
      >
        <h1 style={{ padding: "2px" }}>RGB Calculator</h1>

        <div className="row">
          <div
            className="col-sm-6"
            style={{
              backgroundColor: `rgb(${red},${green},${blue})`,
              width: "300px",
              height: "50px",
              border: "15px solid black",
              padding: " 50px",
              margin: "20px",
            }}
          >
            <h3 style={{ color: "whitesmoke" }}>
              RGB:({red},{green},{blue})
            </h3>
          </div>

          <div className="col-sm-5" style={{ padding: " 0px", margin: "5px" }}>
            <button onClick={increaseR} className="button button3">
              Red<b>+</b>
            </button>
           

            <button onClick={increaseG} className="button button1">
              Green<b>+</b>
            </button>
            <button onClick={increaseB} className="button button2">
              Blue<b>+</b>
            </button>
            <button onClick={decreaseR} className="button button3">
              Red<b>-</b>
            </button>
            <button onClick={decreaseG} className="button button1">
              Green<b>-</b>
            </button>
           
            <button onClick={decreaseB} className="button button2">
              Blue<b>-</b>
            </button>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-7">
            {" "}
            R: <input  onChange={handleRedChange} style={{width:'40px',margin:'15px',}} type="number" name='red' value={red} />
            <input  onChange={handleRedChange} style={{width:'380px',margin:'15px',color:'red',}} type="range" name="points" min="0" max="255" />
          </div>
          <div className="col-sm-7">
            {" "}
            G:
            <input onChange={handleGreenChange} style={{width:'40px',margin:'15px',}} type="number" name='green' value={green}/>
            <input onChange={handleGreenChange} style={{width:'380px',margin:'15px',color:'green'}} type="range" name="points" min="0" max="255" />
          </div>
          <div className="col-sm-7">
            {" "}
            B:
            <input  onChange={handleBlueChange} style={{width:'40px', margin:'15px',}} type="number"blue name='' value={blue} />
            
            <input onChange={handleBlueChange} style={{width:'380px',margin:'15px',background:'red'}}  type="range" name="points" min="0" max="255" />
          </div>
        </div>
      </div>
      </div>
    </> 
  );
};

export default ColourBox;
