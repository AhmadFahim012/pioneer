import React from "react";
import { FaCartShopping } from "react-icons/fa6";

export default function AddToCart() {
  return (
    <div className="flex items-end gap-3 relative">
      <div className="">
        <div className="bg-[#F76659] w-5 h-5 rounded-full flex items-center justify-center ml-auto absolute left-3 bottom-3 border-2 border-white ">
        <p className="text-xs text-white montserat-fonts">1</p>
        </div>
        <FaCartShopping size={22} className="text-gray-300"/>
      </div>
      <p className="text-white montserat-fonts text-base">Cart</p>
    </div>
  );
}
