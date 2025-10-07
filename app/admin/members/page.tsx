"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Search, UserPlus, Edit, Ban, ChevronLeft, ChevronRight } from "lucide-react"

// Mock data for demonstration purposes
const mockMembers = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    role: "leader",
    level: "Advanced",
    totalCredits: 150,
    projectsCompleted: 5,
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    role: "member",
    level: "Intermediate",
    totalCredits: 100,
    projectsCompleted: 3,
    status: "inactive",
  },
  // Add more mock members as needed
]

export default function AdminMembersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredMembers = mockMembers.filter((member) => {
    const matchesSearch = member.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesRole = roleFilter === "all" || member.role === roleFilter
    return matchesSearch && matchesRole
  })

  const totalPages = Math.ceil(filteredMembers.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedMembers = filteredMembers.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Quản lý thành viên</h1>
          <p className="text-purple-300">Quản lý tất cả thành viên trong phòng lab</p>
        </div>
        <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
          <UserPlus className="w-4 h-4 mr-2" />
          Thêm thành viên
        </Button>
      </div>

      {/* ... existing stats cards ... */}

      {/* Filters */}
      <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <Input
                placeholder="Tìm kiếm thành viên..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-purple-800/30 text-white"
              />
            </div>
            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger className="w-full md:w-[200px] bg-slate-800 border-purple-800/30 text-white">
                <SelectValue placeholder="Vai trò" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-purple-800/30">
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="leader">Trưởng nhóm</SelectItem>
                <SelectItem value="member">Thành viên</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-purple-800/30 hover:bg-transparent">
                <TableHead className="text-purple-300">Thành viên</TableHead>
                <TableHead className="text-purple-300">Email</TableHead>
                <TableHead className="text-purple-300">Vai trò</TableHead>
                <TableHead className="text-purple-300">Level</TableHead>
                <TableHead className="text-purple-300">Tín chỉ</TableHead>
                <TableHead className="text-purple-300">Dự án</TableHead>
                <TableHead className="text-purple-300">Trạng thái</TableHead>
                <TableHead className="text-purple-300 text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedMembers.map((member) => (
                <TableRow key={member.id} className="border-purple-800/30 hover:bg-purple-900/20">
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 border-2 border-purple-500">
                        <AvatarImage src={`/ceholder-svg-key-qu9kv.jpg?key=qu9kv&height=40&width=40`} />
                        <AvatarFallback className="bg-gradient-to-br from-purple-600 to-pink-600 text-white">
                          {member.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <span className="text-white font-medium">{member.name}</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-purple-300">{member.email}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        member.role === "leader"
                          ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                          : "bg-blue-900/50 text-blue-300 border-blue-500/30"
                      }
                    >
                      {member.role === "leader" ? "Trưởng nhóm" : "Thành viên"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-white font-semibold">{member.level}</TableCell>
                  <TableCell className="text-yellow-400 font-semibold">
                    {member.totalCredits.toLocaleString()}
                  </TableCell>
                  <TableCell className="text-purple-300">{member.projectsCompleted}</TableCell>
                  <TableCell>
                    <Badge
                      className={
                        member.status === "active"
                          ? "bg-green-900/50 text-green-300 border-green-500/30"
                          : "bg-gray-900/50 text-gray-300 border-gray-500/30"
                      }
                    >
                      {member.status === "active" ? "Hoạt động" : "Không hoạt động"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-300 hover:text-white hover:bg-purple-900/30"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-900/30">
                        <Ban className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-purple-800/30">
            <p className="text-sm text-purple-300">
              Hiển thị {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredMembers.length)} trong tổng số{" "}
              {filteredMembers.length} thành viên
            </p>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="text-sm text-white">
                Trang {currentPage} / {totalPages}
              </span>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                disabled={currentPage === totalPages}
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
