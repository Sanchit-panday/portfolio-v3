import * as DialogPrimitive from "@radix-ui/react-dialog"

function errorBox({
    ...props
}: React.ComponentProps<typeof DialogPrimitive.Trigger>) {
    return (
        <>
            <DialogPrimitive.Trigger data-slot="dialog-trigger" {...props} />
            {/* <div>errorBox</div> */}
        </>
    )
}
export default errorBox
