import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import AnnuralKhalid from "./pages/AnnuralKhalid";
import { initializeApp } from "firebase/app";

export default function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyC55bR9A-PuWeDUZMmCdpL0lclC1ygW3Wo",
    authDomain: "stardom-web.firebaseapp.com",
    projectId: "stardom-web",
    storageBucket: "stardom-web.appspot.com",
    messagingSenderId: "126069660144",
    appId: "1:126069660144:web:86acb2d5756b361daa6535",
    measurementId: "G-KWSXF65SSK"
  };
  const app = initializeApp(firebaseConfig);



  return (
    <div className="h-screen w-full flex justify-center items-center">
      <Routes>

        <Route path="/annuralkhalid" element={<AnnuralKhalid />} />

      </Routes>
    </div>
  );
}

