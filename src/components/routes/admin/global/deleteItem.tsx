import { AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle } from "@/components/ui/alert-dialog";

function DeleteItem({ mutate }: { mutate: () => void }) {
    const onSubmit = () => {
        mutate();
    }
    return (
        <AlertDialogContent aria-description={undefined} aria-describedby={undefined}>
            <AlertDialogHeader>
                <AlertDialogTitle>Deletion Confirmation</AlertDialogTitle>
            </AlertDialogHeader>
            <div>
                <p>Are you sure you want to delete this?</p>
            </div>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction onClick={onSubmit}>Proceed</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    )
}

export default DeleteItem