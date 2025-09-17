import type { ColumnDef } from "@tanstack/react-table";
import { PAYMENT_MODES, STATUSES } from "./map";
import { Badge } from "@/components/ui/badge";
import type { Membership } from "@/types/Memberships";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";

export const columns: ColumnDef<Membership>[] = [
    {
        accessorKey: "name",
        header: "Name",
        cell: ({ row, column }) => {
            const item: string = row.getValue(column.id);
            return <p className="capitalize font-semibold">{item}</p>
        }
    },
    {
        accessorKey: "description",
        header: "Description",
        cell: ({ row, column }) => {
            const item: string = row.getValue(column.id);
            return <p>{item ?? "---"}</p>
        }
    },
    {
        accessorKey: "amount",
        header: "Amount",
        cell: ({ row, column }) => {
            const item: string = row.getValue(column.id);
            return <p>{formatNumber(Number(item ?? 0))}</p>
        }
    },
    {
        accessorKey: "payment_mode",
        header: "Payment Mode",
        cell: ({ row, column }) => {
            const item: number = row.getValue(column.id);
            const mode = PAYMENT_MODES[item - 1];
            return <Badge variant="outline" className="uppercase bg-black text-white font-lexend">{mode}</Badge>
        }
    },
    {
        accessorKey: "status",
        header: "Status",
        cell: ({ row, column }) => {
            const item: number = row.getValue(column.id);
            const mode = STATUSES[item - 1];
            return <Badge variant={mode === "INACTIVE" ? "destructive" : "outline"} className={cn(mode === "INACTIVE" ? "" : "uppercase bg-emerald-500 border-emerald-600 text-white font-lexend")}>{mode}</Badge>
        }
    },
    {
        id: "actions",
    }

]