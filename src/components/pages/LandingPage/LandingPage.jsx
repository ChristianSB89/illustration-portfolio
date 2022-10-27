import React from "react";
import {
  TransportDrawing,
  SectionBg,
  HuntDrawing,
  MotorDrawing,
  PlowerDrawing,
  PoscaBrushImg,
  PoscaFatBlackImg,
} from "./landingPageStyle";
import Transport from "../../../assets/img/traditional-art/transport.png";
import Hunt from "../../../assets/img/traditional-art/hunt.png";
import Motorized from "../../../assets/img/traditional-art/motorized.png";
import Plower from "../../../assets/img/traditional-art/snowplower.png";
import PoscaBrush from "../../../assets/img/poscabrush.png";
import PoscaFatBlack from "../../../assets/img/posca-fat-black.png";

function LandingPage() {
  return (
    <SectionBg>
      <TransportDrawing src={Transport} />
      <HuntDrawing src={Hunt} />
      <MotorDrawing src={Motorized} />
      <PlowerDrawing src={Plower} />
      <PoscaBrushImg src={PoscaBrush} />
      <PoscaFatBlackImg src={PoscaFatBlack} />
    </SectionBg>
  );
}

export default LandingPage;
