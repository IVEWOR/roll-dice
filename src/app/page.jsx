"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
    document.querySelector(".hideOnClick").style.display = "none";
    document.querySelector(".showOnClick").style.display = "block";
  };

  return (
    <main className="page">
      <h1>Roll a Dice</h1>
      <div className="imgWrap">
        <Image className="hideOnClick" src={"/dice-6.png"} width="300" height="300" />
        <Image className="showOnClick" src={"/dice-" + num + ".png"} width="300" height="300" />
      </div>

      <div className="buttonWrap">
        <button className="btn" onClick={handleClick}>
          Roll the dice
        </button>
      </div>
    </main>
  );
}
