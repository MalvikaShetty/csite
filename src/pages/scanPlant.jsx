// // import logo from "./logo.svg";
// import React, { Component } from 'react';
// import { useEffect, useRef, useCallback, useState } from "react";
// import * as tf from "@tensorflow/tfjs";
// import * as cocossd from "@tensorflow-models/coco-ssd";
// import Webcam from "react-webcam";
// import { useOpenCv } from "opencv-react";
// // import "./App.css";

// function scanPlant() {
//   const [imgSrc, setImageSrc] = useState();
//   const [type, setType] = useState();
//   const [scanned, setScanned] = useState(false);
//   const webCamRef = useRef(null);
//   const canvasRef = useRef(null);
//   const capture = useCallback(() => {
//     if (
//       typeof webCamRef.current !== "undefined" &&
//       webCamRef.current !== null
//     ) {
//       setImageSrc(webCamRef.current.getScreenshot());
//     }
//   }, [webCamRef]);

//   console.log(capture);
//   const cv = useOpenCv();

//   const runCoco = async () => {
//     const net = await cocossd.load();
//     detect(net);
//   };

//   const detect = async (net) => {
//     try {
//       const model = await tf.loadLayersModel(
//         "/toxic_classifier_tfjs/model.json"
//       );

//       console.log(webCamRef.current);
//       console.log("Summary:", model.summary());
//       const image = new Image(256, 256);
//       image.src = imgSrc ? imgSrc : null;
//       const src = tf.browser.fromPixels(image);
//       const resize = tf.image.resizeBilinear(src, [256, 256]);
//       const expanded = tf.expandDims(resize, 0);
//       const yhat = model.predict(expanded);
//       console.log(yhat);
//       yhat > 0.5 ? console.log("Toxic") : console.log("Non toxic");
//       //yhat > 0.5 ? setType(true) : setType(false);
//       setScanned(true);
//     } catch (e) {
//       console.log(e);
//     }
//     if (
//       typeof webCamRef.current !== "undefined" &&
//       webCamRef.current !== null &&
//       webCamRef.current.video.readyState === 4
//     ) {
//       const video = webCamRef.current.video;
//       const videoHeight = webCamRef.current.videoHeight;
//       const videoWidth = webCamRef.current.videoWidth;

//       webCamRef.current.video.width = videoWidth;
//       webCamRef.current.video.height = videoHeight;

//       canvasRef.current.width = videoWidth;
//       canvasRef.current.height = videoHeight;
//       const ctx = canvasRef.current.getContext("2d");
//     }
//   };

//   useEffect(() => {
//     runCoco();
//   }, []);
//   return (
//     <div className="App">
//       {/* <p>Hello</p>
//       {scanned ? type ? <h3>Toxic</h3> : <h3>NonToxic</h3> : ""} */}
//       <Webcam
//         ref={webCamRef}
//         muted={true}
//         videoConstraints={{
//           facingMode: { exact: "user" },
//         }}
//         screenshotFormat="image/jpeg"
//         style={{
//           position: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zindex: 9,
//           width: 640,
//           height: 480,
//         }}
//       />
//       <canvas
//         ref={canvasRef}
//         style={{
//           position: "absolute",
//           marginLeft: "auto",
//           marginRight: "auto",
//           left: 0,
//           right: 0,
//           textAlign: "center",
//           zindex: 8,
//           width: 640,
//           height: 480,
//         }}
//       />
//       {setInterval(() => {
//         capture();
//       }, 10)}
//     </div>
//   );
// }

// export default scanPlant;