import logo from "@/assets/d21-logo-np.webp";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '../ui/sidebar'
import { links } from "@/data/adminSidebarItems";
import { Link } from "react-router-dom";

function AdminSidebar() {

    return (
        <Sidebar>
            <SidebarHeader className="flex flex-row items-center">
                <img src={logo} alt="" className="max-w-20" />
                <p className="font-lexend font-semibold">Administrator<br />Panel</p>
            </SidebarHeader>
            <SidebarContent className="font-lexend">
                {links.map(item => {
                    if (item.group) {
                        return <SidebarGroup key={item.group}>
                            <SidebarGroupLabel className="capitalize">Manage {item.group}</SidebarGroupLabel>
                            <SidebarGroupContent>
                                <SidebarMenu>
                                    {item.items.map(groupItem => {
                                        return <SidebarMenuItem key={groupItem.title}>
                                            <SidebarMenuButton asChild>
                                                <Link to={groupItem.url}>
                                                    <groupItem.icon />
                                                    <span className="font-light">{groupItem.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    })}
                                </SidebarMenu>
                            </SidebarGroupContent>
                        </SidebarGroup>
                    }
                    return <SidebarGroup key={item.title}>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton asChild>
                                    <Link to={item.url as string}>
                                        {item.icon && <item.icon />}
                                        <span className="font-light">{item.title}</span>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarGroup>
                })}
            </SidebarContent>
        </Sidebar>
    )
}

export default AdminSidebar