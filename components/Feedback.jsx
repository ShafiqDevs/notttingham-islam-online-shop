import React from "react";
import { MdCancel, MdCheckCircle } from "react-icons/md";
import Link from "next/link";

export default function Feedback({ pass, Header, subHeader, btnText }) {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full ">
      <div className="flex flex-col justify-center items-center text-center bg-black/40 rounded-md md:w-[400px] md:h-[400px] p-8">
        {pass === true ? (
          <h1 className="text-green-600 text-5xl">
            <MdCheckCircle />
          </h1>
        ) : (
          <h1 className="text-red-600 text-5xl">
            <MdCancel/>
          </h1>
        )}
        <h1 className="mt-auto font-bold text-3xl">{Header}</h1>
        <h1 className="mt-5 text-sm">{subHeader}</h1>
        <Link href={`/`}>
          <button className="bg-white rounded-sm font-semibold text-black px-12 py-4 mt-auto hover:bg-orange-600">{btnText}</button>
        </Link>
      </div>
    </div>
  );
}
