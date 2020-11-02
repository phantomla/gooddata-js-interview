import React from "react";
import ReactDOM from "react-dom";
import GrossProfit from "./index";

it("GrossProfit render", () => {
    const div = document.createElement("div");
    ReactDOM.render(<GrossProfit />, div);
});

