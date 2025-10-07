import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, TrendingUp, Users, Award } from "lucide-react"
import {
  Bar,
  BarChart,
  Line,
  LineChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Area,
  AreaChart,
} from "recharts"

const creditTrendData = [
  { month: "T1", earned: 450, spent: 320, total: 1200 },
  { month: "T2", earned: 520, spent: 380, total: 1340 },
  { month: "T3", earned: 680, spent: 450, total: 1570 },
  { month: "T4", earned: 590, spent: 410, total: 1750 },
  { month: "T5", earned: 720, spent: 520, total: 1950 },
  { month: "T6", earned: 850, spent: 600, total: 2200 },
]

const projectPerformanceData = [
  { name: "Game RPG", completion: 85, credits: 450, members: 5 },
  { name: "Mobile Puzzle", completion: 92, credits: 380, members: 4 },
  { name: "VR Experience", completion: 68, credits: 520, members: 6 },
  { name: "AR Education", completion: 75, credits: 410, members: 5 },
  { name: "Multiplayer FPS", completion: 58, credits: 680, members: 8 },
]

const memberActivityData = [
  { week: "Tuần 1", active: 28, inactive: 4 },
  { week: "Tuần 2", active: 30, inactive: 2 },
  { week: "Tuần 3", active: 27, inactive: 5 },
  { week: "Tuần 4", active: 32, inactive: 0 },
]

export default function AnalyticsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Phân Tích & Báo Cáo
        </h1>
        <p className="text-muted-foreground mt-2">Theo dõi xu hướng và hiệu suất của hệ thống</p>
      </div>

      {/* Key Metrics */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tổng Credits Phân Phối</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,200</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+12.5%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Tỷ Lệ Hoàn Thành</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75.6%</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+3.2%</span> so với tháng trước
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thành Viên Hoạt Động</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">32/32</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">100%</span> tham gia tuần này
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Thành Tựu Mở Khóa</CardTitle>
            <Award className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">156</div>
            <p className="text-xs text-muted-foreground">
              <span className="text-green-600">+18</span> trong tuần này
            </p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="credits" className="space-y-4">
        <TabsList>
          <TabsTrigger value="credits">Xu Hướng Credits</TabsTrigger>
          <TabsTrigger value="projects">Hiệu Suất Dự Án</TabsTrigger>
          <TabsTrigger value="members">Hoạt Động Thành Viên</TabsTrigger>
        </TabsList>

        <TabsContent value="credits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Xu Hướng Credits Theo Tháng</CardTitle>
              <CardDescription>Theo dõi credits kiếm được, chi tiêu và tổng số dư</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <ResponsiveContainer width="100%" height={350}>
                <AreaChart data={creditTrendData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Area
                    type="monotone"
                    dataKey="total"
                    stackId="1"
                    stroke="#8b5cf6"
                    fill="#8b5cf6"
                    fillOpacity={0.6}
                    name="Tổng Credits"
                  />
                  <Area
                    type="monotone"
                    dataKey="earned"
                    stackId="2"
                    stroke="#10b981"
                    fill="#10b981"
                    fillOpacity={0.6}
                    name="Kiếm Được"
                  />
                  <Area
                    type="monotone"
                    dataKey="spent"
                    stackId="3"
                    stroke="#ef4444"
                    fill="#ef4444"
                    fillOpacity={0.6}
                    name="Chi Tiêu"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hiệu Suất Dự Án</CardTitle>
              <CardDescription>So sánh tỷ lệ hoàn thành và credits của các dự án</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={projectPerformanceData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="completion" fill="#8b5cf6" name="Hoàn Thành (%)" />
                  <Bar yAxisId="right" dataKey="credits" fill="#ec4899" name="Credits" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="members" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hoạt Động Thành Viên Theo Tuần</CardTitle>
              <CardDescription>Số lượng thành viên hoạt động và không hoạt động</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <ResponsiveContainer width="100%" height={350}>
                <LineChart data={memberActivityData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="week" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="active" stroke="#10b981" strokeWidth={2} name="Hoạt Động" />
                  <Line type="monotone" dataKey="inactive" stroke="#ef4444" strokeWidth={2} name="Không Hoạt Động" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
