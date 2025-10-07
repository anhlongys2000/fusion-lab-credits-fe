"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Trophy, Star, Award, Crown, Zap, Target, Plus, Search, Edit, Trash2 } from "lucide-react"
import { useState } from "react"

const achievements = [
  {
    id: 1,
    name: "Người Mới",
    description: "Hoàn thành dự án đầu tiên",
    icon: "Star",
    rarity: "Common",
    points: 50,
    unlocked: 28,
    total: 32,
    color: "text-gray-500",
  },
  {
    id: 2,
    name: "Chuyên Gia",
    description: "Hoàn thành 5 dự án",
    icon: "Trophy",
    rarity: "Rare",
    points: 150,
    unlocked: 12,
    total: 32,
    color: "text-blue-500",
  },
  {
    id: 3,
    name: "Bậc Thầy",
    description: "Hoàn thành 10 dự án",
    icon: "Crown",
    rarity: "Epic",
    points: 300,
    unlocked: 5,
    total: 32,
    color: "text-purple-500",
  },
  {
    id: 4,
    name: "Huyền Thoại",
    description: "Hoàn thành 20 dự án",
    icon: "Award",
    rarity: "Legendary",
    points: 500,
    unlocked: 1,
    total: 32,
    color: "text-yellow-500",
  },
  {
    id: 5,
    name: "Tốc Độ",
    description: "Hoàn thành task trong 1 ngày",
    icon: "Zap",
    rarity: "Rare",
    points: 100,
    unlocked: 15,
    total: 32,
    color: "text-blue-500",
  },
  {
    id: 6,
    name: "Hoàn Hảo",
    description: "Hoàn thành dự án 100%",
    icon: "Target",
    rarity: "Epic",
    points: 250,
    unlocked: 8,
    total: 32,
    color: "text-purple-500",
  },
  {
    id: 7,
    name: "Đồng Đội",
    description: "Tham gia 3 dự án cùng lúc",
    icon: "Star",
    rarity: "Common",
    points: 75,
    unlocked: 20,
    total: 32,
    color: "text-gray-500",
  },
  {
    id: 8,
    name: "Kiên Trì",
    description: "Streak 30 ngày",
    icon: "Trophy",
    rarity: "Epic",
    points: 350,
    unlocked: 3,
    total: 32,
    color: "text-purple-500",
  },
]

const rarityColors = {
  Common: "bg-gray-100 text-gray-700 border-gray-300",
  Rare: "bg-blue-100 text-blue-700 border-blue-300",
  Epic: "bg-purple-100 text-purple-700 border-purple-300",
  Legendary: "bg-yellow-100 text-yellow-700 border-yellow-300",
}

export default function AchievementsPage() {
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 5
  const totalPages = Math.ceil(achievements.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const endIndex = startIndex + itemsPerPage
  const currentAchievements = achievements.slice(startIndex, endIndex)

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Quản Lý Thành Tựu
          </h1>
          <p className="text-muted-foreground mt-2">Tạo và quản lý các thành tựu trong hệ thống</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Plus className="mr-2 h-4 w-4" />
              Tạo Thành Tựu
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px]">
            <DialogHeader>
              <DialogTitle>Tạo Thành Tựu Mới</DialogTitle>
              <DialogDescription>Thêm thành tựu mới vào hệ thống gamification</DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Tên Thành Tựu</Label>
                <Input id="name" placeholder="Ví dụ: Người Mới" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Mô Tả</Label>
                <Textarea id="description" placeholder="Điều kiện để đạt được thành tựu..." />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="rarity">Độ Hiếm</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Chọn độ hiếm" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="common">Common</SelectItem>
                      <SelectItem value="rare">Rare</SelectItem>
                      <SelectItem value="epic">Epic</SelectItem>
                      <SelectItem value="legendary">Legendary</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="points">Điểm Thưởng</Label>
                  <Input id="points" type="number" placeholder="50" />
                </div>
              </div>
            </div>
            <DialogFooter>
              <Button type="submit" className="bg-gradient-to-r from-purple-600 to-pink-600">
                Tạo Thành Tựu
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng Thành Tựu</CardTitle>
            <Trophy className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{achievements.length}</div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Đã Mở Khóa</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">Tổng số lần mở khóa</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Hiếm Nhất</CardTitle>
            <Crown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3.1%</div>
            <p className="text-xs text-muted-foreground">Huyền Thoại</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng Điểm</CardTitle>
            <Star className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,775</div>
            <p className="text-xs text-muted-foreground">Điểm có thể đạt được</p>
          </CardContent>
        </Card>
      </div>

      {/* Search */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input placeholder="Tìm kiếm thành tựu..." className="pl-8" />
        </div>
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Độ hiếm" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="common">Common</SelectItem>
            <SelectItem value="rare">Rare</SelectItem>
            <SelectItem value="epic">Epic</SelectItem>
            <SelectItem value="legendary">Legendary</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Table */}
      <Card>
        <CardHeader>
          <CardTitle>Danh Sách Thành Tựu</CardTitle>
          <CardDescription>Quản lý tất cả thành tựu trong hệ thống</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Thành Tựu</TableHead>
                <TableHead>Mô Tả</TableHead>
                <TableHead>Độ Hiếm</TableHead>
                <TableHead>Điểm</TableHead>
                <TableHead>Tiến Độ</TableHead>
                <TableHead className="text-right">Thao Tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentAchievements.map((achievement) => (
                <TableRow key={achievement.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div
                        className={`p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100 ${achievement.color}`}
                      >
                        {achievement.icon === "Star" && <Star className="h-5 w-5" />}
                        {achievement.icon === "Trophy" && <Trophy className="h-5 w-5" />}
                        {achievement.icon === "Crown" && <Crown className="h-5 w-5" />}
                        {achievement.icon === "Award" && <Award className="h-5 w-5" />}
                        {achievement.icon === "Zap" && <Zap className="h-5 w-5" />}
                        {achievement.icon === "Target" && <Target className="h-5 w-5" />}
                      </div>
                      <div>
                        <div className="font-medium">{achievement.name}</div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="max-w-xs">
                    <p className="text-sm text-muted-foreground truncate">{achievement.description}</p>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline" className={rarityColors[achievement.rarity as keyof typeof rarityColors]}>
                      {achievement.rarity}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="font-medium">{achievement.points}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">
                          {achievement.unlocked}/{achievement.total}
                        </span>
                        <span className="font-medium">
                          {Math.round((achievement.unlocked / achievement.total) * 100)}%
                        </span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                          style={{ width: `${(achievement.unlocked / achievement.total) * 100}%` }}
                        />
                      </div>
                    </div>
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Button variant="ghost" size="icon">
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="icon">
                        <Trash2 className="h-4 w-4 text-red-500" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          {/* Pagination */}
          <div className="flex items-center justify-between mt-4">
            <p className="text-sm text-muted-foreground">
              Hiển thị {startIndex + 1}-{Math.min(endIndex, achievements.length)} trong tổng số {achievements.length}{" "}
              thành tựu
            </p>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                Trước
              </Button>
              <div className="flex items-center gap-1">
                {[...Array(totalPages)].map((_, i) => (
                  <Button
                    key={i}
                    variant={currentPage === i + 1 ? "default" : "outline"}
                    size="sm"
                    onClick={() => setCurrentPage(i + 1)}
                    className={currentPage === i + 1 ? "bg-gradient-to-r from-purple-600 to-pink-600" : ""}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                size="sm"
                onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages}
              >
                Sau
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
