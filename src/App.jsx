import { useState } from "react";
import Editor from "./Editor";
import SidePanel from "./SidePanel";

const bgColors = [
  {
    id: 0,
    color: "#DEEBEF",
  },
  {
    id: 1,
    color: "#EA6081",
  },
  {
    id: 2,
    color: "#7087DA",
  },
  {
    id: 3,
    color: "#B6E487",
  },
];

const App = () => {
  const [username, setUsername] = useState("Soli");
  const [headline, setHeadline] = useState("The Treehouse Mascot");
  const [message, setMessage] = useState(
    "I am a lover of all shades of green. I do not descriminate. And I love Mondays btw."
  );

  const [bgColor, setBgColor] = useState("rgb(228 228 231)");

  const [theme, setTheme] = useState("light");

  return (
    <div className="flex gap-5 h-screen overflow-hidden p-5 text-zinc-600">
      <SidePanel
        setUsername={setUsername}
        setHeadline={setHeadline}
        setMessage={setMessage}
        setTheme={setTheme}
        theme={theme}
        bgColors={bgColors}
        setBgColor={setBgColor}
      />
      <Editor
        theme={theme}
        username={username}
        headline={headline}
        message={message}
        bgColor={bgColor}
      />
    </div>
  );
};
export default App;
