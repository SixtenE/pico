import { createFileRoute } from '@tanstack/react-router'
import DropZone from '@/components/comp-551'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Upload } from 'lucide-react'

export const Route = createFileRoute('/home/')({
  component: RouteComponent,
  //   loader: async ({ context }) => {
  //     await context.queryClient.ensureQueryData(
  //       convexQuery(api.projects.getProjects, {}),
  //     )
  //   },
})

function RouteComponent() {
  //   const { data, isLoading } = useSuspenseQuery(
  //     convexQuery(api.projects.getProjects, {}),
  //   )
  //   const addProject = useMutation(api.projects.createProject)
  //   const deleteProjects = useMutation(api.projects.deleteAllProjects)

  return (
    <div className="p-8 space-y-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Good evening</h1>
        <p className="text-muted-foreground">Welcome back to your music</p>
      </div>
      <Card className="text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm bg-zinc-900 border-zinc-800 max-w-4/6">
        <CardHeader className="@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-1.5 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6">
          <CardTitle className="leading-none font-semibold flex items-center">
            <Upload className="h-5 w-5 mr-2" />
            Upload
          </CardTitle>
          <CardContent className="px-6">
            <div className="py-8">
              <DropZone />
            </div>
          </CardContent>
        </CardHeader>
      </Card>
    </div>
  )
}
