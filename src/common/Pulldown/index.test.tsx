import React from "react";
import ReactDOM from "react-dom";
import Pulldown from "./index";

it("Pulldown render with name", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pulldown name={['2015','2016']} onChange={() => {}} />, div);
});


it("Pulldown render with name and label", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pulldown name={['2015','2016']} label={['2015','2016']}  onChange={() => {}} />, div);
});


it("Pulldown render with name and label and defautValue", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Pulldown name={['2015','2016']} label={['2015','2016']} defautValue="1" onChange={() => {}} />, div);
});
