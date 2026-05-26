"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { useUser } from "../user-provider";
import { redirect } from "next/navigation";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { loading, user } = useUser();

  if (loading) {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        Loading...
      </div>
    );
  }

  if (!loading && !user) {
    return redirect("/login");
  }

  if (user?.role !== "ADMIN") {
    return (
      <div className='w-full h-screen flex justify-center items-center'>
        You are not admin
      </div>
    );
  }

  return (
    <SidebarProvider>
      <AppSidebar />
      <main>
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  );
}
