import { Button } from "@/components/ui/button"
import DataTable from "@/components/ui/data-table"
import { columns } from "@/data/subscriptionPlanColumns";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddPlan from "@/components/routes/admin/subscriptions/addPlan";
import { useState } from "react";
import { useSubscriptions } from "@/hooks/use-subscriptions";

function Subscriptions() {
    const { data, isLoading } = useSubscriptions();
    const [open, setOpen] = useState(false)

    if (!data || isLoading) return <>Loading...</>;

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DataTable columns={columns} data={data} filterableColumns={['payment_mode', 'status']}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="bg-zinc-800 text-white">Add Plan</Button>
                    </DialogTrigger>
                    <AddPlan onOpenChange={setOpen} />
                </DataTable>
            </Dialog>
        </div>
    )
}

export default Subscriptions