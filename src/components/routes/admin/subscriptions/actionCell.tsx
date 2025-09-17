import { Button } from '@/components/ui/button';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import type { Subscription } from '@/types/Subscriptions';
import type { CellContext } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react';
import EditPlan from './editPlan';
import EditPaymentMode from './editPaymentMode';
import { useState } from 'react';
import { AlertDialog, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import PlanActivation from './planActivation';
import DeleteItem from '../global/deleteItem';
import { useDeletePlan } from '@/hooks/use-subscriptions';
function ActionCell({ row }: CellContext<Subscription, unknown>) {
    const item = row.original;
    const [openEdit, onEditOpen] = useState(false);
    const [openPaymentChange, onPaymentChangeOpen] = useState(false);
    const [openActivation, onActivationOpen] = useState(false);
    const [openDelete, onDeleteOpen] = useState(false);

    const { mutate } = useDeletePlan();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <Dialog open={openEdit} onOpenChange={onEditOpen}>
                    <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Edit Details</DropdownMenuItem>
                    </DialogTrigger>
                    <EditPlan plan={item} onSuccess={() => { onEditOpen(false) }} />
                </Dialog>
                <Dialog open={openPaymentChange} onOpenChange={onPaymentChangeOpen}>
                    <DialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Change Payment Mode</DropdownMenuItem>
                    </DialogTrigger>
                    <EditPaymentMode plan={item} onSuccess={() => { onPaymentChangeOpen(false) }} />
                </Dialog>
                <DropdownMenuSeparator />
                <AlertDialog open={openActivation} onOpenChange={onActivationOpen}>
                    <AlertDialogTrigger asChild>
                        {item.status === 1 ?
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Deactivate Plan</DropdownMenuItem>
                            :
                            <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Activate Plan</DropdownMenuItem>
                        }
                    </AlertDialogTrigger>
                    <PlanActivation plan={item} onSuccess={() => { onActivationOpen(false) }} />
                </AlertDialog>
                <AlertDialog open={openDelete} onOpenChange={onDeleteOpen}>
                    <AlertDialogTrigger asChild>
                        <DropdownMenuItem onSelect={(e) => e.preventDefault()}>Delete Plan</DropdownMenuItem>
                    </AlertDialogTrigger>
                    <DeleteItem mutate={() => {
                        mutate(item.ID, {
                            onSuccess: () => onDeleteOpen(false)
                        })
                    }} />
                </AlertDialog>
            </DropdownMenuContent>
        </DropdownMenu >
    )
}

export default ActionCell