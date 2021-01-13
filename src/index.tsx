import "./public-path";

import * as serviceWorker from "./serviceWorker";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

function render(props: any) {
  const { container } = props;
  // ReactDOM.render(
  //   <App />,
  //   container
  //     ? container.querySelector("#root")
  //     : document.querySelector("#root")
  // );
  document.body.style.position =  "fixed";
  document.body.style.width =  "100%";
  document.body.style.height =  "100%";
  document.body.style.top =  "0";
  document.body.style.left =  "0";
  document.body.style.background =  "#000";
  document.body.style.backgroundSize =  "cover";
  document.body.style.backgroundImage =  "url(https://wallpaperaccess.com/full/38175.jpg)";
  document.body.style.transition =  " background 1s ease-in-out";
  var images = [
    "https://images.pexels.com/photos/853199/pexels-photo-853199.jpeg",
    "https://images.pexels.com/photos/842711/pexels-photo-842711.jpeg",
    "https://images.pexels.com/photos/1252869/pexels-photo-1252869.jpeg",
    "https://images.pexels.com/photos/1402787/pexels-photo-1402787.jpeg",
  ],
  delay = 10000, // 3 seconds
  pointer = 0;

setInterval(function () {
  var image = images[pointer % images.length];
  document.body.style.backgroundImage = "url(" + image + ")";
  pointer += 1;
}, delay);
}

function storeTest(props: any) {
  props.onGlobalStateChange(
    (value: any, prev: any) =>
      console.log(`[onGlobalStateChange - ${props.name}]:`, value, prev),
    true
  );
  props.setGlobalState({
    ignore: props.name,
    user: {
      name: props.name,
    },
  });
}

//@ts-ignore
if (!window.__POWERED_BY_QIANKUN__) {
  render({});
}

export async function bootstrap() {
  console.log("[react16] react app bootstraped");
}

export async function mount(props: any) {
  console.log("[react16] props from main framework", props);
  storeTest(props);
  render(props);
}

export async function unmount(props: any) {
  const { container } = props;
  ReactDOM.unmountComponentAtNode(
    container
      ? container.querySelector("#root")
      : document.querySelector("#root")
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
