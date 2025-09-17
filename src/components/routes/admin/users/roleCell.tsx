import { Badge } from "@/components/ui/badge";
import { useRole } from "@/hooks/use-roles";
import type { User } from "@/types/User"
import type { CellContext } from "@tanstack/react-table"

function RoleCell({ row }: CellContext<User, unknown>) {
    const roleId = row.getValue("role");
    const { data } = useRole(Number(roleId));

    if (!data) return <>Loading...</>
    return <>
        <Badge variant="outline" className="uppercase bg-black text-white font-lexend">{data.name}</Badge>
    </>
}

export default RoleCell