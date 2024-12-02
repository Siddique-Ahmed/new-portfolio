import Link from "next/link";
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "../../components/ui/avatar";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen  bg-gray-100">
      <div>{children}</div>
    </div>
  );
}
