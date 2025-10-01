import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { UserNav } from "@/components/user-nav"
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
} from "lucide-react"
import Link from "next/link"

// Mock data - in real app, this would come from params
const projectData = {
  id: 1,
  name: "Dragon Quest RPG",
  description:
    "An epic fantasy RPG with turn-based combat, character progression, and an immersive storyline. Players embark on a quest to save the kingdom from ancient evil.",
  leader: {
    name: "Nguyen Van A",
    avatar: "/placeholder.svg?height=100&width=100",
    role: "Project Lead",
  },
  semester: "Spring 2025",
  status: "active",
  startDate: "2025-01-05",
  expectedEndDate: "2025-05-15",
  progress: 75,
  creditsAllocated: 3000,
  creditsDistributed: 2250,
  creditsRemaining: 750,
  team: [
    {
      id: 1,
      name: "Nguyen Van A",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Lead Developer",
      credits: 850,
      contributions: 45,
    },
    {
      id: 2,
      name: "Tran Thi B",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "UI/UX Designer",
      credits: 420,
      contributions: 28,
    },
    {
      id: 3,
      name: "Le Van C",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Backend Developer",
      credits: 520,
      contributions: 32,
    },
    {
      id: 4,
      name: "Pham Thi D",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Game Designer",
      credits: 380,
      contributions: 25,
    },
    {
      id: 5,
      name: "Hoang Van E",
      avatar: "/placeholder.svg?height=100&width=100",
      role: "Sound Designer",
      credits: 80,
      contributions: 8,
    },
  ],
}

const milestones = [
  {
    id: 1,
    name: "Project Setup & Planning",
    description: "Initialize project structure, define requirements, and create development roadmap",
    status: "completed",
    credits: 200,
    dueDate: "2025-01-15",
    completedDate: "2025-01-14",
    assignees: ["Nguyen Van A", "Pham Thi D"],
  },
  {
    id: 2,
    name: "Core Game Mechanics",
    description: "Implement basic movement, combat system, and character controls",
    status: "completed",
    credits: 400,
    dueDate: "2025-02-01",
    completedDate: "2025-01-30",
    assignees: ["Nguyen Van A", "Le Van C"],
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Design and implement game menus, HUD, inventory system, and character screens",
    status: "completed",
    credits: 350,
    dueDate: "2025-02-15",
    completedDate: "2025-02-14",
    assignees: ["Tran Thi B"],
  },
  {
    id: 4,
    name: "Character Progression System",
    description: "Implement leveling, skill trees, equipment system, and character stats",
    status: "completed",
    credits: 450,
    dueDate: "2025-03-01",
    completedDate: "2025-02-28",
    assignees: ["Nguyen Van A", "Le Van C"],
  },
  {
    id: 5,
    name: "Story & Quest System",
    description: "Create main storyline, side quests, dialogue system, and NPC interactions",
    status: "completed",
    credits: 400,
    dueDate: "2025-03-15",
    completedDate: "2025-03-13",
    assignees: ["Pham Thi D", "Nguyen Van A"],
  },
  {
    id: 6,
    name: "Boss Battle System",
    description: "Design and implement challenging boss encounters with unique mechanics",
    status: "completed",
    credits: 450,
    dueDate: "2025-04-01",
    completedDate: "2025-03-30",
    assignees: ["Nguyen Van A", "Pham Thi D"],
  },
  {
    id: 7,
    name: "Audio & Sound Effects",
    description: "Add background music, sound effects, and voice acting for key characters",
    status: "in-progress",
    credits: 300,
    dueDate: "2025-04-15",
    completedDate: null,
    assignees: ["Hoang Van E"],
  },
  {
    id: 8,
    name: "Polish & Release",
    description: "Bug fixes, performance optimization, final testing, and store submission",
    status: "pending",
    credits: 450,
    dueDate: "2025-05-15",
    completedDate: null,
    assignees: ["All Team"],
  },
]

const activityLog = [
  {
    id: 1,
    type: "milestone",
    message: "Milestone 6 'Boss Battle System' completed",
    user: "Nguyen Van A",
    date: "2025-03-30",
    credits: 450,
  },
  {
    id: 2,
    type: "credit",
    message: "Distributed 150 credits to Nguyen Van A",
    user: "Project Manager",
    date: "2025-03-30",
    credits: 150,
  },
  {
    id: 3,
    type: "milestone",
    message: "Started working on Milestone 7 'Audio & Sound Effects'",
    user: "Hoang Van E",
    date: "2025-03-28",
    credits: null,
  },
  {
    id: 4,
    type: "team",
    message: "Hoang Van E joined the project",
    user: "Project Manager",
    date: "2025-03-25",
    credits: null,
  },
]

