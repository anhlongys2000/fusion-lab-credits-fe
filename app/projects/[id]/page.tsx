"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Zap,
  Users,
  Target,
  Calendar,
  CheckCircle2,
  Circle,
  Clock,
  Award,
  TrendingUp,
  DollarSign,
  ArrowLeft,
  Edit,
  Plus,
  Filter,
  ListTodo,
} from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const projectData = {
  id: 1,
  name: "RPG Nhiệm Vụ Rồng",
  description:
    "Một RPG giả tưởng sử thi với chiến đấu theo lượt, phát triển nhân vật và cốt truyện hấp dẫn. Người chơi bắt đầu nhiệm vụ cứu vương quốc khỏi thế lực tà ác cổ đại.",
  leader: {
    name: "Nguyễn Văn A",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Trưởng Dự Án",
  },
  semester: "Xuân 2025",
  status: "Đang hoạt động",
  startDate: "05/01/2025",
  expectedEndDate: "15/05/2025",
  progress: 75,
  creditsAllocated: 3000,
  creditsDistributed: 2250,
  creditsRemaining: 750,
  team: [
    {
      id: 1,
      name: "Nguyễn Văn A",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Lập trình viên chính",
      credits: 850,
      contributions: 45,
    },
    {
      id: 2,
      name: "Trần Thị B",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Thiết kế UI/UX",
      credits: 420,
      contributions: 28,
    },
    {
      id: 3,
      name: "Lê Văn C",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Lập trình viên Backend",
      credits: 520,
      contributions: 32,
    },
    {
      id: 4,
      name: "Phạm Thị D",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Thiết kế Game",
      credits: 380,
      contributions: 25,
    },
    {
      id: 5,
      name: "Hoàng Văn E",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Thiết kế Âm thanh",
      credits: 80,
      contributions: 8,
    },
  ],
}

const initialMilestones = [
  {
    id: 1,
    name: "Thiết lập & Lên kế hoạch Dự án",
    description: "Khởi tạo cấu trúc dự án, định nghĩa yêu cầu và tạo lộ trình phát triển",
    status: "completed",
    credits: 200,
    dueDate: "15/01/2025",
    completedDate: "14/01/2025",
    assignees: ["Nguyễn Văn A", "Phạm Thị D"],
  },
  {
    id: 2,
    name: "Cơ chế Game Cốt lõi",
    description: "Triển khai di chuyển cơ bản, hệ thống chiến đấu và điều khiển nhân vật",
    status: "completed",
    credits: 400,
    dueDate: "01/02/2025",
    completedDate: "30/01/2025",
    assignees: ["Nguyễn Văn A", "Lê Văn C"],
  },
  {
    id: 3,
    name: "Thiết kế UI/UX",
    description: "Thiết kế và triển khai menu game, HUD, hệ thống kho đồ và màn hình nhân vật",
    status: "completed",
    credits: 350,
    dueDate: "15/02/2025",
    completedDate: "14/02/2025",
    assignees: ["Trần Thị B"],
  },
  {
    id: 4,
    name: "Hệ thống Phát triển Nhân vật",
    description: "Triển khai nâng cấp, cây kỹ năng, hệ thống trang bị và chỉ số nhân vật",
    status: "in-progress",
    credits: 450,
    dueDate: "01/03/2025",
    completedDate: null,
    assignees: ["Nguyễn Văn A", "Lê Văn C"],
  },
  {
    id: 5,
    name: "Cốt truyện & Hệ thống Nhiệm vụ",
    description: "Tạo cốt truyện chính, nhiệm vụ phụ, hệ thống đối thoại và tương tác NPC",
    status: "pending",
    credits: 400,
    dueDate: "15/03/2025",
    completedDate: null,
    assignees: ["Phạm Thị D", "Nguyễn Văn A"],
  },
]

