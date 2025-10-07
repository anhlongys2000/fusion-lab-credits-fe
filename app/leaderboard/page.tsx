import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Trophy, Crown, Medal, Award, Target, Flame, Users } from "lucide-react"
import Link from "next/link"

const topMembers = [
  {
    id: 1,
    rank: 1,
    name: "Lê Văn C",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Lập trình viên Senior",
    totalCredits: 3150,
    projectsCompleted: 3,
    achievements: 12,
    streak: 28,
    level: 15,
  },
  {
    id: 2,
    rank: 2,
    name: "Hoàng Thị E",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Trưởng nhóm Thiết kế",
    totalCredits: 2890,
    projectsCompleted: 2,
    achievements: 10,
    streak: 21,
    level: 14,
  },
  {
    id: 3,
    rank: 3,
    name: "Nguyễn Văn A",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Lập trình viên",
    totalCredits: 2450,
    projectsCompleted: 2,
    achievements: 8,
    streak: 15,
    level: 12,
  },
]

const allMembers = [
  ...topMembers,
  {
    id: 4,
    rank: 4,
    name: "Võ Thị F",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Quản lý Dự án",
    totalCredits: 2120,
    projectsCompleted: 2,
    achievements: 9,
    streak: 12,
    level: 11,
  },
  {
    id: 5,
    rank: 5,
    name: "Phạm Thị D",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Quản lý Dự án",
    totalCredits: 1950,
    projectsCompleted: 1,
    achievements: 7,
    streak: 18,
    level: 10,
  },
  {
    id: 6,
    rank: 6,
    name: "Đỗ Văn G",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Lập trình viên",
    totalCredits: 1880,
    projectsCompleted: 2,
    achievements: 6,
    streak: 9,
    level: 9,
  },
  {
    id: 7,
    rank: 7,
    name: "Trần Thị B",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Thiết kế",
    totalCredits: 1820,
    projectsCompleted: 1,
    achievements: 8,
    streak: 14,
    level: 9,
  },
  {
    id: 8,
    rank: 8,
    name: "Bùi Văn H",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Lập trình viên",
    totalCredits: 1650,
    projectsCompleted: 1,
    achievements: 5,
    streak: 7,
    level: 8,
  },
]

const topProjects = [
  {
    id: 1,
    rank: 1,
    name: "Bắn Súng Không Gian",
    leader: "Lê Văn C",
    totalCredits: 3500,
    members: 6,
    status: "Đã phát hành",
    revenue: "2.500$",
  },
  {
    id: 2,
    rank: 2,
    name: "RPG Nhiệm Vụ Rồng",
    leader: "Nguyễn Văn A",
    totalCredits: 3000,
    members: 5,
    status: "Đang hoạt động",
    revenue: "-",
  },
  {
    id: 3,
    rank: 3,
    name: "Huyền Thoại Đua Xe",
    leader: "Phạm Thị D",
    totalCredits: 2800,
    members: 5,
    status: "Đang hoạt động",
    revenue: "-",
  },
  {
    id: 4,
    rank: 4,
    name: "Bậc Thầy Giải Đố",
    leader: "Trần Thị B",
    totalCredits: 2500,
    members: 4,
    status: "Đang hoạt động",
    revenue: "-",
  },
]

const globalAchievements = [
  {
    id: 1,
    name: "Máu Đầu Tiên",
    description: "Hoàn thành cột mốc đầu tiên của bạn",
    icon: "🎯",
    unlockedBy: 24,
    totalMembers: 24,
    rarity: "phổ biến",
  },
  {
    id: 2,
    name: "Người Đồng Đội",
    description: "Cộng tác trong 3 dự án",
    icon: "🤝",
    unlockedBy: 18,
    totalMembers: 24,
    rarity: "phổ biến",
  },
  {
    id: 3,
    name: "Ác Quỷ Tốc Độ",
    description: "Hoàn thành cột mốc trong 1 tuần",
    icon: "⚡",
    unlockedBy: 15,
    totalMembers: 24,
    rarity: "không phổ biến",
  },
  {
    id: 4,
    name: "Bậc Thầy Phát Hành",
    description: "Phát hành game lên production",
    icon: "🚀",
    unlockedBy: 8,
    totalMembers: 24,
    rarity: "hiếm",
  },
  {
    id: 5,
    name: "Vua Tín Chỉ",
    description: "Kiếm được 5000 tín chỉ tổng cộng",
    icon: "👑",
    unlockedBy: 2,
    totalMembers: 24,
    rarity: "sử thi",
  },
  {
    id: 6,
    name: "Người Hoàn Hảo",
    description: "Hoàn thành 10 cột mốc với chất lượng 100%",
    icon: "💎",
    unlockedBy: 1,
    totalMembers: 24,
    rarity: "huyền thoại",
  },
]

