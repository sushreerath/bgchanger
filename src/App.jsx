import React, { useState } from "react";

function App() {
  const [color, setColor] = useState("olive"); // State to track background color

  console.log("App component loaded"); // Logs when the component is loaded

  return (
    <div
      className="w-full h-screen flex items-center justify-center"
      style={{ backgroundColor: color }} // Dynamically set background color
    >
      {/* Fixed color buttons at the bottom */}
      <div className="fixed flex flex-wrap justify-center bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-1 rounded-full shadow-lg">
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "red" }}
            onClick={() => setColor("red")} // Change background color to red
          >
            Red
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "blue" }}
            onClick={() => setColor("blue")} // Change background color to blue
          >
            Blue
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "green" }}
            onClick={() => setColor("green")} // Change background color to green
          >
            Green
          </button>
          <button
            className="outline-none px-4 text-black rounded-full"
            style={{ backgroundColor: "yellow" }}
            onClick={() => setColor("yellow")} // Change background color to yellow
          >
            Yellow
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "purple" }}
            onClick={() => setColor("purple")} // Change background color to purple
          >
            Purple
          </button>
          <button
            className="outline-none px-4 text-black rounded-full"
            style={{ backgroundColor: "orange" }}
            onClick={() => setColor("orange")} // Change background color to orange
          >
            Orange
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "pink" }}
            onClick={() => setColor("pink")} // Change background color to pink
          >
            Pink
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "teal" }}
            onClick={() => setColor("teal")} // Change background color to teal
          >
            Teal
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "brown" }}
            onClick={() => setColor("brown")} // Change background color to brown
          >
            Brown
          </button>
          <button
            className="outline-none px-4 text-white rounded-full"
            style={{ backgroundColor: "gray" }}
            onClick={() => setColor("gray")} // Change background color to gray
          >
            Gray
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
