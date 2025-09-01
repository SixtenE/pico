import { cn } from '@/lib/utils'
import { createFileRoute, Link, Outlet } from '@tanstack/react-router'
import {
  Home,
  Library,
  Search,
  LucideProps,
  Plus,
  Heart,
  Users,
  ListMusic,
  Disc,
} from 'lucide-react'
import { ComponentType } from 'react'

type sidebarLink = {
  title: string
  url: string
  icon: ComponentType<LucideProps>
}

const sidebarLinks: sidebarLink[] = [
  {
    title: 'Home',
    url: '/home',
    icon: Home,
  },
  {
    title: 'Search',
    url: '/search',
    icon: Search,
  },
  {
    title: 'Your Library',
    url: '/library',
    icon: Library,
  },
  {
    title: 'Create Playlist',
    url: '/create-playlist',
    icon: Plus,
  },
  {
    title: 'Liked Songs',
    url: '/liked-songs',
    icon: Heart,
  },
  {
    title: 'Artists',
    url: '/artists',
    icon: Users,
  },
  {
    title: 'Albums',
    url: '/albums',
    icon: Disc,
  },

  {
    title: 'Playlists',
    url: '/playlists',
    icon: ListMusic,
  },
]

export const Route = createFileRoute('/home')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="h-screen bg-background flex flex-col">
      <div className="flex flex-1 overflow-hidden">
        <div className="w-64 flex flex-col h-full">
          <div className="p-6 flex-shrink-0">
            <h1 className="text-2xl font-bold">Vibedrop</h1>
          </div>
          <div className="flex-1 overflow-y-auto px-6 pb-6">
            <nav className="space-y-2 mb-8 mt-1">
              {sidebarLinks.slice(0, 3).map((link) => (
                <Link
                  key={link.title}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-muted hover:text-primary text-muted-foreground',
                  )}
                  to="/home"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </nav>
            <div className="space-y-2 mb-8">
              {sidebarLinks.slice(3, 5).map((link) => (
                <Link
                  key={link.title}
                  className={cn(
                    'flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-muted hover:text-primary text-muted-foreground',
                  )}
                  to="/home"
                >
                  <link.icon className="w-5 h-5" />
                  <span>{link.title}</span>
                </Link>
              ))}
            </div>
            <div className="border-t border-zinc-800 pt-4 mb-8">
              <h3 className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                Browse
              </h3>
              <nav className="space-y-2">
                {sidebarLinks.slice(5, 7).map((link) => (
                  <Link
                    key={link.title}
                    className={cn(
                      'flex items-center space-x-3 px-3 py-2 rounded-xl text-sm font-medium transition-colors hover:bg-muted hover:text-primary text-muted-foreground',
                    )}
                    to="/home"
                  >
                    <link.icon className="w-5 h-5" />
                    <span>{link.title}</span>
                  </Link>
                ))}
              </nav>
            </div>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto bg-gradient-to-b from-zinc-900 to-black">
          <Outlet />
        </div>
      </div>
      <div className="h-20 border-t px-4 flex items-center justify-between"></div>
    </div>
  )
}
