"use client";

import Image from "next/image";
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
      <div className="img-side">
        <Image src={"/dice-" + num + ".png"} width="400" height="400" />
      </div>

      <div className={"text-side"}>
        <h1>Roll a Dice</h1>
        <p>
          Roll a Dice is a user-friendly web app that simulates dice rolls.
          Perfect for games or decision-making, it offers quick, random results
          with a single click.
        </p>
        <button onClick={handleClick}>Roll the dice</button>
      </div>
    </main>
  );
}
