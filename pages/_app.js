import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress/dist";
import React from "react";
import Router from "next/router";
const progress = new ProgressBar({
  size: 4,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);
function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
export default MyApp;

// pk.eyJ1Ijoic2hhbGluaTIyMiIsImEiOiJja3MyeGR0b2cxYmR1Mndwam1ic2xoNnA5In0.cTmvI_kqZAKUymWWwfIOBw
