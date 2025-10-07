import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail } from "lucide-react"

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
          Cài Đặt Hệ Thống
        </h1>
        <p className="text-muted-foreground mt-2">Quản lý cấu hình và tùy chỉnh hệ thống</p>
      </div>

      <Tabs defaultValue="general" className="space-y-4">
        <TabsList>
          <TabsTrigger value="general">Chung</TabsTrigger>
          <TabsTrigger value="credits">Credits</TabsTrigger>
          <TabsTrigger value="notifications">Thông Báo</TabsTrigger>
          <TabsTrigger value="security">Bảo Mật</TabsTrigger>
        </TabsList>

        <TabsContent value="general" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Thông Tin Hệ Thống</CardTitle>
              <CardDescription>Cấu hình thông tin cơ bản của FusionLab Credits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="system-name">Tên Hệ Thống</Label>
                <Input id="system-name" defaultValue="FusionLab Credits System" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Mô Tả</Label>
                <Textarea
                  id="description"
                  defaultValue="Hệ thống quản lý credits và gamification cho Fusion Game Lab"
                  rows={3}
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="timezone">Múi Giờ</Label>
                <Select defaultValue="asia-ho-chi-minh">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="asia-ho-chi-minh">Asia/Ho Chi Minh (GMT+7)</SelectItem>
                    <SelectItem value="utc">UTC (GMT+0)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="language">Ngôn Ngữ</Label>
                <Select defaultValue="vi">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="vi">Tiếng Việt</SelectItem>
                    <SelectItem value="en">English</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Lưu Thay Đổi</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Tùy Chỉnh Giao Diện</CardTitle>
              <CardDescription>Cấu hình màu sắc và theme của hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Chế Độ Tối</Label>
                  <p className="text-sm text-muted-foreground">Bật chế độ tối cho giao diện</p>
                </div>
                <Switch />
              </div>
              <div className="grid gap-2">
                <Label>Màu Chủ Đạo</Label>
                <div className="flex gap-2">
                  <div className="h-10 w-10 rounded-lg bg-purple-600 border-2 border-purple-600 cursor-pointer" />
                  <div className="h-10 w-10 rounded-lg bg-blue-600 border-2 border-transparent hover:border-blue-600 cursor-pointer" />
                  <div className="h-10 w-10 rounded-lg bg-green-600 border-2 border-transparent hover:border-green-600 cursor-pointer" />
                  <div className="h-10 w-10 rounded-lg bg-orange-600 border-2 border-transparent hover:border-orange-600 cursor-pointer" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="credits" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cấu Hình Credits</CardTitle>
              <CardDescription>Thiết lập quy tắc và giới hạn cho hệ thống credits</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="initial-credits">Credits Ban Đầu</Label>
                <Input id="initial-credits" type="number" defaultValue="100" />
                <p className="text-sm text-muted-foreground">Số credits mà thành viên mới nhận được</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="max-credits">Giới Hạn Credits</Label>
                <Input id="max-credits" type="number" defaultValue="10000" />
                <p className="text-sm text-muted-foreground">Số credits tối đa một thành viên có thể có</p>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="task-credits">Credits Mỗi Task</Label>
                <Input id="task-credits" type="number" defaultValue="50" />
                <p className="text-sm text-muted-foreground">Credits mặc định cho mỗi task hoàn thành</p>
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tự Động Phê Duyệt</Label>
                  <p className="text-sm text-muted-foreground">Tự động phê duyệt credits khi task hoàn thành</p>
                </div>
                <Switch />
              </div>
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600">Lưu Cấu Hình</Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Hệ Số Nhân Credits</CardTitle>
              <CardDescription>Cấu hình hệ số nhân credits theo độ khó</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Dễ</Label>
                    <p className="text-sm text-muted-foreground">Hệ số: 1.0x</p>
                  </div>
                  <Input type="number" defaultValue="1.0" className="w-24" step="0.1" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Trung Bình</Label>
                    <p className="text-sm text-muted-foreground">Hệ số: 1.5x</p>
                  </div>
                  <Input type="number" defaultValue="1.5" className="w-24" step="0.1" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Khó</Label>
                    <p className="text-sm text-muted-foreground">Hệ số: 2.0x</p>
                  </div>
                  <Input type="number" defaultValue="2.0" className="w-24" step="0.1" />
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <Label>Rất Khó</Label>
                    <p className="text-sm text-muted-foreground">Hệ số: 3.0x</p>
                  </div>
                  <Input type="number" defaultValue="3.0" className="w-24" step="0.1" />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Cài Đặt Thông Báo</CardTitle>
              <CardDescription>Quản lý các loại thông báo trong hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Task Mới</Label>
                  <p className="text-sm text-muted-foreground">Thông báo khi có task mới được giao</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Credits Nhận Được</Label>
                  <p className="text-sm text-muted-foreground">Thông báo khi nhận được credits</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Thành Tựu Mở Khóa</Label>
                  <p className="text-sm text-muted-foreground">Thông báo khi mở khóa thành tựu mới</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Deadline Sắp Tới</Label>
                  <p className="text-sm text-muted-foreground">Nhắc nhở trước deadline 24 giờ</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Báo Cáo Tuần</Label>
                  <p className="text-sm text-muted-foreground">Gửi báo cáo tổng kết hàng tuần</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Email Thông Báo</CardTitle>
              <CardDescription>Cấu hình email cho thông báo hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="email-from">Email Gửi</Label>
                <Input id="email-from" type="email" defaultValue="noreply@fusionlab.com" />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email-name">Tên Hiển Thị</Label>
                <Input id="email-name" defaultValue="FusionLab Credits" />
              </div>
              <Button variant="outline">
                <Mail className="mr-2 h-4 w-4" />
                Gửi Email Test
              </Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Bảo Mật</CardTitle>
              <CardDescription>Cấu hình các tùy chọn bảo mật hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Xác Thực 2 Yếu Tố</Label>
                  <p className="text-sm text-muted-foreground">Yêu cầu 2FA cho admin</p>
                </div>
                <Switch />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Tự Động Đăng Xuất</Label>
                  <p className="text-sm text-muted-foreground">Đăng xuất sau 30 phút không hoạt động</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password-policy">Chính Sách Mật Khẩu</Label>
                <Select defaultValue="medium">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="low">Thấp (6+ ký tự)</SelectItem>
                    <SelectItem value="medium">Trung Bình (8+ ký tự, chữ và số)</SelectItem>
                    <SelectItem value="high">Cao (10+ ký tự, chữ, số và ký tự đặc biệt)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-2">
                <Label htmlFor="session-timeout">Thời Gian Session</Label>
                <Select defaultValue="30">
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="15">15 phút</SelectItem>
                    <SelectItem value="30">30 phút</SelectItem>
                    <SelectItem value="60">1 giờ</SelectItem>
                    <SelectItem value="120">2 giờ</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Nhật Ký Hoạt Động</CardTitle>
              <CardDescription>Cấu hình ghi log hệ thống</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Ghi Log Đăng Nhập</Label>
                  <p className="text-sm text-muted-foreground">Lưu lại lịch sử đăng nhập</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Ghi Log Thay Đổi Credits</Label>
                  <p className="text-sm text-muted-foreground">Lưu lại mọi thay đổi credits</p>
                </div>
                <Switch defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label>Ghi Log Admin</Label>
                  <p className="text-sm text-muted-foreground">Lưu lại các thao tác của admin</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
