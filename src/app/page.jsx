"use client";

import Image from "next/image";
import styles from "./page.module.css";
import { useState } from "react";
import { dice1 } from "./../images/dice1.png";
import { dice2 } from "@/images/dice-2.png";
import { dice3 } from "@/images/dice-3.png";
import { dice4 } from "@/images/dice-4.png";
import { dice5 } from "@/images/dice-5.png";
import { dice6 } from "@/images/dice-6.png";

export default function Home() {
  const [num, setNum] = useState(0);

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setNum(randomNumberInRange(1, 6));
  };

  return (
    <main className="page">
      <h1>Roll a Dice</h1>
      <Image src={dice1} width="300" height="300"></Image>
      {dice1}
      <button className="btn" onClick={handleClick}>
        Roll the dice
      </button>
    </main>
  );
}
