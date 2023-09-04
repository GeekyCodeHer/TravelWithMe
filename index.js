import React, { useState, useEffect, Suspense } from "react";
import ReactDOM from "react-dom/client";
import {hot} from "react-hot-loader";
import App from "./src/app";

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

// const HmrApp = hot(module)(AppRoot);
// root.render(<HmrApp />);

root.render(<App/>);