import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import DropdownMenuLink from '@/components/ui/dropdown-menu-link';
import { encodeForUrl } from '@/lib/format';
import type { User } from '@/types/User'
import type { CellContext } from '@tanstack/react-table'
import { MoreHorizontal } from 'lucide-react';
function ActionCell({ row }: CellContext<User, unknown>) {
    const item = row.original;

    const hashed = encodeForUrl(`${item.first_name} ${item.last_name}`);
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <MoreHorizontal />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuLink to={`/admin/users/${hashed}`} label='View' />
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Deactivate Account</DropdownMenuItem>
                <DropdownMenuItem>Terminate Account</DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}

export default ActionCell