export default function ProjectDetailsPage() {
  const completedMilestones = milestones.filter((m) => m.status === "completed").length
  const totalMilestones = milestones.length

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/dashboard" className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div>
              <h1 className="text-xl font-bold text-white">Project Details</h1>
              <p className="text-xs text-purple-300">{projectData.name}</p>
            </div>
          </Link>
          <nav className="flex items-center gap-2">
            <Button
              variant="outline"
              className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
            >
              <Edit className="w-4 h-4 mr-2" />
              Edit Project
            </Button>
            <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add Milestone
            </Button>
            <UserNav />
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
                    <p className="text-purple-400 text-sm mb-1">Progress</p>
                    <p className="text-white text-2xl font-bold">{projectData.progress}%</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Team Size</p>
                    <p className="text-white text-2xl font-bold">{projectData.team.length}</p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Milestones</p>
                    <p className="text-white text-2xl font-bold">
                      {completedMilestones}/{totalMilestones}
                    </p>
                  </div>
                  <div className="p-3 bg-slate-800/50 rounded-lg border border-purple-800/30">
                    <p className="text-purple-400 text-sm mb-1">Credits Used</p>
                    <p className="text-white text-2xl font-bold">{projectData.creditsDistributed}</p>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-purple-300">Project Timeline</span>
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
                    <CardTitle className="text-white text-lg">Credits Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Allocated</span>
                      <span className="text-white font-bold flex items-center gap-1">
                        <Zap className="w-4 h-4 text-yellow-400" />
                        {projectData.creditsAllocated}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Distributed</span>
                      <span className="text-green-400 font-bold">{projectData.creditsDistributed}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-purple-300">Remaining</span>
                      <span className="text-blue-400 font-bold">{projectData.creditsRemaining}</span>
                    </div>
                    <div className="pt-4 border-t border-purple-800/30">
                      <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                        <DollarSign className="w-4 h-4 mr-2" />
                        Distribute Credits
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card className="bg-slate-800/50 border-purple-800/30 mt-4">
                  <CardHeader>
                    <CardTitle className="text-white text-lg">Project Leader</CardTitle>
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

        {/* Tabs */}
        <Tabs defaultValue="milestones" className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-purple-800/30">
            <TabsTrigger
              value="milestones"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <Target className="w-4 h-4 mr-2" />
              Milestones
            </TabsTrigger>
            <TabsTrigger value="team" className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Team
            </TabsTrigger>
            <TabsTrigger
              value="activity"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Activity
            </TabsTrigger>
          </TabsList>

          {/* Milestones Tab */}
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
                          {milestone.status}
                        </Badge>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm">
                        <div className="flex items-center gap-1 text-yellow-400">
                          <Zap className="w-4 h-4" />
                          <span className="font-semibold">{milestone.credits} credits</span>
                        </div>
                        <div className="flex items-center gap-1 text-purple-400">
                          <Calendar className="w-4 h-4" />
                          <span>Due: {milestone.dueDate}</span>
                        </div>
                        {milestone.completedDate && (
                          <div className="flex items-center gap-1 text-green-400">
                            <CheckCircle2 className="w-4 h-4" />
                            <span>Completed: {milestone.completedDate}</span>
                          </div>
                        )}
                        <div className="flex items-center gap-1 text-purple-400">
                          <Users className="w-4 h-4" />
                          <span>{milestone.assignees.join(", ")}</span>
                        </div>
                      </div>

                      {milestone.status === "in-progress" && (
                        <div className="mt-4 flex gap-2">
                          <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                            Mark Complete
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                          >
                            Edit
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          {/* Team Tab */}
          <TabsContent value="team">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Team Members</CardTitle>
                <CardDescription className="text-purple-300">
                  Credits distribution and contribution breakdown
                </CardDescription>
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
                          <p className="text-purple-400 text-xs">Credits Earned</p>
                        </div>
                        <div className="text-center">
                          <p className="text-white font-bold text-lg">{member.contributions}%</p>
                          <p className="text-purple-400 text-xs">Contribution</p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
                      >
                        <Award className="w-4 h-4 mr-2" />
                        Award Credits
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
                <CardTitle className="text-white">Project Activity</CardTitle>
                <CardDescription className="text-purple-300">Recent updates and changes</CardDescription>
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
                              : "bg-blue-900/30 text-blue-400"
                        }`}
                      >
                        {activity.type === "milestone" && <Target className="w-5 h-5" />}
                        {activity.type === "credit" && <Zap className="w-5 h-5" />}
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
                                {activity.credits} credits
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
