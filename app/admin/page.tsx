"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Zap, Users, Target, TrendingUp, Award, ArrowUpRight, ArrowDownRight } from "lucide-react"
import { Bar, BarChart, Line, LineChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

// Mock data for charts
const creditDistributionData = [
  { month: "Jan", credits: 1200 },
  { month: "Feb", credits: 1800 },
  { month: "Mar", credits: 2400 },
  { month: "Apr", credits: 2100 },
  { month: "May", credits: 2800 },
  { month: "Jun", credits: 3200 },
]

const projectProgressData = [
  { name: "Dragon Quest", progress: 75 },
  { name: "Puzzle Master", progress: 45 },
  { name: "Racing Legends", progress: 30 },
  { name: "Space Shooter", progress: 100 },
  { name: "Tower Defense", progress: 60 },
]

const recentActivity = [
  {
    id: 1,
    type: "credit_distribution",
    project: "Dragon Quest RPG",
    amount: 500,
    user: "Nguyễn Văn A",
    time: "2 giờ trước",
  },
  {
    id: 2,
    type: "milestone_completed",
    project: "Puzzle Master",
    milestone: "Thiết kế UI/UX",
    user: "Trần Thị B",
    time: "5 giờ trước",
  },
  {
    id: 3,
    type: "redemption",
    amount: 800,
    user: "Lê Văn C",
    time: "1 ngày trước",
  },
  {
    id: 4,
    type: "project_created",
    project: "Tower Defense Pro",
    user: "Phạm Thị D",
    time: "2 ngày trước",
  },
]

const pendingApprovals = [
  {
    id: 1,
    type: "credit_request",
    project: "Dragon Quest RPG",
    requester: "Nguyễn Văn A",
    amount: 500,
    reason: "Milestone 7 hoàn thành",
  },
  {
    id: 2,
    type: "redemption",
    requester: "Trần Thị B",
    amount: 800,
    reason: "Yêu cầu đổi tiền mặt",
  },
  {
    id: 3,
    type: "credit_request",
    project: "Puzzle Master",
    requester: "Trần Thị B",
    amount: 300,
    reason: "Hoàn thành UI/UX",
  },
]

export default function AdminDashboard() {
  return (
    <div className="p-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Tổng quan Dashboard</h1>
        <p className="text-purple-300">Chào mừng trở lại! Đây là những gì đang diễn ra trong phòng lab của bạn.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-purple-900/30 rounded-lg flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                12%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">24</p>
            <p className="text-sm text-purple-300">Thành viên hoạt động</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-pink-900/30 rounded-lg flex items-center justify-center">
                <Target className="w-6 h-6 text-pink-400" />
              </div>
              <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                <ArrowUpRight className="w-3 h-3 mr-1" />
                8%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">8</p>
            <p className="text-sm text-purple-300">Dự án đang hoạt động</p>
          </CardContent>
        </Card>

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
            <p className="text-2xl font-bold text-white mb-1">15.2K</p>
            <p className="text-sm text-purple-300">Tín chỉ đã phân phối</p>
          </CardContent>
        </Card>

        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardContent className="pt-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-900/30 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-400" />
              </div>
              <Badge className="bg-red-900/50 text-red-300 border-red-500/30">
                <ArrowDownRight className="w-3 h-3 mr-1" />
                3%
              </Badge>
            </div>
            <p className="text-2xl font-bold text-white mb-1">3</p>
            <p className="text-sm text-purple-300">Chờ phê duyệt</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Credit Distribution Chart */}
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Phân phối tín chỉ</CardTitle>
            <CardDescription className="text-purple-300">Tín chỉ phân phối hàng tháng theo thời gian</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={creditDistributionData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" opacity={0.3} />
                <XAxis dataKey="month" stroke="#a78bfa" />
                <YAxis stroke="#a78bfa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1b4b",
                    border: "1px solid #6d28d9",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Line type="monotone" dataKey="credits" stroke="#a855f7" strokeWidth={2} dot={{ fill: "#a855f7" }} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Project Progress Chart */}
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="text-white">Tiến độ dự án</CardTitle>
            <CardDescription className="text-purple-300">Tiến độ hiện tại của các dự án đang hoạt động</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={projectProgressData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#4c1d95" opacity={0.3} />
                <XAxis dataKey="name" stroke="#a78bfa" angle={-15} textAnchor="end" height={80} />
                <YAxis stroke="#a78bfa" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#1e1b4b",
                    border: "1px solid #6d28d9",
                    borderRadius: "8px",
                    color: "#fff",
                  }}
                />
                <Bar dataKey="progress" fill="url(#colorGradient)" radius={[8, 8, 0, 0]} />
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#a855f7" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Pending Approvals */}
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white flex items-center gap-2">
                  <Award className="w-5 h-5 text-orange-400" />
                  Chờ phê duyệt
                </CardTitle>
                <CardDescription className="text-purple-300">Yêu cầu đang chờ xem xét của bạn</CardDescription>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Xem tất cả
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {pendingApprovals.map((approval) => (
                <div
                  key={approval.id}
                  className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-purple-800/30"
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <Badge
                        className={
                          approval.type === "credit_request"
                            ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                            : "bg-blue-900/50 text-blue-300 border-blue-500/30"
                        }
                      >
                        {approval.type === "credit_request" ? "Yêu cầu tín chỉ" : "Đổi thưởng"}
                      </Badge>
                      {approval.amount && (
                        <span className="text-white font-semibold flex items-center gap-1">
                          <Zap className="w-3 h-3 text-yellow-400" />
                          {approval.amount}
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-purple-300">
                      {approval.project && `${approval.project} • `}
                      {approval.requester} • {approval.reason}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white h-8">
                      Phê duyệt
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-red-500 text-red-400 hover:bg-red-900/30 bg-transparent h-8"
                    >
                      Từ chối
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Activity */}
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle className="text-white">Hoạt động gần đây</CardTitle>
                <CardDescription className="text-purple-300">Các hành động mới nhất trong hệ thống</CardDescription>
              </div>
              <Button
                size="sm"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Xem tất cả
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity) => (
                <div key={activity.id} className="flex items-start gap-3">
                  <div
                    className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                      activity.type === "credit_distribution"
                        ? "bg-purple-900/30"
                        : activity.type === "milestone_completed"
                          ? "bg-green-900/30"
                          : activity.type === "redemption"
                            ? "bg-blue-900/30"
                            : "bg-pink-900/30"
                    }`}
                  >
                    {activity.type === "credit_distribution" ? (
                      <Zap className="w-5 h-5 text-yellow-400" />
                    ) : activity.type === "milestone_completed" ? (
                      <Target className="w-5 h-5 text-green-400" />
                    ) : activity.type === "redemption" ? (
                      <TrendingUp className="w-5 h-5 text-blue-400" />
                    ) : (
                      <Award className="w-5 h-5 text-pink-400" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-white font-medium">
                      {activity.type === "credit_distribution" && (
                        <>
                          <span className="text-purple-300">{activity.user}</span> nhận được{" "}
                          <span className="text-yellow-400">{activity.amount} tín chỉ</span> từ {activity.project}
                        </>
                      )}
                      {activity.type === "milestone_completed" && (
                        <>
                          <span className="text-purple-300">{activity.user}</span> hoàn thành{" "}
                          <span className="text-green-400">{activity.milestone}</span> trong {activity.project}
                        </>
                      )}
                      {activity.type === "redemption" && (
                        <>
                          <span className="text-purple-300">{activity.user}</span> đã đổi{" "}
                          <span className="text-blue-400">{activity.amount} tín chỉ</span>
                        </>
                      )}
                      {activity.type === "project_created" && (
                        <>
                          <span className="text-purple-300">{activity.user}</span> tạo dự án mới{" "}
                          <span className="text-pink-400">{activity.project}</span>
                        </>
                      )}
                    </p>
                    <p className="text-xs text-purple-400 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
