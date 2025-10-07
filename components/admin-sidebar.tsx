"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { LayoutDashboard, FolderKanban, Users, Zap, TrendingUp, Settings, Award, BarChart3 } from "lucide-react"

const navigation = [
  { name: "Tổng quan", href: "/admin", icon: LayoutDashboard },
  { name: "Dự án", href: "/admin/projects", icon: FolderKanban },
  { name: "Thành viên", href: "/admin/members", icon: Users },
  { name: "Tín chỉ", href: "/admin/credits", icon: Zap },
  { name: "Phân tích", href: "/admin/analytics", icon: BarChart3 },
  { name: "Thành tựu", href: "/admin/achievements", icon: Award },
  { name: "Báo cáo", href: "/admin/reports", icon: TrendingUp },
  { name: "Cài đặt", href: "/admin/settings", icon: Settings },
]

export function AdminSidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col border-r border-purple-800/30 bg-slate-950/50 backdrop-blur-sm">
      {/* Logo */}
      <div className="flex h-16 items-center gap-3 border-b border-purple-800/30 px-6">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
          <Zap className="w-6 h-6 text-white" />
        </div>
        <div>
          <h1 className="text-lg font-bold text-white">FusionLab</h1>
          <p className="text-xs text-purple-300">Admin Panel</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-1 px-3 py-4">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.name}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                isActive
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white"
                  : "text-purple-300 hover:bg-purple-900/30 hover:text-white",
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.name}
            </Link>
          )
        })}
      </nav>

      {/* Footer */}
      <div className="border-t border-purple-800/30 p-4">
        <div className="rounded-lg bg-purple-900/30 p-3">
          <p className="text-xs font-medium text-purple-200">Cần trợ giúp?</p>
          <p className="text-xs text-purple-400 mt-1">Xem tài liệu hoặc liên hệ hỗ trợ</p>
        </div>
      </div>
    </div>
  )
}
