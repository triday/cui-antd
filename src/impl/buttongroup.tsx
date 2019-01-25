import * as React from "react";
import { IButtonGroup, IButtonGroupProps, IButtonGroupStates } from "../core/ButtonGroup";
import { Button } from "antd";

export class ButtonGroup extends React.Component<IButtonGroupProps, IButtonGroupStates> implements IButtonGroup {
    render(): JSX.Element {
        return (
            <Button.Group>
                {this.props.children}
            </Button.Group>
        );
    }
}