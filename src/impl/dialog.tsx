import * as React from "react";
import { IDialog } from "../core/Dialog"
import { Modal } from "antd";
class Dialog implements IDialog {
    showInfo(content: string, title?: string): void {
        Modal.confirm({ title: title, content: content, okCancel: false });
    }
    showWarn(content: string, title?: string): void {
        Modal.warn({ title: title, content: content, okCancel: false });
    }
    showError(content: string, title?: string): void {
        Modal.error({ title: title, content: content, okCancel: false });
    }
    showSuccess(content: string, title?: string): void {
        Modal.success({ title: title, content: content, okCancel: false });
    }
    showConfirm(content: string, title?: string): void {
        Modal.confirm({ title: title, content: content, okCancel: false })
    }
}
export default new Dialog();