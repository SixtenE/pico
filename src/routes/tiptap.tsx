import Tiptap from '@/components/Tiptap'
import { Card, CardContent } from '@/components/ui/card'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tiptap')({
  component: RouteComponent,
  ssr: false,
})

function RouteComponent() {
  return (
    <Card className="w-2xl mx-auto">
      <CardContent>
        <Tiptap />
      </CardContent>
    </Card>
  )
}
