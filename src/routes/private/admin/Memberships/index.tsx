import { Button } from "@/components/ui/button"
import DataTable from "@/components/ui/data-table"
import { columns } from "@/data/membershipPlanColumns";
import { useMemberships } from "@/hooks/use-memberships"
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import AddPlan from "@/components/routes/admin/memberships/addPlan";
import { useState } from "react";

function Memberships() {
    const { data, isLoading } = useMemberships();
    const [open, setOpen] = useState(false)

    if (!data || isLoading) return <>Loading...</>;

    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <DataTable columns={columns} data={data}>
                    <DialogTrigger asChild>
                        <Button variant="outline" className="bg-zinc-800 text-white ">Add Plan</Button>
                    </DialogTrigger>
                    <AddPlan onOpenChange={setOpen} />
                </DataTable>
            </Dialog>
        </div>
    )
}

export default Memberships