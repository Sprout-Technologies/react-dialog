import * as React from "react";
import { DismissableLayer } from "@radix-ui/react-dismissable-layer";
import { FocusScope } from "@radix-ui/react-focus-scope";
import { Primitive } from "@radix-ui/react-primitive";
import * as Polymorphic from "@radix-ui/react-polymorphic";
type DismissableLayerProps = React.ComponentProps<typeof DismissableLayer>;
type FocusScopeProps = React.ComponentProps<typeof FocusScope>;
type DialogOwnProps = {
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?(open: boolean): void;
};
export const Dialog: React.FC<DialogOwnProps>;
declare const TRIGGER_DEFAULT_TAG = "button";
type DialogTriggerOwnProps = Polymorphic.OwnProps<typeof Primitive>;
type DialogTriggerPrimitive = Polymorphic.ForwardRefComponent<typeof TRIGGER_DEFAULT_TAG, DialogTriggerOwnProps>;
export const DialogTrigger: DialogTriggerPrimitive;
type DialogOverlayOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof DialogOverlayImpl>, {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}>;
type DialogOverlayPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof DialogOverlayImpl>, DialogOverlayOwnProps>;
export const DialogOverlay: DialogOverlayPrimitive;
type DialogOverlayImplOwnProps = Polymorphic.OwnProps<typeof Primitive>;
type DialogOverlayImplPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof Primitive>, DialogOverlayImplOwnProps>;
declare const DialogOverlayImpl: DialogOverlayImplPrimitive;
type DialogContentOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof DialogContentImpl>, {
    /**
     * Used to force mounting when more control is needed. Useful when
     * controlling animation with React animation libraries.
     */
    forceMount?: true;
}>;
type DialogContentPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof DialogContentImpl>, DialogContentOwnProps>;
export const DialogContent: DialogContentPrimitive;
type DialogContentImplOwnProps = Polymorphic.Merge<Polymorphic.OwnProps<typeof Primitive>, {
    /**
     * Event handler called when auto-focusing on open.
     * Can be prevented.
     */
    onOpenAutoFocus?: FocusScopeProps['onMountAutoFocus'];
    /**
     * Event handler called when auto-focusing on close.
     * Can be prevented.
     */
    onCloseAutoFocus?: FocusScopeProps['onUnmountAutoFocus'];
    /**
     * Event handler called when the escape key is down.
     * Can be prevented.
     */
    onEscapeKeyDown?: DismissableLayerProps['onEscapeKeyDown'];
    /**
     * Event handler called when the a pointer event happens outside of the `Dialog`.
     * Can be prevented.
     */
    onPointerDownOutside?: DismissableLayerProps['onPointerDownOutside'];
}>;
type DialogContentImplPrimitive = Polymorphic.ForwardRefComponent<Polymorphic.IntrinsicElement<typeof Primitive>, DialogContentImplOwnProps>;
declare const DialogContentImpl: DialogContentImplPrimitive;
declare const CLOSE_DEFAULT_TAG = "button";
type DialogCloseOwnProps = Polymorphic.OwnProps<typeof Primitive>;
type DialogClosePrimitive = Polymorphic.ForwardRefComponent<typeof CLOSE_DEFAULT_TAG, DialogCloseOwnProps>;
export const DialogClose: DialogClosePrimitive;
export const Root: React.FC<DialogOwnProps>;
export const Trigger: DialogTriggerPrimitive;
export const Overlay: DialogOverlayPrimitive;
export const Content: DialogContentPrimitive;
export const Close: DialogClosePrimitive;

//# sourceMappingURL=index.d.ts.map
