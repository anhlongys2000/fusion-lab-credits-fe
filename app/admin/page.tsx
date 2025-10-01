import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Zap, Users, Target, TrendingUp, Plus, Search, Settings, DollarSign, Award, Edit, Eye } from "lucide-react"
import Link from "next/link"
import { UserNav } from "@/components/user-nav"

// Mock data
const stats = {
  totalMembers: 24,
  activeProjects: 8,
  totalCreditsDistributed: 15200,
  pendingApprovals: 3,
}

const projects = [
  {
    id: 1,
    name: "Dragon Quest RPG",
    leader: "Nguyen Van A",
    members: 5,
    semester: "Spring 2025",
    status: "active",
    progress: 75,
    creditsAllocated: 3000,
    creditsDistributed: 2250,
    milestones: { completed: 6, total: 8 },
  },
  {
    id: 2,
    name: "Puzzle Master",
    leader: "Tran Thi B",
    members: 4,
    semester: "Spring 2025",
    status: "active",
    progress: 45,
    creditsAllocated: 2500,
    creditsDistributed: 1125,
    milestones: { completed: 3, total: 7 },
  },
  {
    id: 3,
    name: "Space Shooter",
    leader: "Le Van C",
    members: 6,
    semester: "Fall 2024",
    status: "completed",
    progress: 100,
    creditsAllocated: 3500,
    creditsDistributed: 3500,
    milestones: { completed: 5, total: 5 },
  },
  {
    id: 4,
    name: "Racing Legends",
    leader: "Pham Thi D",
    members: 5,
    semester: "Spring 2025",
    status: "active",
    progress: 30,
    creditsAllocated: 2800,
    creditsDistributed: 840,
    milestones: { completed: 2, total: 6 },
  },
]

const members = [
  {
    id: 1,
    name: "Nguyen Van A",
    email: "nguyenvana@example.com",
    role: "Developer",
    semester: "Spring 2025",
    projects: 2,
    totalCredits: 2450,
    rank: 3,
  },
  {
    id: 2,
    name: "Tran Thi B",
    email: "tranthib@example.com",
    role: "Designer",
    semester: "Spring 2025",
    projects: 1,
    totalCredits: 1820,
    rank: 7,
  },
  {
    id: 3,
    name: "Le Van C",
    email: "levanc@example.com",
    role: "Developer",
    semester: "Fall 2024",
    projects: 3,
    totalCredits: 3150,
    rank: 1,
  },
  {
    id: 4,
    name: "Pham Thi D",
    email: "phamthid@example.com",
    role: "Project Manager",
    semester: "Spring 2025",
    projects: 1,
    totalCredits: 1950,
    rank: 5,
  },
]

const pendingRequests = [
  {
    id: 1,
    type: "credit_distribution",
    project: "Dragon Quest RPG",
    requester: "Nguyen Van A",
    amount: 500,
    reason: "Milestone 7 completed - Boss battle system",
    date: "2 hours ago",
  },
  {
    id: 2,
    type: "redemption",
    member: "Tran Thi B",
    amount: 800,
    redeemFor: "Cash reward",
    date: "5 hours ago",
  },
  {
    id: 3,
    type: "credit_distribution",
    project: "Puzzle Master",
    requester: "Tran Thi B",
    amount: 300,
    reason: "UI/UX design completion",
    date: "1 day ago",
  },
]

const creditTransactions = [
  {
    id: 1,
    type: "allocation",
    project: "Dragon Quest RPG",
    amount: 500,
    from: "Lab Pool",
    to: "Project",
    date: "2025-01-15",
    status: "completed",
  },
  {
    id: 2,
    type: "distribution",
    project: "Space Shooter",
    amount: 300,
    from: "Project Manager",
    to: "Le Van C",
    date: "2025-01-14",
    status: "completed",
  },
  {
    id: 3,
    type: "redemption",
    member: "Nguyen Van A",
    amount: 200,
    from: "Member",
    to: "Cash",
    date: "2025-01-13",
    status: "completed",
  },
]

