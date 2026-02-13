import { ImageIcon } from "lucide-react"

interface ImagePlaceholderProps {
  label?: string
  className?: string
  aspectRatio?: string
}

export function ImagePlaceholder({
  label = "Imagen",
  className = "",
  aspectRatio = "aspect-video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`relative flex flex-col items-center justify-center gap-2 rounded-lg border-2 border-dashed border-border bg-muted ${aspectRatio} ${className}`}
    >
      <ImageIcon className="h-10 w-10 text-muted-foreground" />
      <span className="text-xs font-medium text-muted-foreground">{label}</span>
    </div>
  )
}
