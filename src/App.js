import Tippy from "@tippyjs/react";
import "./App.css";
import React, { forwardRef } from "react";
import "tippy.js/dist/tippy.css";

const ColoredTooltip = () => {
  return <span style={{ color: "yellow" }}>Colored component</span>;
};
const CustomChild = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <div>First Line</div>
      <div>Second Line</div>
    </div>
  );
});
function App() {
  return (
    <div className="App">
      <div style={{ paddingBottom: "20px" }}>
        <Tippy
          placement="right"
          arrow={false}
          delay={1000}
          content="Basic Tooltip"
        >
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<span style={{ color: "orange" }}>Colored</span>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <button>Hover</button>
        </Tippy>
      </div>

      <div style={{ paddingBottom: "20px" }}>
        <Tippy content={<ColoredTooltip></ColoredTooltip>}>
          <CustomChild></CustomChild>
        </Tippy>
      </div>
    </div>
  );
}

export default App;
