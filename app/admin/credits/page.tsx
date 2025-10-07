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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Plus,
  Zap,
  TrendingUp,
  TrendingDown,
  ArrowUpRight,
  ArrowDownRight,
  Clock,
  CheckCircle,
  XCircle,
} from "lucide-react"

const mockTransactions = [
  {
    id: 1,
    type: "allocation",
    user: "Nguyễn Văn A",
    project: "Dragon Quest RPG",
    amount: 500,
    reason: "Hoàn thành Milestone 7",
    status: "completed",
    date: "2024-03-15 14:30",
  },
  {
    id: 2,
    type: "redemption",
    user: "Trần Thị B",
    amount: 800,
    reason: "Đổi thưởng tiền mặt",
    status: "pending",
    date: "2024-03-15 10:20",
  },
  {
    id: 3,
    type: "allocation",
    user: "Lê Văn C",
    project: "Racing Legends",
    amount: 300,
    reason: "Hoàn thành UI Design",
    status: "completed",
    date: "2024-03-14 16:45",
  },
  {
    id: 4,
    type: "bonus",
    user: "Phạm Thị D",
    amount: 200,
    reason: "Thưởng đạt Level 15",
    status: "completed",
    date: "2024-03-14 09:15",
  },
  {
    id: 5,
    type: "redemption",
    user: "Hoàng Văn E",
    amount: 500,
    reason: "Đổi voucher",
    status: "rejected",
    date: "2024-03-13 11:30",
  },
]

const mockPendingRequests = [
  {
    id: 1,
    user: "Nguyễn Văn A",
    project: "Dragon Quest RPG",
    amount: 500,
    reason: "Hoàn thành Milestone 8 - Boss Battle System",
    requestDate: "2024-03-15 14:30",
  },
  {
    id: 2,
    user: "Trần Thị B",
    amount: 800,
    reason: "Đổi thưởng tiền mặt - Đạt 3000 credits",
    requestDate: "2024-03-15 10:20",
  },
  {
    id: 3,
    user: "Lê Văn C",
    project: "Puzzle Master",
    amount: 350,
    reason: "Hoàn thành Level Design Phase 2",
    requestDate: "2024-03-14 18:00",
  },
]

