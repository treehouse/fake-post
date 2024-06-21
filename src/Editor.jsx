const Editor = ({ username, headline, message, theme, bgColor }) => {
  return (
    <div
      style={{ backgroundColor: bgColor }}
      className={` ${
        theme === "dark" && "dark"
      } h-full  p-5 rounded-lg w-full grid place-items-center duration-200`}
    >
      {/* fake post card */}
      <div className="w-[80%] bg-white dark:bg-zinc-700 rounded-2xl max-w-[700px] p-10 dark:text-white duration-200">
        {/* display image */}
        <div className="flex items-center">
          <div className="size-[70px] bg-zinc-200 rounded-full mr-5"></div>
          <div>
            <p className="font-bold text-xl">{username}</p>
            <p className="opacity-50">{headline}</p>
          </div>
        </div>

        {/* message field */}
        <div className="ml-[90px]">
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default Editor;
