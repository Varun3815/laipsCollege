
import * as React from "react";
import Marquee from "../magicui/marquee";

export default function MarqueeMain() {
  return (
    <div className="justify-center items-center flex mt-4 border-gray-400 border bg-gray-100 text-white mb-4">
      <div className="bg-og">
        <h2 className="text-sm px-2 py-3 uppercase"> Updates</h2>
      </div>
      <Marquee pauseOnHover className="[--duration:10s] w-full bg-white ">
        <ul className="text-red-600 pr-2">
          <li className="inline after:content-['|'] after:px-2 after:text-black">
            Admission open in BA-LLB
          </li>
          <li className="inline after:content-['|'] after:px-2 after:text-black">
            BBA-LLB
          </li>
          <li className="inline after:content-['|'] after:px-2 after:text-black">
            BCOM-LLB & LLB(HONS)
          </li>
          <li className="inline after:content-['|'] after:px-2 after:text-black">
            Contact for queries
          </li>
        </ul>
      </Marquee>
    </div>
  );
}
