import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
const SidePanel = ({
  username,
  setUsername,
  headline,
  setHeadline,
  message,
  setMessage,
  theme,
  setTheme,
  bgColors,
  setBgColor,
}) => {
  const [themeDropdownActive, setThemeDropdownActive] = useState(false);

  // username
  const [usernameVal, setUsernameVal] = useState("");

  // headline

  const [headlineVal, setHeadlineVal] = useState("");

  // textra
  const [textareaVal, setTextareaVal] = useState("");

  return (
    <div className="h-full bg-zinc-200 p-5 rounded-lg w-full max-w-[400px]">
      <h1 className="font-bold text-2xl">Fake Post</h1>

      {/* username field */}
      <div className="my-5 w-full">
        <p>Username</p>
        <input
          onChange={(e) => {
            setUsernameVal(e.target.value);
            setUsername(e.target.value);
          }}
          className="w-full p-3 rounded-md mt-2 outline-none"
          type="text"
          placeholder="Prove a username"
          value={username}
        />
      </div>

      {/* headline field */}
      <div className="my-5 w-full">
        <p>Headline</p>
        <input
          onChange={(e) => {
            setHeadlineVal(e.target.value);
            setHeadline(e.target.value);
          }}
          className="w-full p-3 rounded-md mt-2 outline-none"
          type="text"
          placeholder="Provide a headline"
          value={headline}
        />
      </div>

      {/* message field */}
      <p>Message</p>
      <textarea
        onChange={(e) => {
          setTextareaVal(e.target.value);
          setMessage(e.target.value);
        }}
        className="w-full p-3 rounded-md mt-2 outline-none min-h-[125px] resize-none"
        type="text"
        placeholder="Provide a message for your fake post"
        value={message}
      />

      {/* theme selector */}
      <div
        className="my-5 w-full"
        onClick={() => {
          setThemeDropdownActive(!themeDropdownActive);
        }}
      >
        <p>Theme</p>
        <div
          className={`${
            themeDropdownActive && "rounded-br-none rounded-bl-none"
          } w-full p-3 rounded-md mt-2 outline-none bg-white flex justify-between items-center relative`}
        >
          <p className="pl-2">Theme ({theme})</p>
          <FaChevronDown />
          {/* dropdown */}
          <ul
            className={`${
              !themeDropdownActive && "hidden"
            } absolute top-full left-0 w-full bg-white p-3 rounded-br-md rounded-bl-md`}
          >
            <li
              onClick={() => {
                setTheme("light");
              }}
              className="p-2 hover:bg-zinc-100 rounded-md cursor-pointer duration-200"
            >
              light
            </li>
            <li
              onClick={() => {
                setTheme("dark");
              }}
              className="p-2 hover:bg-zinc-100 rounded-md cursor-pointer duration-200"
            >
              dark
            </li>
          </ul>
        </div>
      </div>

      {/* bg color selector*/}
      <div className="my-5 w-full">
        <p>Background Color</p>
        <ul className="flex gap-2 p-3 bg-white rounded-md mt-2">
          {bgColors.map((color, index) => {
            return (
              <li
                onClick={() => {
                  setBgColor(color.color);
                }}
                key={index}
                color={color}
                style={{ backgroundColor: color.color }}
                className="bg-red-500 rounded-[5px] size-[35px] cursor-pointer"
              ></li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default SidePanel;
