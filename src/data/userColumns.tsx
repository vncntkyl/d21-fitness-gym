import ActionCell from "@/components/routes/admin/users/actionCell";
import RoleCell from "@/components/routes/admin/users/roleCell";
import type { User } from "@/types/User";
import type { ColumnDef } from "@tanstack/react-table";

export const columns: ColumnDef<User>[] = [
    {
        accessorKey: "first_name",
        header: "First Name",
        cell: ({ row, column }) => {
            const item: string = row.getValue(column.id);
            return <p className="capitalize">{item}</p>
        }
    },
    {
        accessorKey: "last_name",
        header: "Last Name",
        cell: ({ row, column }) => {
            const item: string = row.getValue(column.id);
            return <p className="capitalize">{item}</p>
        }
    },
    {
        accessorKey: "email_address",
        header: "Email Address",
    },
    {
        accessorKey: "role",
        header: "Role",
        cell: RoleCell
    },
    {
        id: "actions",
        cell: ActionCell
    }

]