import React from "react";
import Image from "next/image";
import styles from "../styles/hero.module.css";

export default function Hero({ heading = "heading", message = "sub-heading" }) {
  return (
    <div
      className={`${styles.heroImg_large}   flex flex-col gap-2 items-center justify-center w-full h-screen bg-fixed bg-center bg-cover`}
    >
      {/* overlay */}
      <div className="w-full h-screen bg-gradient-to-r from-green-700 to-orange-700 opacity-30  absolute top-0 bottom-0 left-0 right-0 z-[1] " />

      <div className="flex flex-col text-center z-[1]">
        <h2 className="text-3xl">{heading}</h2>
        <p className="text-xl">{message}</p>
      </div>
    </div>
  );
}
