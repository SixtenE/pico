import {
  BoxIcon,
  ChartLine,
  HouseIcon,
  Lock,
  MessageCircle,
  PanelsTopLeftIcon,
  SettingsIcon,
  SquarePen,
  Upload,
  UsersRoundIcon,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UploadComp } from '@/routes/home.index'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

export default function Component() {
  return (
    <Tabs defaultValue="tab-1">
      <ScrollArea>
        <TabsList className="text-foreground justify-start mb-3 h-auto gap-2 rounded-none border-b w-full bg-transparent px-1 py-1">
          <TabsTrigger
            value="tab-1"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <HouseIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="tab-2"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <MessageCircle
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Comments
            <Badge
              className="bg-destructive-foreground ms-1.5 min-w-5 px-1"
              variant="destructive"
            >
              3
            </Badge>
          </TabsTrigger>
          <TabsTrigger
            value="tab-3"
            className="hover:bg-accent hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <SquarePen
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Notes
            <Badge className="ms-1.5 font-semibold">Beta</Badge>
          </TabsTrigger>
          <TabsTrigger
            value="tab-4"
            className="hover:bg-acce    nt hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <UsersRoundIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Collaborators
          </TabsTrigger>
          <TabsTrigger
            value="tab-6"
            className="hover:bg-accent ml-auto hover:text-foreground data-[state=active]:after:bg-primary data-[state=active]:hover:bg-accent relative after:absolute after:inset-x-0 after:bottom-0 after:-mb-1 after:h-0.5 data-[state=active]:bg-transparent data-[state=active]:shadow-none"
          >
            <SettingsIcon
              className="-ms-0.5 me-1.5 opacity-60"
              size={16}
              aria-hidden="true"
            />
            Settings
          </TabsTrigger>
        </TabsList>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <TabsContent value="tab-1">
        <Card className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-zinc-900 border-zinc-800 min-w-md">
          <CardHeader>
            <CardTitle className="leading-none font-semibold flex items-center">
              Overview
            </CardTitle>
          </CardHeader>
          <CardContent className="h-64"></CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="tab-2">
        <Card className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-zinc-900 border-zinc-800 min-w-md">
          <CardHeader>
            <CardTitle className="leading-none font-semibold flex items-center">
              Projects
            </CardTitle>
            <CardContent className="h-64"></CardContent>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="tab-3">
        <Card className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-zinc-900 border-zinc-800 min-w-md">
          <CardHeader>
            <CardTitle className="leading-none font-semibold flex items-center">
              Projects
            </CardTitle>
            <CardContent className="h-64"></CardContent>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="tab-4">
        <Card className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-zinc-900 border-zinc-800 min-w-md">
          <CardHeader>
            <CardTitle className="leading-none font-semibold flex items-center">
              Projects
            </CardTitle>
            <CardContent className="h-64"></CardContent>
          </CardHeader>
        </Card>
      </TabsContent>
      <TabsContent value="tab-5">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 5
        </p>
      </TabsContent>
      <TabsContent value="tab-6">
        <p className="text-muted-foreground pt-1 text-center text-xs">
          Content for Tab 6
        </p>
      </TabsContent>
    </Tabs>
  )
}