const initialTasks = [
  {
    id: 1,
    milestoneId: 4,
    name: "Triển khai hệ thống cây kỹ năng",
    description: "Tạo giao diện và logic cho cây kỹ năng của nhân vật",
    assignedTo: "Nguyễn Văn A",
    status: "in-progress",
    dueDate: "25/02/2025",
    completedDate: null,
    credits: 150,
  },
  {
    id: 2,
    milestoneId: 4,
    name: "Thiết kế hệ thống trang bị",
    description: "Tạo UI cho việc trang bị vũ khí và áo giáp",
    assignedTo: "Trần Thị B",
    status: "completed",
    dueDate: "20/02/2025",
    completedDate: "19/02/2025",
    credits: 100,
  },
  {
    id: 3,
    milestoneId: 4,
    name: "Lập trình logic trang bị",
    description: "Triển khai backend cho hệ thống trang bị",
    assignedTo: "Lê Văn C",
    status: "completed",
    dueDate: "22/02/2025",
    completedDate: "21/02/2025",
    credits: 120,
  },
  {
    id: 4,
    milestoneId: 4,
    name: "Cân bằng chỉ số nhân vật",
    description: "Điều chỉnh các chỉ số để đảm bảo gameplay cân bằng",
    assignedTo: "Phạm Thị D",
    status: "pending",
    dueDate: "28/02/2025",
    completedDate: null,
    credits: 80,
  },
  {
    id: 5,
    milestoneId: 5,
    name: "Viết cốt truyện chính",
    description: "Hoàn thiện kịch bản cho cốt truyện chính của game",
    assignedTo: "Phạm Thị D",
    status: "pending",
    dueDate: "10/03/2025",
    completedDate: null,
    credits: 200,
  },
]

const activityLog = [
  {
    id: 1,
    type: "milestone",
    message: "Cột mốc 'Thiết kế UI/UX' đã hoàn thành",
    user: "Trần Thị B",
    date: "14/02/2025",
    credits: 350,
  },
  {
    id: 2,
    type: "task",
    message: "Nhiệm vụ 'Thiết kế hệ thống trang bị' đã hoàn thành",
    user: "Trần Thị B",
    date: "19/02/2025",
    credits: 100,
  },
  {
    id: 3,
    type: "credit",
    message: "Phân phối 150 tín chỉ cho Nguyễn Văn A",
    user: "Quản lý Dự án",
    date: "18/02/2025",
    credits: 150,
  },
  {
    id: 4,
    type: "team",
    message: "Hoàng Văn E đã tham gia dự án",
    user: "Quản lý Dự án",
    date: "15/02/2025",
    credits: null,
  },
]

