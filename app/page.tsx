import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Trophy, Zap, Users, Award, Target } from "lucide-react"
import { UserNav } from "@/components/user-nav"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Header */}
      <header className="border-b border-purple-800/30 bg-slate-950/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-white">FusionLab Credits</h1>
              <p className="text-xs text-purple-300">SE Innovation Lab</p>
            </div>
          </div>
          <nav className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Dashboard
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button variant="ghost" className="text-purple-200 hover:text-white hover:bg-purple-900/30">
                Leaderboard
              </Button>
            </Link>
            <Link href="/admin">
              <Button
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                Admin
              </Button>
            </Link>
            <UserNav />
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-purple-300 text-sm mb-4">
            <Award className="w-4 h-4" />
            <span>Gamified Project Management System</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold text-white text-balance">
            Level Up Your Game Development Journey
          </h2>
          <p className="text-xl text-purple-200 text-balance max-w-2xl mx-auto">
            Track projects, earn credits, unlock achievements, and compete with your team in Fusion Game Lab's
            revolutionary management system.
          </p>
          <div className="flex items-center justify-center gap-4 pt-4">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              >
                Get Started
              </Button>
            </Link>
            <Link href="/leaderboard">
              <Button
                size="lg"
                variant="outline"
                className="border-purple-500 text-purple-300 hover:bg-purple-900/30 bg-transparent"
              >
                View Leaderboard
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardContent className="pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-3xl font-bold text-white">24</p>
                  <p className="text-sm text-purple-300">Active Members</p>
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
                  <p className="text-sm text-purple-300">Active Projects</p>
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
                  <p className="text-sm text-purple-300">Credits Distributed</p>
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
                  <p className="text-sm text-purple-300">Games Released</p>
                </div>
                <Trophy className="w-8 h-8 text-amber-400" />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-white mb-4">How It Works</h3>
          <p className="text-purple-300 text-lg">A transparent and motivating system for everyone</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Join Projects</CardTitle>
              <CardDescription className="text-purple-300">
                Register for semesters and join exciting game development projects with your team
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-orange-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Earn Credits</CardTitle>
              <CardDescription className="text-purple-300">
                Complete milestones, ship demos, and release games to earn credits based on achievements
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="bg-slate-900/50 border-purple-800/30 backdrop-blur-sm">
            <CardHeader>
              <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <CardTitle className="text-white">Unlock Rewards</CardTitle>
              <CardDescription className="text-purple-300">
                Redeem credits for cash, services, or compete on leaderboards for badges and achievements
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 border-purple-500/30 backdrop-blur-sm">
          <CardContent className="py-12 text-center">
            <Trophy className="w-16 h-16 text-yellow-400 mx-auto mb-6" />
            <h3 className="text-3xl font-bold text-white mb-4">Ready to Start Your Journey?</h3>
            <p className="text-purple-200 text-lg mb-8 max-w-2xl mx-auto">
              Join Fusion Game Lab and be part of an innovative ecosystem where your contributions are recognized and
              rewarded.
            </p>
            <Link href="/dashboard">
              <Button size="lg" className="bg-white text-purple-900 hover:bg-purple-50">
                Access Dashboard
              </Button>
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t border-purple-800/30 bg-slate-950/50 backdrop-blur-sm mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-purple-300 text-sm">
          <p>&copy; 2025 FusionLab Credits System - SE Innovation Lab. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
