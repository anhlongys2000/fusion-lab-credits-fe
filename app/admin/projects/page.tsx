"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Search, Edit, Trash2, Eye, ChevronLeft, ChevronRight } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import Link from "next/link"

const mockProjects = [
  {
    id: 1,
    name: "Dragon Quest RPG",
    description: "Một game nhập vai phiêu lưu với đồ họa 2D pixel art",
    status: "active",
    progress: 75,
    leader: "Nguyễn Văn A",
    members: 5,
    totalCredits: 5000,
    usedCredits: 3750,
    startDate: "2024-01-15",
    deadline: "2024-06-30",
  },
  {
    id: 2,
    name: "Puzzle Master",
    description: "Game giải đố với hơn 100 cấp độ thử thách",
    status: "active",
    progress: 45,
    leader: "Trần Thị B",
    members: 3,
    totalCredits: 3000,
    usedCredits: 1350,
    startDate: "2024-02-01",
    deadline: "2024-07-15",
  },
  {
    id: 3,
    name: "Racing Legends",
    description: "Game đua xe với nhiều chế độ chơi khác nhau",
    status: "active",
    progress: 30,
    leader: "Lê Văn C",
    members: 4,
    totalCredits: 4000,
    usedCredits: 1200,
    startDate: "2024-03-01",
    deadline: "2024-08-30",
  },
  {
    id: 4,
    name: "Space Shooter",
    description: "Game bắn súng không gian với đồ họa 3D",
    status: "completed",
    progress: 100,
    leader: "Phạm Thị D",
    members: 6,
    totalCredits: 6000,
    usedCredits: 6000,
    startDate: "2023-09-01",
    deadline: "2024-01-31",
  },
  {
    id: 5,
    name: "Tower Defense Pro",
    description: "Game phòng thủ tháp với chiến thuật sâu sắc",
    status: "active",
    progress: 60,
    leader: "Hoàng Văn E",
    members: 4,
    totalCredits: 4500,
    usedCredits: 2700,
    startDate: "2024-01-20",
    deadline: "2024-07-01",
  },
]

export default function AdminProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const filteredProjects = mockProjects.filter((project) => {
    const matchesSearch = project.name.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesStatus
  })

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const paginatedProjects = filteredProjects.slice(startIndex, startIndex + itemsPerPage)

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Quản lý dự án</h1>
          <p className="text-purple-300">Quản lý tất cả các dự án trong phòng lab</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="w-4 h-4 mr-2" />
              Tạo dự án mới
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-purple-800/30 text-white max-w-2xl">
            <DialogHeader>
              <DialogTitle>Tạo dự án mới</DialogTitle>
              <DialogDescription className="text-purple-300">
                Điền thông tin để tạo dự án mới cho phòng lab
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="project-name">Tên dự án</Label>
                <Input id="project-name" placeholder="Nhập tên dự án" className="bg-slate-800 border-purple-800/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="project-desc">Mô tả</Label>
                <Textarea
                  id="project-desc"
                  placeholder="Mô tả chi tiết về dự án"
                  className="bg-slate-800 border-purple-800/30 min-h-[100px]"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="project-leader">Trưởng nhóm</Label>
                  <Select>
                    <SelectTrigger className="bg-slate-800 border-purple-800/30">
                      <SelectValue placeholder="Chọn trưởng nhóm" />
                    </SelectTrigger>
                    <SelectContent className="bg-slate-800 border-purple-800/30">
                      <SelectItem value="user1">Nguyễn Văn A</SelectItem>
                      <SelectItem value="user2">Trần Thị B</SelectItem>
                      <SelectItem value="user3">Lê Văn C</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="project-credits">Tổng tín chỉ</Label>
                  <Input
                    id="project-credits"
                    type="number"
                    placeholder="5000"
                    className="bg-slate-800 border-purple-800/30"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="start-date">Ngày bắt đầu</Label>
                  <Input id="start-date" type="date" className="bg-slate-800 border-purple-800/30" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="deadline">Deadline</Label>
                  <Input id="deadline" type="date" className="bg-slate-800 border-purple-800/30" />
                </div>
              </div>
            </div>
            <div className="flex justify-end gap-3">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Hủy
              </Button>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
                Tạo dự án
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Filters */}
      <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-purple-400" />
              <Input
                placeholder="Tìm kiếm dự án..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-slate-800 border-purple-800/30 text-white"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-[200px] bg-slate-800 border-purple-800/30 text-white">
                <SelectValue placeholder="Trạng thái" />
              </SelectTrigger>
              <SelectContent className="bg-slate-800 border-purple-800/30">
                <SelectItem value="all">Tất cả</SelectItem>
                <SelectItem value="active">Đang hoạt động</SelectItem>
                <SelectItem value="completed">Hoàn thành</SelectItem>
                <SelectItem value="paused">Tạm dừng</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Projects Table */}
      <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
        <CardContent className="pt-6">
          <Table>
            <TableHeader>
              <TableRow className="border-purple-800/30 hover:bg-transparent">
                <TableHead className="text-purple-300">Tên dự án</TableHead>
                <TableHead className="text-purple-300">Trưởng nhóm</TableHead>
                <TableHead className="text-purple-300">Thành viên</TableHead>
                <TableHead className="text-purple-300">Tiến độ</TableHead>
                <TableHead className="text-purple-300">Tín chỉ</TableHead>
                <TableHead className="text-purple-300">Trạng thái</TableHead>
                <TableHead className="text-purple-300">Deadline</TableHead>
                <TableHead className="text-purple-300 text-right">Thao tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedProjects.map((project) => (
                <TableRow key={project.id} className="border-purple-800/30 hover:bg-purple-900/20">
                  <TableCell className="font-medium text-white">{project.name}</TableCell>
                  <TableCell className="text-purple-300">{project.leader}</TableCell>
                  <TableCell className="text-purple-300">{project.members}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Progress value={project.progress} className="h-2 w-20 bg-slate-800" />
                      <span className="text-white text-sm">{project.progress}%</span>
                    </div>
                  </TableCell>
                  <TableCell className="text-purple-300">
                    {project.usedCredits}/{project.totalCredits}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={
                        project.status === "active"
                          ? "bg-green-900/50 text-green-300 border-green-500/30"
                          : project.status === "completed"
                            ? "bg-blue-900/50 text-blue-300 border-blue-500/30"
                            : "bg-orange-900/50 text-orange-300 border-orange-500/30"
                      }
                    >
                      {project.status === "active"
                        ? "Hoạt động"
                        : project.status === "completed"
                          ? "Hoàn thành"
                          : "Tạm dừng"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-purple-300">{project.deadline}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link href={`/admin/projects/${project.id}`}>
                        <Button
                          size="sm"
                          variant="ghost"
                          className="text-purple-300 hover:text-white hover:bg-purple-900/30"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                      </Link>
                      <Button
                        size="sm"
                        variant="ghost"
                        className="text-purple-300 hover:text-white hover:bg-purple-900/30"
                      >
                        <Edit className="w-4 h-4" />
                      </Button>
                      <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300 hover:bg-red-900/30">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex items-center justify-between mt-6 pt-6 border-t border-purple-800/30">
            <p className="text-sm text-purple-300">
              Hiển thị {startIndex + 1} - {Math.min(startIndex + itemsPerPage, filteredProjects.length)} trong tổng số{" "}
              {filteredProjects.length} dự án
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