export default function AdminPage() {
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
              <p className="text-xs text-purple-300">Admin Dashboard</p>
            </div>
          </Link>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Member View
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Leaderboard
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
              <Settings className="w-5 h-5" />
            </Button>
            <UserNav />
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300 mb-1">Total Members</p>
                  <p className="text-3xl font-bold text-white">{stats.totalMembers}</p>
                </div>
                <Users className="w-10 h-10 text-purple-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300 mb-1">Active Projects</p>
                  <p className="text-3xl font-bold text-white">{stats.activeProjects}</p>
                </div>
                <Target className="w-10 h-10 text-pink-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300 mb-1">Credits Distributed</p>
                  <p className="text-3xl font-bold text-white">{stats.totalCreditsDistributed.toLocaleString()}</p>
                </div>
                <Zap className="w-10 h-10 text-yellow-400" />
              </div>
            </CardContent>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-purple-300 mb-1">Pending Approvals</p>
                  <p className="text-3xl font-bold text-white">{stats.pendingApprovals}</p>
                </div>
                <TrendingUp className="w-10 h-10 text-green-400" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Pending Requests */}
        {pendingRequests.length > 0 && (
          <Card className="bg-gradient-to-r from-orange-900/30 to-red-900/30 border-orange-500/30 backdrop-blur-sm mb-8">
            <CardHeader>
              <CardTitle className="text-white flex items-center gap-2">
                <Award className="w-5 h-5 text-orange-400" />
                Pending Approvals ({pendingRequests.length})
              </CardTitle>
              <CardDescription className="text-orange-200">Review and approve credit requests</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {pendingRequests.map((request) => (
                  <div
                    key={request.id}
                    className="flex items-center justify-between p-4 bg-slate-900/50 rounded-lg border border-orange-500/20"
                  >
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge
                          className={
                            request.type === "credit_distribution"
                              ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                              : "bg-blue-900/50 text-blue-300 border-blue-500/30"
                          }
                        >
                          {request.type === "credit_distribution" ? "Credit Distribution" : "Redemption"}
                        </Badge>
                        <span className="text-white font-semibold">
                          {request.project || request.member} - {request.amount} credits
                        </span>
                      </div>
                      <p className="text-sm text-purple-300">
                        {request.reason || request.redeemFor} • Requested by {request.requester || request.member} •{" "}
                        {request.date}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button size="sm" className="bg-green-600 hover:bg-green-700 text-white">
                        Approve
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-red-500 text-red-400 hover:bg-red-900/30 bg-transparent"
                      >
                        Reject
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}

        {/* Main Content Tabs */}
        <Tabs defaultValue="projects" className="space-y-6">
          <TabsList className="bg-slate-900/50 border border-purple-800/30">
            <TabsTrigger
              value="projects"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              Projects
            </TabsTrigger>
            <TabsTrigger
              value="members"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              Members
            </TabsTrigger>
            <TabsTrigger
              value="transactions"
              className="data-[state=active]:bg-purple-900/50 data-[state=active]:text-white"
            >
              Transactions
            </TabsTrigger>
          </TabsList>

          {/* Projects Tab */}
          <TabsContent value="projects" className="space-y-4">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Project Management</CardTitle>
                    <CardDescription className="text-purple-300">Manage projects and allocate credits</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    New Project
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      placeholder="Search projects..."
                      className="pl-10 bg-slate-800/50 border-purple-800/30 text-white placeholder:text-purple-400"
                    />
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="border-purple-800/30 hover:bg-transparent">
                      <TableHead className="text-purple-300">Project</TableHead>
                      <TableHead className="text-purple-300">Leader</TableHead>
                      <TableHead className="text-purple-300">Status</TableHead>
                      <TableHead className="text-purple-300">Progress</TableHead>
                      <TableHead className="text-purple-300">Credits</TableHead>
                      <TableHead className="text-purple-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {projects.map((project) => (
                      <TableRow key={project.id} className="border-purple-800/30 hover:bg-purple-900/20">
                        <TableCell>
                          <div>
                            <p className="text-white font-semibold">{project.name}</p>
                            <p className="text-sm text-purple-400">
                              {project.members} members • {project.semester}
                            </p>
                          </div>
                        </TableCell>
                        <TableCell className="text-purple-200">{project.leader}</TableCell>
                        <TableCell>
                          <Badge
                            className={
                              project.status === "active"
                                ? "bg-green-900/50 text-green-300 border-green-500/30"
                                : "bg-slate-800 text-slate-300"
                            }
                          >
                            {project.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <span className="text-white text-sm">{project.progress}%</span>
                            <span className="text-purple-400 text-xs">
                              ({project.milestones.completed}/{project.milestones.total})
                            </span>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div>
                            <p className="text-white font-semibold">{project.creditsDistributed}</p>
                            <p className="text-xs text-purple-400">of {project.creditsAllocated}</p>
                          </div>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-purple-300 hover:bg-purple-900/30">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-purple-300 hover:bg-purple-900/30">
                              <Edit className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-purple-300 hover:bg-purple-900/30">
                              <DollarSign className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Members Tab */}
          <TabsContent value="members" className="space-y-4">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-white">Member Management</CardTitle>
                    <CardDescription className="text-purple-300">View and manage lab members</CardDescription>
                  </div>
                  <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white">
                    <Plus className="w-4 h-4 mr-2" />
                    Add Member
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="mb-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-purple-400" />
                    <Input
                      placeholder="Search members..."
                      className="pl-10 bg-slate-800/50 border-purple-800/30 text-white placeholder:text-purple-400"
                    />
                  </div>
                </div>
                <Table>
                  <TableHeader>
                    <TableRow className="border-purple-800/30 hover:bg-transparent">
                      <TableHead className="text-purple-300">Member</TableHead>
                      <TableHead className="text-purple-300">Role</TableHead>
                      <TableHead className="text-purple-300">Semester</TableHead>
                      <TableHead className="text-purple-300">Projects</TableHead>
                      <TableHead className="text-purple-300">Total Credits</TableHead>
                      <TableHead className="text-purple-300">Rank</TableHead>
                      <TableHead className="text-purple-300">Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {members.map((member) => (
                      <TableRow key={member.id} className="border-purple-800/30 hover:bg-purple-900/20">
                        <TableCell>
                          <div>
                            <p className="text-white font-semibold">{member.name}</p>
                            <p className="text-sm text-purple-400">{member.email}</p>
                          </div>
                        </TableCell>
                        <TableCell className="text-purple-200">{member.role}</TableCell>
                        <TableCell className="text-purple-200">{member.semester}</TableCell>
                        <TableCell className="text-white">{member.projects}</TableCell>
                        <TableCell className="text-white font-semibold">{member.totalCredits}</TableCell>
                        <TableCell>
                          <Badge className="bg-gradient-to-r from-purple-600 to-pink-600 text-white border-0">
                            #{member.rank}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <Button size="sm" variant="ghost" className="text-purple-300 hover:bg-purple-900/30">
                              <Eye className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-purple-300 hover:bg-purple-900/30">
                              <Edit className="w-4 h-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transactions Tab */}
          <TabsContent value="transactions" className="space-y-4">
            <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-white">Credit Transactions</CardTitle>
                <CardDescription className="text-purple-300">
                  Complete history of credit allocations and distributions
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow className="border-purple-800/30 hover:bg-transparent">
                      <TableHead className="text-purple-300">Type</TableHead>
                      <TableHead className="text-purple-300">Project/Member</TableHead>
                      <TableHead className="text-purple-300">Amount</TableHead>
                      <TableHead className="text-purple-300">From</TableHead>
                      <TableHead className="text-purple-300">To</TableHead>
                      <TableHead className="text-purple-300">Date</TableHead>
                      <TableHead className="text-purple-300">Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {creditTransactions.map((transaction) => (
                      <TableRow key={transaction.id} className="border-purple-800/30 hover:bg-purple-900/20">
                        <TableCell>
                          <Badge
                            className={
                              transaction.type === "allocation"
                                ? "bg-blue-900/50 text-blue-300 border-blue-500/30"
                                : transaction.type === "distribution"
                                  ? "bg-purple-900/50 text-purple-300 border-purple-500/30"
                                  : "bg-green-900/50 text-green-300 border-green-500/30"
                            }
                          >
                            {transaction.type}
                          </Badge>
                        </TableCell>
                        <TableCell className="text-white">{transaction.project || transaction.member}</TableCell>
                        <TableCell className="text-white font-semibold">
                          <span className="flex items-center gap-1">
                            <Zap className="w-4 h-4 text-yellow-400" />
                            {transaction.amount}
                          </span>
                        </TableCell>
                        <TableCell className="text-purple-200">{transaction.from}</TableCell>
                        <TableCell className="text-purple-200">{transaction.to}</TableCell>
                        <TableCell className="text-purple-200">{transaction.date}</TableCell>
                        <TableCell>
                          <Badge className="bg-green-900/50 text-green-300 border-green-500/30">
                            {transaction.status}
                          </Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