export default function AdminCreditsPage() {
  const [activeTab, setActiveTab] = useState("transactions")

  return (
    <div className="p-8 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Quản lý tín chỉ</h1>
          <p className="text-purple-300">Theo dõi và quản lý tất cả giao dịch tín chỉ</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700">
              <Plus className="w-4 h-4 mr-2" />
              Phân phối tín chỉ
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
            <DialogHeader>
              <DialogTitle>Phân phối tín chỉ</DialogTitle>
              <DialogDescription className="text-purple-300">Phân phối tín chỉ cho thành viên</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="member">Thành viên</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-purple-800/30">
                    <SelectValue placeholder="Chọn thành viên" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-800/30">
                    <SelectItem value="user1">Nguyễn Văn A</SelectItem>
                    <SelectItem value="user2">Trần Thị B</SelectItem>
                    <SelectItem value="user3">Lê Văn C</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="project">Dự án</Label>
                <Select>
                  <SelectTrigger className="bg-slate-800 border-purple-800/30">
                    <SelectValue placeholder="Chọn dự án" />
                  </SelectTrigger>
                  <SelectContent className="bg-slate-800 border-purple-800/30">
                    <SelectItem value="project1">Dragon Quest RPG</SelectItem>
                    <SelectItem value="project2">Puzzle Master</SelectItem>
                    <SelectItem value="project3">Racing Legends</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="amount">Số lượng tín chỉ</Label>
                <Input id="amount" type="number" placeholder="500" className="bg-slate-800 border-purple-800/30" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="reason">Lý do</Label>
                <Textarea
                  id="reason"
                  placeholder="Hoàn thành milestone..."
                  className="bg-slate-800 border-purple-800/30"
                />
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
                Phân phối
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-yellow-900/30 rounded-lg flex items-center justify-center">
                <Zap className="w-6 h-6 text-yellow-400" />
              </div>
              <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                24%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">45,200</p>
            <p className="text-sm text-purple-300">Tổng tín chỉ phân phối</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-400" />
              </div>
              <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                18%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">3,450</p>
            <p className="text-sm text-purple-300">Tín chỉ tháng này</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-red-900/30 rounded-lg flex items-center justify-center">
                <TrendingDown className="w-6 h-6 text-red-400" />
              </div>
              <Badge className="bg-red-900/50 text-red-300 border-red-500/30">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                12%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">8,900</p>
            <p className="text-sm text-purple-300">Tín chỉ đã đổi</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-400" />
              </div>
            </div>
            <p className="text-2xl font-bold text-white mb-1">3</p>
            <p className="text-sm text-purple-300">Yêu cầu chờ duyệt</p>
          </CardContent>
        </Card>
      </div>

      {/* Tabs */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="bg-slate-900/50 border border-purple-800/30">
          <TabsTrigger
            value="transactions"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
          >
            Lịch sử giao dịch
          </TabsTrigger>
          <TabsTrigger
            value="pending"
            className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-pink-600"
          >
            Chờ phê duyệt ({mockPendingRequests.length})
          </TabsTrigger>
        </TabsList>

        <TabsContent value="transactions" className="space-y-4 mt-6">
          {mockTransactions.map((transaction) => (
            <Card key={transaction.id} className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                        transaction.type === "allocation"
                          ? "bg-green-900/30"
                          : transaction.type === "redemption"
                            ? "bg-blue-900/30"
                            : "bg-purple-900/30"
                      }`}
                    >
                      {transaction.type === "allocation" ? (
                        <TrendingUp className="w-6 h-6 text-green-400" />
                      ) : transaction.type === "redemption" ? (
                        <TrendingDown className="w-6 h-6 text-blue-400" />
                      ) : (
                        <Zap className="w-6 h-6 text-purple-400" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{transaction.user}</h3>
                        <Badge
                          className={
                            transaction.type === "allocation"
                              ? "bg-green-900/50 text-green-300 border-green-500/30"
                              : transaction.type === "redemption"
                                ? "bg-blue-900/50 text-blue-300 border-blue-500/30"
                                : "bg-purple-900/50 text-purple-300 border-purple-500/30"
                          }
                        >
                          {transaction.type === "allocation"
                            ? "Phân phối"
                            : transaction.type === "redemption"
                              ? "Đổi thưởng"
                              : "Thưởng"}
                        </Badge>
                      </div>
                      <p className="text-sm text-purple-300">
                        {transaction.project && `${transaction.project} • `}
                        {transaction.reason}
                      </p>
                      <p className="text-xs text-purple-400 mt-1">{transaction.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p
                        className={`text-xl font-bold ${transaction.type === "redemption" ? "text-red-400" : "text-green-400"}`}
                      >
                        {transaction.type === "redemption" ? "-" : "+"}
                        {transaction.amount}
                      </p>
                      <p className="text-xs text-purple-400">tín chỉ</p>
                    </div>
                    <div>
                      {transaction.status === "completed" && (
                        <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Hoàn thành
                        </Badge>
                      )}
                      {transaction.status === "pending" && (
                        <Badge className="bg-orange-900/50 text-orange-300 border-orange-500/30">
                          <Clock className="w-3 h-3 mr-1" />
                          Chờ duyệt
                        </Badge>
                      )}
                      {transaction.status === "rejected" && (
                        <Badge className="bg-red-900/50 text-red-300 border-red-500/30">
                          <XCircle className="w-3 h-3 mr-1" />
                          Từ chối
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4 mt-6">
          {mockPendingRequests.map((request) => (
            <Card key={request.id} className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardContent className="pt-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-orange-400" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-white font-semibold">{request.user}</h3>
                        {request.project && (
                          <Badge className="bg-purple-900/50 text-purple-300 border-purple-500/30">
                            {request.project}
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-purple-300">{request.reason}</p>
                      <p className="text-xs text-purple-400 mt-1">{request.requestDate}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <p className="text-xl font-bold text-yellow-400 flex items-center gap-1">
                        <Zap className="w-5 h-5" />
                        {request.amount}
                      </p>
                      <p className="text-xs text-purple-400">tín chỉ</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Phê duyệt
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-900/30 bg-transparent"
                      >
                        Từ chối
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
