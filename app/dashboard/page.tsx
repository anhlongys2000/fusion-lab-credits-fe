import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Zap, Trophy, Target, TrendingUp, Award, Star, Calendar, ArrowRight, Crown, Flame, Gift } from "lucide-react"
import Link from "next/link"
import { UserNav } from "@/components/user-nav"

// Mock data
const memberData = {
  name: "Nguyen Van A",
  email: "nguyenvana@example.com",
  avatar: "/student-avatar.png",
  role: "Developer",
  semester: "Spring 2025",
  totalCredits: 2450,
  availableCredits: 1850,
  redeemedCredits: 600,
  rank: 3,
  level: 12,
  nextLevelCredits: 2800,
  streak: 15,
}

const projects = [
  {
    id: 1,
    name: "Dragon Quest RPG",
    role: "Lead Developer",
    status: "active",
    progress: 75,
    credits: 850,
    milestones: { completed: 6, total: 8 },
    team: 5,
  },
  {
    id: 2,
    name: "Puzzle Master",
    role: "UI Developer",
    status: "active",
    progress: 45,
    credits: 420,
    milestones: { completed: 3, total: 7 },
    team: 4,
  },
  {
    id: 3,
    name: "Space Shooter",
    role: "Developer",
    status: "completed",
    progress: 100,
    credits: 680,
    milestones: { completed: 5, total: 5 },
    team: 6,
  },
]

const achievements = [
  { id: 1, name: "First Blood", description: "Complete your first milestone", icon: "🎯", unlocked: true },
  { id: 2, name: "Team Player", description: "Collaborate on 3 projects", icon: "🤝", unlocked: true },
  { id: 3, name: "Speed Demon", description: "Complete a milestone in 1 week", icon: "⚡", unlocked: true },
  { id: 4, name: "Release Master", description: "Ship a game to production", icon: "🚀", unlocked: true },
  { id: 5, name: "Credit King", description: "Earn 5000 total credits", icon: "👑", unlocked: false },
  {
    id: 6,
    name: "Perfectionist",
    description: "Complete 10 milestones with 100% quality",
    icon: "💎",
    unlocked: false,
  },
]

const recentActivity = [
  { id: 1, type: "credit", message: "Earned 150 credits from Dragon Quest RPG milestone", date: "2 hours ago" },
  { id: 2, type: "achievement", message: 'Unlocked "Release Master" achievement', date: "1 day ago" },
  { id: 3, type: "project", message: "Joined Puzzle Master project", date: "3 days ago" },
  { id: 4, type: "credit", message: "Redeemed 200 credits for cash reward", date: "5 days ago" },
]

