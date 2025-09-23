import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { useAuth } from "@/context/authContext";
import { Pen, UserCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ProfileUpdate from "./profileUpdate";
import { type User } from "@/types/User";
import GeneralInfo from "./generalInfo";
import AccountInfo from "./accountInfo";
import PasswordInfo from "./passwordInfo";

function Account() {
  const { user } = useAuth();
  const [openProfileChange, onOpenProfileChange] = useState(false);
  const [userData, setUserData] = useState<User>();

  useEffect(() => {
    if (!user) return;

    setUserData(user);
  }, [user]);
  if (!user || !userData) return <>Loading...</>;
  return (
    <section>
      <header className="underline underline-offset-4 decoration-primary uppercase font-bold text-lg">
        Account
      </header>
      <main>
        <fieldset className="border">
          <legend className="font-semibold">General Information</legend>
          <div className="p-4 pt-8 space-y-4">
            <div className="grid grid-cols-[1fr_2fr] items-start">
              <Label>Profile Picture</Label>
              <div className="relative rounded-full w-fit bg-neutral-300 mb-4 overflow-hidden">
                <Dialog
                  open={openProfileChange}
                  onOpenChange={onOpenProfileChange}
                >
                  <DialogTrigger asChild>
                    <div
                      role="button"
                      className="absolute bg-black/20 w-full h-full flex items-center justify-center opacity-0 hover:opacity-100 cursor-pointer"
                    >
                      <Pen size={40} className="text-white"/>
                    </div>
                  </DialogTrigger>
                  <ProfileUpdate open={openProfileChange} />
                </Dialog>
                {user.image ? (
                  <img
                    loading="lazy"
                    src={`http://localhost/d21/images/${user.image}`}
                    alt="profile_img"
                    className="max-w-[120px] rounded-full"
                  />
                ) : (
                  <UserCircle size={120} className="text-neutral-500" />
                )}
              </div>
            </div>
            <GeneralInfo data={userData} />
          </div>
        </fieldset>
        <fieldset className="border">
          <legend className="font-semibold">Account Information</legend>
          <div className="p-4 pt-8 space-y-4">
            <AccountInfo data={userData} />
          </div>
        </fieldset>
        <fieldset className="border">
          <legend className="font-semibold">Password Change</legend>
          <div className="p-4 pt-8 space-y-4">
            <PasswordInfo />
          </div>
        </fieldset>
      </main>
    </section>
  );
}

export default Account;
