import * as React from "react";
import { ILightTip } from "../core/lighttip"
import { notification } from "antd";
const DURATION_SECONDS=2;
class LightTip implements ILightTip {
    Error(content: string): void {
        notification.error({message:content,duration:DURATION_SECONDS});
    } 
    Success(content: string): void {
        notification.success({message:content,duration:DURATION_SECONDS});
    }


}
export default new LightTip();