export default function DashboardPage() {
  const levelProgress = ((memberData.totalCredits % 200) / 200) * 100

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FusionLab Credits</h1>
              <p className="text-xs text-purple-300">Member Dashboard</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Leaderboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Admin
              </Button>
            </Link>
            <UserNav />
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Profile Header */}
        <div className="mb-8">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <Avatar className="w-24 h-24 border-4 border-purple-500">
                  <AvatarImage src={memberData.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">NA</AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-3xl font-bold text-white">{memberData.name}</h2>
                    <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                      Level {memberData.level}
                    </Badge>
                    {memberData.rank <= 3 && (
                      <Badge className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white border-0">
                        <Crown className="w-3 h-3 mr-1" />
                        Rank #{memberData.rank}
                      </Badge>
                    )}
                  </div>
                  <p className="text-purple-300 mb-4">
                    {memberData.role} • {memberData.semester}
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">Progress to Level {memberData.level + 1}</span>
                      <span className="text-white font-semibold">
                        {memberData.totalCredits} / {memberData.nextLevelCredits} credits
                      </span>
                    </div>
                    <Progress value={levelProgress} className="h-2 bg-slate-800" />
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="text-center px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-lg">
                    <Flame className="w-6 h-6 text-orange-400 mx-auto mb-1" />
                    <p className="text-2xl font-bold text-white">{memberData.streak}</p>
                    <p className="text-xs text-purple-300">Day Streak</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Credits Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Zap className="w-5 h-5 text-yellow-400" />
                Total Credits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-white mb-2">{memberData.totalCredits.toLocaleString()}</p>
              <p className="text-sm text-purple-300">Lifetime earnings</p>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-purple-400" />
                Available Credits
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-white mb-2">{memberData.availableCredits.toLocaleString()}</p>
              <Button
                size="sm"
                className="mt-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                <Gift className="w-4 h-4 mr-2" />
                Redeem
              </Button>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-green-400" />
                Redeemed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold text-white mb-2">{memberData.redeemedCredits.toLocaleString()}</p>
              <p className="text-sm text-purple-300">Total value claimed</p>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-purple-800/30">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              My Projects
            </TabsTrigger>
            <TabsTrigger
              value="achievements"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              Achievements
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            {projects.map((project) => (
              <Card key={project.id} className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-white text-xl mb-2">{project.name}</CardTitle>
                      <CardDescription className="text-purple-300">
                        {project.role} • {project.team} members
                      </CardDescription>
                    </div>
                    <Badge
                      variant={project.status === "active" ? "default" : "secondary"}
                      className={
                        project.status === "active"
                          ? "bg-green-900/50 text-green-300 border-green-500/30"
                          : "bg-slate-800 text-slate-300"
                      }
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-purple-300">Project Progress</span>
                      <span className="text-white font-semibold">{project.progress}%</span>
                    </div>
                    <Progress value={project.progress} className="h-2 bg-slate-800" />
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm">
                      <div className="flex items-center gap-2 text-purple-300">
                        <Target className="w-4 h-4" />
                        <span>
                          {project.milestones.completed}/{project.milestones.total} milestones
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-yellow-300">
                        <Zap className="w-4 h-4" />
                        <span className="font-semibold">{project.credits} credits earned</span>
                      </div>
                    </div>
                    <Link href={`/projects/${project.id}`}>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-purple-300 hover:text-white hover:bg-purple-900/30"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {achievements.map((achievement) => (
                <Card
                  key={achievement.id}
                  className={`${
                    achievement.unlocked
                      ? "bg-gradient-to-br from-purple-900/50 to-pink-900/50 border-purple-500/30"
                      : "bg-slate-900/30 border-slate-800/30"
                  } backdrop-blur-sm`}
                >
                  <CardContent className="pt-6 text-center">
                    <div className={`text-5xl mb-3 ${achievement.unlocked ? "grayscale-0" : "grayscale opacity-40"}`}>
                      {achievement.icon}
                    </div>
                    <h3 className={`font-bold mb-2 ${achievement.unlocked ? "text-white" : "text-slate-500"}`}>
                      {achievement.name}
                    </h3>
                    <p className={`text-sm ${achievement.unlocked ? "text-purple-300" : "text-slate-600"}`}>
                      {achievement.description}
                    </p>
                    {achievement.unlocked && (
                      <Badge className="mt-3 bg-green-900/50 text-green-300 border-green-500/30">
                        <Award className="w-3 h-3 mr-1" />
                        Unlocked
                      </Badge>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Activity Tab */}
          <TabsContent value="activity">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Recent Activity</CardTitle>
                <CardDescription className="text-purple-300">Your latest actions and achievements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity) => (
                    <div
                      key={activity.id}
                      className="flex items-start gap-4 pb-4 border-b border-purple-800/30 last:border-0 last:pb-0"
                    >
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          activity.type === "credit"
                            ? "bg-yellow-900/30 text-yellow-400"
                            : activity.type === "achievement"
                              ? "bg-purple-900/30 text-purple-400"
                              : "bg-blue-900/30 text-blue-400"
                        }`}
                      >
                        {activity.type === "credit" && <Zap className="w-5 h-5" />}
                        {activity.type === "achievement" && <Trophy className="w-5 h-5" />}
                        {activity.type === "project" && <Target className="w-5 h-5" />}
                      </div>
                      <div className="flex-1">
                        <p className="text-white mb-1">{activity.message}</p>
                        <p className="text-sm text-purple-400 flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {activity.date}
                        </p>
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
