import { useAuth } from "@/context/authContext";
import { profile_items } from "@/data/links";
import { useRole } from "@/hooks/use-roles";
import { UserCircle } from "lucide-react";
import type { ReactNode } from "react";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

function ProfileSidebar({ children }: { children: ReactNode }) {
  const { user } = useAuth();
  const { data: role } = useRole(user?.role);

  if (!user || !role) return <>Loading...</>;

  return (
    <div className="relative flex gap-4">
      <aside className="sticky top-0 w-64 h-full bg-white border shadow p-4 space-y-4">
        <header className="flex flex-col items-center">
          {user.image ? (
            <img
              loading="lazy"
              src={`http://localhost/d21/images/${user.image}`}
              alt="profile_img"
              className="max-w-[120px] rounded-full mb-4"
            />
          ) : (
            <div className="rounded-full w-fit bg-neutral-300 mb-4">
              <UserCircle size={120} className="text-neutral-500" />
            </div>
          )}
          <p className="uppercase font-bold text-wrap text-center text-lg">{`${user.first_name} ${user.last_name}`}</p>
          <p className="uppercase text-neutral-500 font-semibold text-xs">
            {role?.name}
          </p>
        </header>
        <hr />
        <main className="flex flex-col gap-2">
          {profile_items.map(({ icon: Icon, ...link }) => {
            return (
              <Button
                asChild
                key={link.title}
                variant="outline"
                className="w-full items-center justify-start gap-3"
              >
                {/* <div className="w-full"> */}
                <Link to={`/profile${link.url}`} className="w-full">
                  <Icon />
                  <span>{link.title}</span>
                </Link>
                {/* </div> */}
              </Button>
            );
          })}
        </main>
      </aside>
      <main className="flex-1 border bg-white p-4 px-6 shadow">{children}</main>
    </div>
  );
}

export default ProfileSidebar;