export default function ProjectDetailsPage() {
  const [milestones, setMilestones] = useState(initialMilestones)
  const [tasks, setTasks] = useState(initialTasks)
  const [editProjectOpen, setEditProjectOpen] = useState(false)
  const [addMilestoneOpen, setAddMilestoneOpen] = useState(false)
  const [editMilestoneOpen, setEditMilestoneOpen] = useState(false)
  const [addTaskOpen, setAddTaskOpen] = useState(false)
  const [editTaskOpen, setEditTaskOpen] = useState(false)
  const [selectedMilestone, setSelectedMilestone] = useState<any>(null)
  const [selectedTask, setSelectedTask] = useState<any>(null)
  const [taskFilter, setTaskFilter] = useState("all")

  const completedMilestones = milestones.filter((m) => m.status === "completed").length
  const totalMilestones = milestones.length

  const filteredTasks = tasks.filter((task) => {
    if (taskFilter === "all") return true
    if (taskFilter === "completed") return task.status === "completed"
    if (taskFilter === "in-progress") return task.status === "in-progress"
    if (taskFilter === "pending") return task.status === "pending"
    return true
  })

  const handleMarkTaskComplete = (taskId: number) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, status: "completed", completedDate: new Date().toLocaleDateString("vi-VN") }
          : task,
      ),
    )
  }

  const handleMarkMilestoneComplete = (milestoneId: number) => {
    setMilestones(
      milestones.map((milestone) =>
        milestone.id === milestoneId
          ? { ...milestone, status: "completed", completedDate: new Date().toLocaleDateString("vi-VN") }
          : milestone,
      ),
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-white">Chi Tiết Dự Án</h1>
              <p className="text-xs text-purple-300">{projectData.name}</p>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Dialog open={editProjectOpen} onOpenChange={setEditProjectOpen}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                >
                  <Edit className="w-4 h-4 mr-2" />
                  Chỉnh sửa Dự án
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
                <DialogHeader>
                  <DialogTitle>Chỉnh sửa Dự án</DialogTitle>
                  <DialogDescription className="text-purple-300">Cập nhật thông tin dự án</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="project-name">Tên dự án</Label>
                    <Input
                      id="project-name"
                      defaultValue={projectData.name}
                      className="bg-slate-800 border-purple-800/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="project-desc">Mô tả</Label>
                    <Textarea
                      id="project-desc"
                      defaultValue={projectData.description}
                      className="bg-slate-800 border-purple-800/30"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="start-date">Ngày bắt đầu</Label>
                      <Input
                        id="start-date"
                        type="date"
                        defaultValue="2025-01-05"
                        className="bg-slate-800 border-purple-800/30"
                      />
                    </div>
                    <div>
                      <Label htmlFor="end-date">Ngày kết thúc dự kiến</Label>
                      <Input
                        id="end-date"
                        type="date"
                        defaultValue="2025-05-15"
                        className="bg-slate-800 border-purple-800/30"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="credits">Tín chỉ phân bổ</Label>
                    <Input
                      id="credits"
                      type="number"
                      defaultValue={projectData.creditsAllocated}
                      className="bg-slate-800 border-purple-800/30"
                    />
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setEditProjectOpen(false)}
                    className="border-purple-500 text-purple-300"
                  >
                    Hủy
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Lưu thay đổi</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>

            <Dialog open={addMilestoneOpen} onOpenChange={setAddMilestoneOpen}>
              <DialogTrigger asChild>
                <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                  <Plus className="w-4 h-4 mr-2" />
                  Thêm Cột mốc
                </Button>
              </DialogTrigger>
              <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
                <DialogHeader>
                  <DialogTitle>Thêm Cột mốc Mới</DialogTitle>
                  <DialogDescription className="text-purple-300">Tạo cột mốc mới cho dự án</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="milestone-name">Tên cột mốc</Label>
                    <Input
                      id="milestone-name"
                      placeholder="Nhập tên cột mốc"
                      className="bg-slate-800 border-purple-800/30"
                    />
                  </div>
                  <div>
                    <Label htmlFor="milestone-desc">Mô tả</Label>
                    <Textarea
                      id="milestone-desc"
                      placeholder="Mô tả chi tiết cột mốc"
                      className="bg-slate-800 border-purple-800/30"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="milestone-credits">Tín chỉ</Label>
                      <Input
                        id="milestone-credits"
                        type="number"
                        placeholder="0"
                        className="bg-slate-800 border-purple-800/30"
                      />
                    </div>
                    <div>
                      <Label htmlFor="milestone-due">Hạn chót</Label>
                      <Input id="milestone-due" type="date" className="bg-slate-800 border-purple-800/30" />
                    </div>
                  </div>
                </div>
                <DialogFooter>
                  <Button
                    variant="outline"
                    onClick={() => setAddMilestoneOpen(false)}
                    className="border-purple-500 text-purple-300"
                  >
                    Hủy
                  </Button>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Tạo Cột mốc</Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Project Header */}
        <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm mb-8">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{projectData.name}</h2>
                    <p className="text-purple-300 text-lg mb-4">{projectData.description}</p>
                    <div className="flex items-center gap-4">
                      <Badge className="bg-green-900/50 text-green-300 border-green-500/30">{projectData.status}</Badge>
                      <span className="text-purple-400 text-sm flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {projectData.semester}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Tiến độ</p>
                    <p className="text-white text-2xl font-bold">{projectData.progress}%</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Quy mô Nhóm</p>
                    <p className="text-white text-2xl font-bold">{projectData.team.length}</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Cột mốc</p>
                    <p className="text-white text-2xl font-bold">
                      {completedMilestones}/{totalMilestones}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Tín chỉ Đã dùng</p>
                    <p className="text-white text-2xl font-bold">{projectData.creditsDistributed}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-300">Tiến trình Dự án</span>
                    <span className="text-white">
                      {projectData.startDate} → {projectData.expectedEndDate}
                    </span>
                  </div>
                  <Progress value={projectData.progress} className="h-3 bg-slate-800" />
                </div>
              </div>

              <div className="md:w-80">
                <Card className="bg-slate-800/50 border-purple-800/30">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Tổng quan Tín chỉ</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Đã phân bổ</span>
                      <span className="text-white font-bold flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        {projectData.creditsAllocated}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Đã phân phối</span>
                      <span className="text-green-400 font-bold">{projectData.creditsDistributed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Còn lại</span>
                      <span className="text-blue-400 font-bold">{projectData.creditsRemaining}</span>
                    </div>
                    <div className="pt-4 border-t border-purple-800/30">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Phân phối Tín chỉ
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-purple-800/30 mt-4">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Trưởng Dự án</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <Avatar className="w-12 h-12 border-2 border-purple-500">
                        <AvatarImage src={projectData.leader.avatar || "/placeholder.svg"} />
                        <AvatarFallback>PL</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-white font-semibold">{projectData.leader.name}</p>
                        <p className="text-purple-400 text-sm">{projectData.leader.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="milestones" className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-purple-800/30">
            <TabsTrigger
              value="milestones"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <Target className="w-4 h-4 mr-2" />
              Cột mốc
            </TabsTrigger>
            <TabsTrigger value="tasks" className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white">
              <ListTodo className="w-4 h-4 mr-2" />
              Nhiệm vụ
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Nhóm
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Hoạt động
            </TabsTrigger>
          </TabsList>

          <TabsContent value="milestones" className="space-y-4">
            {milestones.map((milestone, index) => (
              <Card
                key={milestone.id}
                className={`${
                  milestone.status === "completed"
                    ? "bg-slate-900/30 border-slate-700/30"
                    : milestone.status === "in-progress"
                      ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30"
                      : "bg-slate-900/50 border-purple-800/30"
                } backdrop-blur-sm`}
              >
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-12 h-12 rounded-full flex items-center justify-center ${
                          milestone.status === "completed"
                            ? "bg-green-900/50 border-2 border-green-500"
                            : milestone.status === "in-progress"
                              ? "bg-purple-900/50 border-2 border-purple-500"
                              : "bg-slate-800 border-2 border-slate-600"
                        }`}
                      >
                        {milestone.status === "completed" ? (
                          <CheckCircle2 className="w-6 h-6 text-green-400" />
                        ) : milestone.status === "in-progress" ? (
                          <Clock className="w-6 h-6 text-purple-400" />
                        ) : (
                          <Circle className="w-6 h-6 text-slate-400" />
                        )}
                      </div>
                      {index < milestones.length - 1 && (
                        <div
                          className={`w-0.5 h-16 ${
                            milestone.status === "completed" ? "bg-green-500/30" : "bg-slate-700/30"
                          }`}
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-white font-semibold text-lg mb-1">{milestone.name}</h3>
                          <p className="text-purple-300 text-sm mb-3">{milestone.description}</p>
                        </div>
                        <Badge
                          className={
                            milestone.status === "completed"
                              ? "bg-green-900/50 text-green-300 border-green-500/30"
                              : milestone.status === "in-progress"
                                ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                                : "bg-slate-800 text-slate-400 border-slate-600/30"
                          }
                        >
                          {milestone.status === "completed"
                            ? "Hoàn thành"
                            : milestone.status === "in-progress"
                              ? "Đang thực hiện"
                              : "Chờ xử lý"}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold">{milestone.credits} tín chỉ</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-400">
                          <Calendar className="w-4 h-4" />
                          <span>Hạn: {milestone.dueDate}</span>
                        </div>
                        {milestone.completedDate && (
                          <div className="flex items-center gap-1 text-green-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Hoàn thành: {milestone.completedDate}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-purple-400">
                          <Users className="w-4 h-4" />
                          <span>{milestone.assignees.join(", ")}</span>
                        </div>
                      </div>

                      {milestone.status === "in-progress" && (
                        <div className="mt-4 flex gap-2">
                          <Button
                            size="sm"
                            className="bg-green-600 hover:bg-green-700 text-white"
                            onClick={() => handleMarkMilestoneComplete(milestone.id)}
                          >
                            Đánh dấu Hoàn thành
                          </Button>
                          <Dialog
                            open={editMilestoneOpen && selectedMilestone?.id === milestone.id}
                            onOpenChange={(open) => {
                              setEditMilestoneOpen(open)
                              if (open) setSelectedMilestone(milestone)
                            }}
                          >
                            <DialogTrigger asChild>
                              <Button
                                size="sm"
                                variant="outline"
                                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                              >
                                Chỉnh sửa
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
                              <DialogHeader>
                                <DialogTitle>Chỉnh sửa Cột mốc</DialogTitle>
                                <DialogDescription className="text-purple-300">
                                  Cập nhật thông tin cột mốc
                                </DialogDescription>
                              </DialogHeader>
                              <div className="space-y-4">
                                <div>
                                  <Label htmlFor="edit-milestone-name">Tên cột mốc</Label>
                                  <Input
                                    id="edit-milestone-name"
                                    defaultValue={milestone.name}
                                    className="bg-slate-800 border-purple-800/30"
                                  />
                                </div>
                                <div>
                                  <Label htmlFor="edit-milestone-desc">Mô tả</Label>
                                  <Textarea
                                    id="edit-milestone-desc"
                                    defaultValue={milestone.description}
                                    className="bg-slate-800 border-purple-800/30"
                                  />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                  <div>
                                    <Label htmlFor="edit-milestone-credits">Tín chỉ</Label>
                                    <Input
                                      id="edit-milestone-credits"
                                      type="number"
                                      defaultValue={milestone.credits}
                                      className="bg-slate-800 border-purple-800/30"
                                    />
                                  </div>
                                  <div>
                                    <Label htmlFor="edit-milestone-due">Hạn chót</Label>
                                    <Input
                                      id="edit-milestone-due"
                                      type="date"
                                      className="bg-slate-800 border-purple-800/30"
                                    />
                                  </div>
                                </div>
                              </div>
                              <DialogFooter>
                                <Button
                                  variant="outline"
                                  onClick={() => setEditMilestoneOpen(false)}
                                  className="border-purple-500 text-purple-300"
                                >
                                  Hủy
                                </Button>
                                <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Lưu thay đổi</Button>
                              </DialogFooter>
                            </DialogContent>
                          </Dialog>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="tasks">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Nhiệm vụ Dự án</CardTitle>
                    <CardDescription className="text-purple-300">Quản lý nhiệm vụ của từng thành viên</CardDescription>
                  </div>
                  <div className="flex items-center gap-2">
                    <Select value={taskFilter} onValueChange={setTaskFilter}>
                      <SelectTrigger className="w-[180px] bg-slate-800 border-purple-800/30 text-white">
                        <Filter className="w-4 h-4 mr-2" />
                        <SelectValue placeholder="Lọc nhiệm vụ" />
                      </SelectTrigger>
                      <SelectContent className="bg-slate-800 border-purple-800/30 text-white">
                        <SelectItem value="all">Tất cả</SelectItem>
                        <SelectItem value="pending">Chờ xử lý</SelectItem>
                        <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                        <SelectItem value="completed">Hoàn thành</SelectItem>
                      </SelectContent>
                    </Select>
                    <Dialog open={addTaskOpen} onOpenChange={setAddTaskOpen}>
                      <DialogTrigger asChild>
                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                          <Plus className="w-4 h-4 mr-2" />
                          Thêm Nhiệm vụ
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
                        <DialogHeader>
                          <DialogTitle>Thêm Nhiệm vụ Mới</DialogTitle>
                          <DialogDescription className="text-purple-300">
                            Tạo nhiệm vụ mới cho thành viên
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <div>
                            <Label htmlFor="task-name">Tên nhiệm vụ</Label>
                            <Input
                              id="task-name"
                              placeholder="Nhập tên nhiệm vụ"
                              className="bg-slate-800 border-purple-800/30"
                            />
                          </div>
                          <div>
                            <Label htmlFor="task-desc">Mô tả</Label>
                            <Textarea
                              id="task-desc"
                              placeholder="Mô tả chi tiết nhiệm vụ"
                              className="bg-slate-800 border-purple-800/30"
                            />
                          </div>
                          <div>
                            <Label htmlFor="task-milestone">Cột mốc</Label>
                            <Select>
                              <SelectTrigger className="bg-slate-800 border-purple-800/30">
                                <SelectValue placeholder="Chọn cột mốc" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-purple-800/30 text-white">
                                {milestones.map((m) => (
                                  <SelectItem key={m.id} value={m.id.toString()}>
                                    {m.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="task-assignee">Giao cho</Label>
                            <Select>
                              <SelectTrigger className="bg-slate-800 border-purple-800/30">
                                <SelectValue placeholder="Chọn thành viên" />
                              </SelectTrigger>
                              <SelectContent className="bg-slate-800 border-purple-800/30 text-white">
                                {projectData.team.map((member) => (
                                  <SelectItem key={member.id} value={member.name}>
                                    {member.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="task-credits">Tín chỉ</Label>
                              <Input
                                id="task-credits"
                                type="number"
                                placeholder="0"
                                className="bg-slate-800 border-purple-800/30"
                              />
                            </div>
                            <div>
                              <Label htmlFor="task-due">Hạn chót</Label>
                              <Input id="task-due" type="date" className="bg-slate-800 border-purple-800/30" />
                            </div>
                          </div>
                        </div>
                        <DialogFooter>
                          <Button
                            variant="outline"
                            onClick={() => setAddTaskOpen(false)}
                            className="border-purple-500 text-purple-300"
                          >
                            Hủy
                          </Button>
                          <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Tạo Nhiệm vụ</Button>
                        </DialogFooter>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {filteredTasks.map((task) => {
                    const milestone = milestones.find((m) => m.id === task.milestoneId)
                    return (
                      <div
                        key={task.id}
                        className={`p-4 rounded-lg border ${
                          task.status === "completed"
                            ? "bg-slate-800/30 border-slate-700/30"
                            : task.status === "in-progress"
                              ? "bg-gradient-to-r from-purple-900/20 to-pink-900/20 border-purple-500/30"
                              : "bg-slate-900/30 border-purple-800/20"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <Checkbox
                            checked={task.status === "completed"}
                            onCheckedChange={() => handleMarkTaskComplete(task.id)}
                            className="mt-1"
                          />
                          <div className="flex-1">
                            <div className="flex items-start justify-between mb-2">
                              <div>
                                <h4
                                  className={`font-semibold mb-1 ${task.status === "completed" ? "text-slate-400 line-through" : "text-white"}`}
                                >
                                  {task.name}
                                </h4>
                                <p className="text-purple-300 text-sm mb-2">{task.description}</p>
                                <div className="flex flex-wrap items-center gap-3 text-xs">
                                  <Badge variant="outline" className="border-purple-500/30 text-purple-300">
                                    {milestone?.name}
                                  </Badge>
                                  <span className="flex items-center gap-1 text-purple-400">
                                    <Users className="w-3 h-3" />
                                    {task.assignedTo}
                                  </span>
                                  <span className="flex items-center gap-1 text-purple-400">
                                    <Calendar className="w-3 h-3" />
                                    Hạn: {task.dueDate}
                                  </span>
                                  {task.completedDate && (
                                    <span className="flex items-center gap-1 text-green-400">
                                      <CheckCircle2 className="w-3 h-3" />
                                      Hoàn thành: {task.completedDate}
                                    </span>
                                  )}
                                  <span className="flex items-center gap-1 text-yellow-400">
                                    <Zap className="w-3 h-3" />
                                    {task.credits} tín chỉ
                                  </span>
                                </div>
                              </div>
                              <div className="flex items-center gap-2">
                                <Badge
                                  className={
                                    task.status === "completed"
                                      ? "bg-green-900/50 text-green-300 border-green-500/30"
                                      : task.status === "in-progress"
                                        ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                                        : "bg-slate-800 text-slate-400 border-slate-600/30"
                                  }
                                >
                                  {task.status === "completed"
                                    ? "Hoàn thành"
                                    : task.status === "in-progress"
                                      ? "Đang làm"
                                      : "Chờ"}
                                </Badge>
                                {task.status !== "completed" && (
                                  <Dialog
                                    open={editTaskOpen && selectedTask?.id === task.id}
                                    onOpenChange={(open) => {
                                      setEditTaskOpen(open)
                                      if (open) setSelectedTask(task)
                                    }}
                                  >
                                    <DialogTrigger asChild>
                                      <Button
                                        size="sm"
                                        variant="ghost"
                                        className="h-8 w-8 p-0 text-purple-300 hover:text-white hover:bg-purple-900/30"
                                      >
                                        <Edit className="w-4 h-4" />
                                      </Button>
                                    </DialogTrigger>
                                    <DialogContent className="bg-slate-900 border-purple-800/30 text-white">
                                      <DialogHeader>
                                        <DialogTitle>Chỉnh sửa Nhiệm vụ</DialogTitle>
                                        <DialogDescription className="text-purple-300">
                                          Cập nhật thông tin nhiệm vụ
                                        </DialogDescription>
                                      </DialogHeader>
                                      <div className="space-y-4">
                                        <div>
                                          <Label htmlFor="edit-task-name">Tên nhiệm vụ</Label>
                                          <Input
                                            id="edit-task-name"
                                            defaultValue={task.name}
                                            className="bg-slate-800 border-purple-800/30"
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-task-desc">Mô tả</Label>
                                          <Textarea
                                            id="edit-task-desc"
                                            defaultValue={task.description}
                                            className="bg-slate-800 border-purple-800/30"
                                          />
                                        </div>
                                        <div>
                                          <Label htmlFor="edit-task-status">Trạng thái</Label>
                                          <Select defaultValue={task.status}>
                                            <SelectTrigger className="bg-slate-800 border-purple-800/30">
                                              <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent className="bg-slate-800 border-purple-800/30 text-white">
                                              <SelectItem value="pending">Chờ xử lý</SelectItem>
                                              <SelectItem value="in-progress">Đang thực hiện</SelectItem>
                                              <SelectItem value="completed">Hoàn thành</SelectItem>
                                            </SelectContent>
                                          </Select>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4">
                                          <div>
                                            <Label htmlFor="edit-task-credits">Tín chỉ</Label>
                                            <Input
                                              id="edit-task-credits"
                                              type="number"
                                              defaultValue={task.credits}
                                              className="bg-slate-800 border-purple-800/30"
                                            />
                                          </div>
                                          <div>
                                            <Label htmlFor="edit-task-due">Hạn chót</Label>
                                            <Input
                                              id="edit-task-due"
                                              type="date"
                                              className="bg-slate-800 border-purple-800/30"
                                            />
                                          </div>
                                        </div>
                                      </div>
                                      <DialogFooter>
                                        <Button
                                          variant="outline"
                                          onClick={() => setEditTaskOpen(false)}
                                          className="border-purple-500 text-purple-300"
                                        >
                                          Hủy
                                        </Button>
                                        <Button className="bg-gradient-to-r from-purple-600 to-pink-600">
                                          Lưu thay đổi
                                        </Button>
                                      </DialogFooter>
                                    </DialogContent>
                                  </Dialog>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )
                  })}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Thành viên Nhóm</CardTitle>
                <CardDescription className="text-purple-300">Phân phối tín chỉ và phân tích đóng góp</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {projectData.team.map((member) => (
                    <div
                      key={member.id}
                      className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-lg border border-purple-800/30"
                    >
                      <Avatar className="w-14 h-14 border-2 border-purple-500">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <p className="text-purple-400 text-sm">{member.role}</p>
                      </div>
                      <div className="flex items-center gap-6">
                        <div className="text-center">
                          <p className="text-white font-bold text-lg flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            {member.credits}
                          </p>
                          <p className="text-purple-400 text-xs">Tín chỉ Kiếm được</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold text-lg">{member.contributions}%</p>
                          <p className="text-purple-400 text-xs">Đóng góp</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Trao Tín chỉ
                      </Button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Hoạt động Dự án</CardTitle>
                <CardDescription className="text-purple-300">Cập nhật và thay đổi gần đây</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityLog.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 pb-4 border-b border-purple-800/30 last:border-0 last:pb-0"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === "milestone"
                            ? "bg-purple-900/30 text-purple-400"
                            : activity.type === "credit"
                              ? "bg-yellow-900/30 text-yellow-400"
                              : activity.type === "task"
                                ? "bg-blue-900/30 text-blue-400"
                                : "bg-green-900/30 text-green-400"
                        }`}
                      >
                        {activity.type === "milestone" && <Target className="w-5 h-5" />}
                        {activity.type === "credit" && <Zap className="w-5 h-5" />}
                        {activity.type === "task" && <ListTodo className="w-5 h-5" />}
                        {activity.type === "team" && <Users className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-white mb-1">{activity.message}</p>
                        <div className="flex items-center gap-3 text-sm text-purple-400">
                          <span>{activity.user}</span>
                          <span>•</span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {activity.date}
                          </span>
                          {activity.credits && (
                            <>
                              <span>•</span>
                              <span className="flex items-center gap-1 text-yellow-400">
                                <Zap className="w-3 h-3" />
                                {activity.credits} tín chỉ
                              </span>
                            </>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
