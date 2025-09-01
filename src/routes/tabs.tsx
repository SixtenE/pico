import { createFileRoute } from '@tanstack/react-router'
import Tabs from '@/components/comp-437'

export const Route = createFileRoute('/tabs')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div>
      <Tabs />
    </div>
  )
}
