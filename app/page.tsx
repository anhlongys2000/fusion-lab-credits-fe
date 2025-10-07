"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Zap, Users, Award, Target } from "lucide-react"
import { UserNav } from "@/components/user-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FusionLab Credits</h1>
              <p className="text-xs text-purple-300">Phòng Lab Đổi Mới SE</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Bảng Điều Khiển
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Bảng Xếp Hạng
              </Button>
            </Link>
            {/* <Link href="/admin">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Quản Trị
              </Button>
            </Link> */}
          </nav>
          <UserNav />

        </div>
      </header>

      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>Hệ Thống Quản Lý Dự Án Gamification</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Nâng Cấp Hành Trình Phát Triển Game Của Bạn
          </h2>
          <p className="text-xl text-purple-200 text-balance max-w-2xl mx-auto">
            Theo dõi dự án, kiếm tín chỉ, mở khóa thành tựu và cạnh tranh với đội nhóm trong hệ thống quản lý cách mạng
            của Fusion Game Lab.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Bắt Đầu Ngay
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Xem Bảng Xếp Hạng
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">24</p>
                  <p className="text-sm text-purple-300">Thành Viên Hoạt Động</p>
                </div>
                <Users className="w-8 h-8 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">8</p>
                  <p className="text-sm text-purple-300">Dự Án Đang Chạy</p>
                </div>
                <Target className="w-8 h-8 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">15.2K</p>
                  <p className="text-sm text-purple-300">Tín Chỉ Đã Phân Phối</p>
                </div>
                <Zap className="w-8 h-8 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">3</p>
                  <p className="text-sm text-purple-300">Game Đã Phát Hành</p>
                </div>
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">Cách Hoạt Động</h3>
          <p className="text-purple-300 text-lg">Hệ thống minh bạch và tạo động lực cho mọi người</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Tham Gia Dự Án</CardTitle>
              <CardDescription className="text-purple-300">
                Đăng ký học kỳ và tham gia các dự án phát triển game thú vị cùng đội nhóm của bạn
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Kiếm Tín Chỉ</CardTitle>
              <CardDescription className="text-purple-300">
                Hoàn thành cột mốc, ra mắt demo và phát hành game để kiếm tín chỉ dựa trên thành tích
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Mở Khóa Phần Thưởng</CardTitle>
              <CardDescription className="text-purple-300">
                Đổi tín chỉ lấy tiền mặt, dịch vụ hoặc cạnh tranh trên bảng xếp hạng để nhận huy hiệu và thành tựu
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="py-12 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Sẵn Sàng Bắt Đầu Hành Trình?</h3>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Tham gia Fusion Game Lab và trở thành một phần của hệ sinh thái đổi mới nơi đóng góp của bạn được công
              nhận và khen thưởng.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Truy Cập Bảng Điều Khiển
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      <footer className="border-t border-purple-800/30 bg-slate-950/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-purple-300 text-sm">
          <p>&copy; 2025 Hệ Thống FusionLab Credits - Phòng Lab Đổi Mới SE. Bảo lưu mọi quyền.</p>
        </div>
      </footer>
    </div>
  )
}
