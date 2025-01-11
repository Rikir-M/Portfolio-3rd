import React, { useEffect, useRef, useState } from "react";
import MessageIcon from "../assets/Message.svg";

const Message = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputVal, setInputVal] = useState("");
  const messageBoxRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputVal.trim()) {
      setMessages((prevMessages) => [...prevMessages, inputVal]);
      setInputVal("");
    }
  };

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (messageBoxRef.current && !messageBoxRef.current.contains(e.target)) {
        setIsExpanded(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.addEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return (
    <div
      ref={messageBoxRef}
      className={`${
        isExpanded ? "h-[85%]" : "h-10"
      } w-1/3 bg-[rgba(0,0,0,0.359)] border border-[rgba(255,255,255,0.359)] absolute bottom-[3%] transition-all duration-300`}
      onClick={isExpanded ? null : handleExpand}
    >
      {isExpanded && messages.length <= 0 && (
        <div className="message-info absolute top-[40%] p-5">
          <p className="text-[rgba(255,255,255,0.5)] text-center font-Rubik tracking-wider">
            Feel free to type your message here! This will be sent to my E-mail.
            Or if you prefer the traditional way, check "CONTACT".
          </p>
        </div>
      )}
      {isExpanded && messages.length > 0 && (
        <div className="absolute bottom-[10%] right-0 mr-4 flex flex-col gap-5 items-end">
          {messages.map((msg, index) => (
            <div className="">
              <div className="profile-icon"></div>
              <div className="bg-white text-black font-medium rounded-2xl w-fit">
                <p key={index} className="px-3 py-1">
                  {msg}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} className="message-form">
        <div
          className={`flex h-10 w-full gap-5 items-center absolute bottom-0 px-4 ${
            isExpanded ? "border-t border-[rgba(255,255,255,0.359)]" : ""
          }`}
        >
          <img className="" src={MessageIcon} alt="Message Icon" />
          <input
            className="w-full bg-transparent outline-none text-white font-Rubik tracking-wider placeholder-white overflow-x-hidden overflow-ellipsis"
            type="text"
            name="message"
            id="message"
            placeholder="Send me a message"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
          />
          {isExpanded && (
            <button
              type="submit"
              className="text-black font-medium font-Rubik py-1 px-5 bg-yellow rounded"
            >
              Send
            </button>
          )}
        </div>
      </form>
    </div>
  );
};

export default Message;
