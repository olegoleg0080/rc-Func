import { Component } from "react";
import { ModalBG, ModalWindow } from "./Modal.styled";

class Modal extends Component {
    componentDidMount() {
        window.addEventListener("keydown", this.handleEsc);
    }
    componentWillUnmount() {
        window.addEventListener("keydown", this.handleEsc);
    }
    handleEsc = (e) => {
        if (e.code === "Escape") {
            this.props.onClose();
        }
    };
    handleClickBG = (e) => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };
    render() {
        const { children} = this.props;
        return (
            <ModalBG onClick={this.handleClickBG}>
                <ModalWindow>
                    {children}
                </ModalWindow>
            </ModalBG>
        );
    }
}

export default Modal;
