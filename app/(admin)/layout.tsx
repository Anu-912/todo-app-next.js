"use client";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "./sidebar";
import { UserProvider } from "../components/user-provider";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // 1. Provider at the top, only wraps the admin area
    <UserProvider>
      <SidebarProvider>
        <div className="flex w-full min-h-screen">
          <AppSidebar />
          <main className="flex-1 p-4">
            <SidebarTrigger />
            {children}
          </main>
        </div>
      </SidebarProvider>
    </UserProvider>
  );
}
