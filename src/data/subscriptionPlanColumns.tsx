import type { Subscription } from "@/types/Subscriptions";
import type { ColumnDef } from "@tanstack/react-table";
import { arrayMap, PAYMENT_MODES, STATUSES } from "./map";
import { Badge } from "@/components/ui/badge";
import { formatNumber } from "@/lib/format";
import { cn } from "@/lib/utils";
import ActionCell from "@/components/routes/admin/subscriptions/actionCell";
export const columns: ColumnDef<Subscription>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row, column }) => {
      const item: string = row.getValue(column.id);
      const subscription_type = String(row.original.subscription_type);
      return (
        <div>
          <p className="capitalize font-semibold">{item}</p>
          <span className="text-[0.65rem] text-gray-500 uppercase italic">
            {Number(subscription_type) === 2 && "Non-member Plan"}
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row, column }) => {
      const item: string = row.getValue(column.id);
      return <p>{item ?? "---"}</p>;
    },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row, column }) => {
      const item: string = row.getValue(column.id);
      return <p>{formatNumber(Number(item ?? 0))}</p>;
    },
  },
  {
    accessorKey: "duration",
    header: "Duration",
  },
  {
    accessorKey: "payment_mode",
    header: "Payment Mode",
    cell: ({ row, column }) => {
      const item: number = row.getValue(column.id);
      const mode = PAYMENT_MODES[item - 1];
      return (
        <Badge
          variant="outline"
          className="uppercase bg-black text-white font-lexend"
        >
          {mode}
        </Badge>
      );
    },
    filterFn: (row, columnId, filterValue: string[]) => {
      const options = arrayMap[columnId as keyof typeof arrayMap];
      const values = filterValue.map((filterVal) => {
        const index = options.findIndex((value) => value === filterVal);
        if (index !== -1) {
          return index + 1;
        }
        return -1;
      });
      console.log(values, row.getValue(columnId));
      return values.includes(row.getValue(columnId));
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row, column }) => {
      const item: number = row.getValue(column.id);
      const mode = STATUSES[item - 1];
      return (
        <Badge
          variant={mode === "inactive" ? "destructive" : "outline"}
          className={cn(
            mode === "inactive"
              ? "uppercase bg-red-500 border-red-600 font-lexend"
              : "uppercase bg-emerald-500 border-emerald-600 text-white font-lexend"
          )}
        >
          {mode}
        </Badge>
      );
    },
    filterFn: (row, columnId, filterValue: string[]) => {
      const options = arrayMap[columnId as keyof typeof arrayMap];
      const values = filterValue.map((filterVal) => {
        const index = options.findIndex((value) => value === filterVal);
        if (index !== -1) {
          return index + 1;
        }
        return -1;
      });
      console.log(values, row.getValue(columnId));
      return values.includes(row.getValue(columnId));
    },
  },
  {
    id: "actions",
    cell: ActionCell,
  },
];