export default function LeaderboardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FusionLab Credits</h1>
              <p className="text-xs text-purple-300">Bảng Xếp Hạng</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Bảng Điều Khiển
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Quản Trị
              </Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-4">
            <Trophy className="w-4 h-4" />
            <span>Mùa Xuân 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Đại Sảnh Danh Vọng</h2>
          <p className="text-xl text-purple-200 max-w-2xl mx-auto">
            Cạnh tranh với đồng nghiệp và leo hạng để trở thành huyền thoại FusionLab
          </p>
        </div>

        {/* Top 3 Podium - keeping structure, updating text */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-5xl mx-auto">
          {/* 2nd Place */}
          <div className="md:order-1 order-2">
            <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-slate-600/30 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24 border-4 border-slate-400">
                    <AvatarImage src={topMembers[1].avatar || "/placeholder.svg"} />
                    <AvatarFallback>2</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-slate-400 to-slate-600 rounded-full flex items-center justify-center border-4 border-slate-950">
                    <Medal className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{topMembers[1].name}</h3>
                <p className="text-sm text-slate-400 mb-4">{topMembers[1].role}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <Zap className="w-5 h-5" />
                    <span className="text-2xl font-bold">{topMembers[1].totalCredits}</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {topMembers[1].projectsCompleted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {topMembers[1].achievements}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      {topMembers[1].streak}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 1st Place */}
          <div className="md:order-2 order-1">
            <Card className="bg-gradient-to-br from-yellow-900/50 to-orange-900/50 border-yellow-500/30 backdrop-blur-sm transform md:scale-110">
              <CardContent className="pt-8 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-28 h-28 border-4 border-yellow-400">
                    <AvatarImage src={topMembers[0].avatar || "/placeholder.svg"} />
                    <AvatarFallback>1</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center border-4 border-slate-950">
                    <Crown className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">{topMembers[0].name}</h3>
                <p className="text-sm text-yellow-300 mb-4">{topMembers[0].role}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <Zap className="w-6 h-6" />
                    <span className="text-3xl font-bold">{topMembers[0].totalCredits}</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-yellow-300">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {topMembers[0].projectsCompleted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {topMembers[0].achievements}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      {topMembers[0].streak}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 3rd Place */}
          <div className="md:order-3 order-3">
            <Card className="bg-gradient-to-br from-orange-900/50 to-amber-900/50 border-orange-600/30 backdrop-blur-sm">
              <CardContent className="pt-8 text-center">
                <div className="relative inline-block mb-4">
                  <Avatar className="w-24 h-24 border-4 border-orange-400">
                    <AvatarImage src={topMembers[2].avatar || "/placeholder.svg"} />
                    <AvatarFallback>3</AvatarFallback>
                  </Avatar>
                  <div className="absolute -top-2 -right-2 w-10 h-10 bg-gradient-to-br from-orange-400 to-amber-600 rounded-full flex items-center justify-center border-4 border-slate-950">
                    <Medal className="w-5 h-5 text-white" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-1">{topMembers[2].name}</h3>
                <p className="text-sm text-orange-400 mb-4">{topMembers[2].role}</p>
                <div className="space-y-2">
                  <div className="flex items-center justify-center gap-2 text-yellow-400">
                    <Zap className="w-5 h-5" />
                    <span className="text-2xl font-bold">{topMembers[2].totalCredits}</span>
                  </div>
                  <div className="flex items-center justify-center gap-4 text-sm text-orange-400">
                    <span className="flex items-center gap-1">
                      <Target className="w-4 h-4" />
                      {topMembers[2].projectsCompleted}
                    </span>
                    <span className="flex items-center gap-1">
                      <Award className="w-4 h-4" />
                      {topMembers[2].achievements}
                    </span>
                    <span className="flex items-center gap-1">
                      <Flame className="w-4 h-4 text-orange-400" />
                      {topMembers[2].streak}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <Tabs defaultValue="members" className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-purple-800/30">
            <TabsTrigger
              value="members"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <Users className="w-4 h-4 mr-2" />
              Thành Viên
            </TabsTrigger>
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <Target className="w-4 h-4 mr-2" />
              Dự Án
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <Award className="w-4 h-4 mr-2" />
              Thành Tựu
            </TabsTrigger>
          </TabsList>

          <TabsContent value="members">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Xếp Hạng Tất Cả Thành Viên</CardTitle>
                <CardDescription className="text-purple-300">Xếp hạng theo tổng tín chỉ kiếm được</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {allMembers.map((member, index) => (
                    <div
                      key={member.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        index < 3
                          ? "bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-purple-500/30"
                          : "bg-slate-800/30 border-slate-700/30"
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-lg">
                        {member.rank <= 3 ? (
                          <Crown
                            className={`w-6 h-6 ${
                              member.rank === 1
                                ? "text-yellow-400"
                                : member.rank === 2
                                  ? "text-slate-400"
                                  : "text-orange-400"
                            }`}
                          />
                        ) : (
                          member.rank
                        )}
                      </div>
                      <Avatar className="w-12 h-12 border-2 border-purple-500">
                        <AvatarImage src={member.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold">{member.name}</h4>
                        <p className="text-sm text-purple-300">{member.role}</p>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="text-white font-bold text-lg">{member.totalCredits}</p>
                          <p className="text-purple-400 text-xs">Tín chỉ</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold">{member.projectsCompleted}</p>
                          <p className="text-purple-400 text-xs">Dự án</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold">{member.achievements}</p>
                          <p className="text-purple-400 text-xs">Thành tựu</p>
                        </div>
                        <div className="text-center">
                          <p className="text-orange-400 font-bold flex items-center gap-1">
                            <Flame className="w-4 h-4" />
                            {member.streak}
                          </p>
                          <p className="text-purple-400 text-xs">Chuỗi</p>
                        </div>
                      </div>
                      <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                        Cấp {member.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="projects">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Dự Án Hàng Đầu</CardTitle>
                <CardDescription className="text-purple-300">Xếp hạng theo tổng tín chỉ được phân bổ</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {topProjects.map((project, index) => (
                    <div
                      key={project.id}
                      className={`flex items-center gap-4 p-4 rounded-lg border ${
                        index === 0
                          ? "bg-gradient-to-r from-yellow-900/30 to-orange-900/30 border-yellow-500/30"
                          : "bg-slate-800/30 border-slate-700/30"
                      }`}
                    >
                      <div className="flex items-center justify-center w-12 h-12 rounded-full bg-slate-800 text-white font-bold text-lg">
                        {project.rank === 1 ? <Trophy className="w-6 h-6 text-yellow-400" /> : project.rank}
                      </div>
                      <div className="flex-1">
                        <h4 className="text-white font-semibold text-lg">{project.name}</h4>
                        <p className="text-sm text-purple-300">Dẫn dắt bởi {project.leader}</p>
                      </div>
                      <div className="flex items-center gap-6 text-sm">
                        <div className="text-center">
                          <p className="text-white font-bold text-lg">{project.totalCredits}</p>
                          <p className="text-purple-400 text-xs">Tín chỉ</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold">{project.members}</p>
                          <p className="text-purple-400 text-xs">Thành viên</p>
                        </div>
                        <div className="text-center">
                          <Badge
                            className={
                              project.status === "Đã phát hành"
                                ? "bg-green-900/50 text-green-300 border-green-500/30"
                                : "bg-blue-900/50 text-blue-300 border-blue-500/30"
                            }
                          >
                            {project.status}
                          </Badge>
                        </div>
                        {project.revenue !== "-" && (
                          <div className="text-center">
                            <p className="text-green-400 font-bold">{project.revenue}</p>
                            <p className="text-purple-400 text-xs">Doanh thu</p>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="achievements">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Thành Tựu Toàn Cầu</CardTitle>
                <CardDescription className="text-purple-300">
                  Xem có bao nhiêu thành viên đã mở khóa mỗi thành tựu
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {globalAchievements.map((achievement) => {
                    const percentage = (achievement.unlockedBy / achievement.totalMembers) * 100
                    return (
                      <div
                        key={achievement.id}
                        className={`p-4 rounded-lg border ${
                          achievement.rarity === "huyền thoại"
                            ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30"
                            : achievement.rarity === "sử thi"
                              ? "bg-gradient-to-br from-purple-900/50 to-blue-900/50 border-purple-500/20"
                              : achievement.rarity === "hiếm"
                                ? "bg-gradient-to-br from-blue-900/30 to-cyan-900/30 border-blue-500/20"
                                : "bg-slate-800/30 border-slate-700/30"
                        }`}
                      >
                        <div className="flex items-start gap-4">
                          <div className="text-5xl">{achievement.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <h4 className="text-white font-semibold">{achievement.name}</h4>
                              <Badge
                                className={
                                  achievement.rarity === "huyền thoại"
                                    ? "bg-purple-600 text-white border-0"
                                    : achievement.rarity === "sử thi"
                                      ? "bg-purple-700 text-white border-0"
                                      : achievement.rarity === "hiếm"
                                        ? "bg-blue-600 text-white border-0"
                                        : achievement.rarity === "không phổ biến"
                                          ? "bg-green-600 text-white border-0"
                                          : "bg-slate-600 text-white border-0"
                                }
                              >
                                {achievement.rarity}
                              </Badge>
                            </div>
                            <p className="text-sm text-purple-300 mb-3">{achievement.description}</p>
                            <div className="space-y-2">
                              <div className="flex items-center justify-between text-sm">
                                <span className="text-purple-400">
                                  {achievement.unlockedBy} / {achievement.totalMembers} thành viên
                                </span>
                                <span className="text-white font-semibold">{percentage.toFixed(0)}%</span>
                              </div>
                              <div className="w-full bg-slate-800 rounded-full h-2">
                                <div
                                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                                  style={{ width: `${percentage}%` }}
                                />
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
        </Tabs>
      </div>
    </div>
  )
}
