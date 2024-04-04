import React, { Component } from "react";
import {
    ColorDiv,
    ColorPanel,
    ColorResulPanel,
    ColorResult,
    ColorSel,
    Palitra,
    PrevColorResult,
    ResetBtn,
    // ColorStyle,
} from "./colorApp.styled";
// import { ColorSel } from "./ColorSel";

export default class ColorApp extends Component {
    state = {
        prevColor: "#fff",
        color: "#fff",
    };

    handleColorSelect = (e) => {
        this.setState((prevState) => ({
            prevColor: prevState.color,
            color: (prevState.color = e.target.getAttribute("bgColor")),
        }));
    };

    render() {
        return (
            <ColorDiv className="ColorApp">
                <Palitra>
                    <ColorSel colorState={this.state.color} bgColor="#5FC700" onClick={this.handleColorSelect}/>
                    <ColorSel colorState={this.state.color} bgColor="#D818B8" onClick={this.handleColorSelect}/>
                    <ColorSel colorState={this.state.color} bgColor="#ff0000" onClick={this.handleColorSelect} />
                </Palitra>
                <ColorPanel className="colorPanel">
                    <ColorResulPanel>
                        <ColorResult bgColor={this.state.color} />
                        <PrevColorResult bgColor={this.state.prevColor} />
                    </ColorResulPanel>
                    <ResetBtn bgColor="#fff" onClick={this.handleColorSelect} />
                </ColorPanel>
            </ColorDiv>
        );
    }
}
