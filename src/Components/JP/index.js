import React from "react";
import Banner from "./BannerSection";
import CrossBorder from "./CrossBorder";
import PaymentCalc from "./Payment";
import Logistics from "./Logistics";
import Finance from "./FinanceTools";

export default function index() {
  return (
    <React.Fragment>
      <Banner />
      <CrossBorder />
      <PaymentCalc />
      <Logistics />
      <Finance />
    </React.Fragment>
  );
}
