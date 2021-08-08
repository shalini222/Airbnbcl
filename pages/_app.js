import "tailwindcss/tailwind.css";
import "../styles/global.css";
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

const progress = new ProgressBar({
  size: 4,
  color: "#FD5B61",
  className: "z-50",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);

Router.events.on("routeChangeEnd", progress.finish);

Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;

// pk.eyJ1Ijoic2hhbGluaTIyMiIsImEiOiJja3MyeGR0b2cxYmR1Mndwam1ic2xoNnA5In0.cTmvI_kqZAKUymWWwfIOBw
