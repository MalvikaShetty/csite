import logo from "./logo.svg";
import { useEffect, useRef } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./App.css";

function App() {
  const webCamRef = useRef(null);
  const canvasRef = useRef(null);

  const runCoco = async () => {
    const net = await cocossd.load();
    setInterval(() => {
      detect(net);
    }, 1500);
  };

  const detect = async (net) => {
    console.log(webCamRef.current);
    if (
      typeof webCamRef.current !== "undefined" &&
      webCamRef.current !== null &&
      webCamRef.current.video.readyState === 4
    ) {
      const video = webCamRef.current.video;
      const videoHeight = webCamRef.current.videoHeight;
      const videoWidth = webCamRef.current.videoWidth;

      webCamRef.current.video.width = videoWidth;
      webCamRef.current.video.height = videoHeight;

      const obj = await net.detect(video);
      console.log(obj);

      const ctx = canvasRef.current.getContext("2d");
    }
  };

  useEffect(() => {
    runCoco();
  }, []);
  return (
    <div className="App">
      <Webcam
        ref={webCamRef}
        muted={true}
        mirrored={true}
        // videoConstraints={{
        //   facingMode: { exact: "environment" || "user" },
        // }}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 9,
          width: 640,
          height: 480,
        }}
      />
      <canvas
        ref={canvasRef}
        style={{
          position: "absolute",
          marginLeft: "auto",
          marginRight: "auto",
          left: 0,
          right: 0,
          textAlign: "center",
          zindex: 8,
          width: 640,
          height: 480,
        }}
      />
    </div>
  );
}

export default App;
