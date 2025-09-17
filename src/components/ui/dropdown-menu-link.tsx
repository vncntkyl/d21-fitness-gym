import { DropdownMenuItem } from './dropdown-menu'
import { Link } from 'react-router-dom'

const DropdownMenuLink = ({ to, label }: { to: string; label: string }) => {
    return (
        <DropdownMenuItem asChild>
            <Link to={to}>{label}</Link>
        </DropdownMenuItem>
    )
}

export default DropdownMenuLink