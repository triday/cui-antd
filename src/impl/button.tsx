import  React from "react";
import { Button as AntdButton} from "antd";

import { IButton, IButtonProps, IButtonStates } from "../core/Button";


export class Button extends React.Component<IButtonProps, IButtonStates> implements IButton {
    render(): JSX.Element {
        return <AntdButton type="primary" onClick={this.props.click}>{this.props.text}</AntdButton>;
    }
}