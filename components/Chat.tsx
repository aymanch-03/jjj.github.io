"use client";
import { useState } from "react";
import { BsChevronLeft } from "react-icons/bs";
import { FaGalacticSenate } from "react-icons/fa";

const Chat = () => {
  const [open, setOpen] = useState(true);
  const handleChat = () => {
    setOpen(!open);
  };
  return (
    <div className="fixed right-0 top-28 z-50">
      <div
        className="rounded-l-md p-2.5 bg-primary cursor-pointer "
        onClick={handleChat}
      >
        <BsChevronLeft
          size={25}
          className={`text-dark font-semibold ${open ? "" : "rotate-180"}`}
        />
      </div>
    </div>
  );
};

export default Chat;
