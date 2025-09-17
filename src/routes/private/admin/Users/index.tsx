import { Button } from "@/components/ui/button";
import DataTable from "@/components/ui/data-table";
import { useAuth } from "@/context/authContext"
import { columns } from "@/data/userColumns";
import { Route, Routes } from "react-router-dom";
import NewUserForm from "./newUserForm";
import UserInformation from "./userInformation";

function Users() {
    const { user } = useAuth();

    if (!user) return;

    const rows = [user];

    return (
        <div>
            <Routes>
                <Route index element={
                    <DataTable columns={columns} data={rows}>
                        <Button variant="outline" className="bg-zinc-800 text-white ">Add User</Button>
                    </DataTable>
                } />
                <Route path="new" element={<NewUserForm />} />
                <Route path=":id" element={<UserInformation />} />
            </Routes>
        </div>
    )
}

export default Users