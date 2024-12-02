import AdminSection from "@/components/AdminSection";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function AdminPanel() {
  return (
    <div className="min-h-screen relative">
      <nav className="bg-white w-full py-2 px-10 flex items-center gap-1 fixed top-0 left-0">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>LOGO</AvatarFallback>
        </Avatar>
        <h1 className="font-bold uppercase text-gray-500">siddique ahmed</h1>
      </nav>
      <div className="pt-24">
        <AdminSection />
      </div>
    </div>
  );
}
