import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Download, Calendar, TrendingUp, Users, Award, DollarSign } from "lucide-react"

const reports = [
  { id: 1, name: "Báo Cáo Credits Tháng 6", type: "Credits", date: "2024-06-30", status: "Hoàn thành", size: "2.4 MB" },
  { id: 2, name: "Hiệu Suất Dự Án Q2", type: "Dự án", date: "2024-06-28", status: "Hoàn thành", size: "3.1 MB" },
  {
    id: 3,
    name: "Hoạt Động Thành Viên Tuần 25",
    type: "Thành viên",
    date: "2024-06-25",
    status: "Hoàn thành",
    size: "1.8 MB",
  },
  {
    id: 4,
    name: "Thành Tựu Mở Khóa Tháng 6",
    type: "Thành tựu",
    date: "2024-06-20",
    status: "Hoàn thành",
    size: "1.2 MB",
  },
  { id: 5, name: "Tổng Quan Hệ Thống Q2", type: "Tổng quan", date: "2024-06-15", status: "Hoàn thành", size: "4.5 MB" },
  { id: 6, name: "Phân Tích Credits Q1", type: "Credits", date: "2024-03-31", status: "Hoàn thành", size: "2.8 MB" },
]

const quickReports = [
  {
    name: "Credits Hiện Tại",
    description: "Tổng quan credits của tất cả thành viên",
    icon: DollarSign,
    color: "text-green-600",
  },
  { name: "Dự Án Đang Chạy", description: "Danh sách và tiến độ các dự án", icon: TrendingUp, color: "text-blue-600" },
  { name: "Thành Viên Hoạt Động", description: "Thống kê hoạt động thành viên", icon: Users, color: "text-purple-600" },
  {
    name: "Thành Tựu Phổ Biến",
    description: "Top thành tựu được mở khóa nhiều nhất",
    icon: Award,
    color: "text-yellow-600",
  },
]

export default function ReportsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            Báo Cáo & Xuất Dữ Liệu
          </h1>
          <p className="text-muted-foreground mt-2">Tạo và tải xuống các báo cáo hệ thống</p>
        </div>
      </div>

      {/* Quick Reports */}
      <div>
        <h2 className="text-lg font-semibold mb-4">Báo Cáo Nhanh</h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {quickReports.map((report, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{report.name}</CardTitle>
                <report.icon className={`h-4 w-4 ${report.color}`} />
              </CardHeader>
              <CardContent>
                <p className="text-xs text-muted-foreground mb-3">{report.description}</p>
                <Button size="sm" variant="outline" className="w-full bg-transparent">
                  <Download className="mr-2 h-3 w-3" />
                  Tải Xuống
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <Select defaultValue="all">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Loại báo cáo" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">Tất cả</SelectItem>
            <SelectItem value="credits">Credits</SelectItem>
            <SelectItem value="projects">Dự án</SelectItem>
            <SelectItem value="members">Thành viên</SelectItem>
            <SelectItem value="achievements">Thành tựu</SelectItem>
          </SelectContent>
        </Select>
        <Select defaultValue="month">
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Thời gian" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="week">Tuần này</SelectItem>
            <SelectItem value="month">Tháng này</SelectItem>
            <SelectItem value="quarter">Quý này</SelectItem>
            <SelectItem value="year">Năm này</SelectItem>
          </SelectContent>
        </Select>
        <Button className="ml-auto bg-gradient-to-r from-purple-600 to-pink-600">
          <FileText className="mr-2 h-4 w-4" />
          Tạo Báo Cáo Mới
        </Button>
      </div>

      {/* Reports Table */}
      <Card>
        <CardHeader>
          <CardTitle>Lịch Sử Báo Cáo</CardTitle>
          <CardDescription>Danh sách các báo cáo đã tạo</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Tên Báo Cáo</TableHead>
                <TableHead>Loại</TableHead>
                <TableHead>Ngày Tạo</TableHead>
                <TableHead>Trạng Thái</TableHead>
                <TableHead>Kích Thước</TableHead>
                <TableHead className="text-right">Thao Tác</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report) => (
                <TableRow key={report.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-gradient-to-br from-purple-100 to-pink-100">
                        <FileText className="h-4 w-4 text-purple-600" />
                      </div>
                      <span className="font-medium">{report.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge variant="outline">{report.type}</Badge>
                  </TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="h-4 w-4" />
                      {report.date}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge className="bg-green-100 text-green-700 border-green-300">{report.status}</Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{report.size}</TableCell>
                  <TableCell className="text-right">
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Tải Xuống
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  )
}
