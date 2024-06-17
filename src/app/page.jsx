"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";

export default function Home() {
  const [num, setNum] = useState(1);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
  };

  return (
    <main className="page">
      <h1>Roll a Dice</h1>
      <div className="imgWrap">
        <Image src={"/dice-" + num + ".png"} width="300" height="300" />
      </div>

      <div className="buttonWrap">
        <button className="btn" onClick={handleClick}>
          Roll the dice
        </button>
      </div>
    </main>
  );
}
