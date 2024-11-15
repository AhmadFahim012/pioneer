import React from "react";
import { FaHeart } from "react-icons/fa";

export default function Favorites() {
  return (
    <div className="flex items-center gap-3 ">
      <FaHeart size={23} className="text-white" />
      <p className="text-white montserat-fonts text-base">Favorites</p>
    </div>
  );
}
