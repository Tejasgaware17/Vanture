export default function HostVansSkeleton() {
  return (
    <div className="flex flex-col gap-4">
      {Array.from({ length: 3 }).map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 rounded-lg bg-white/50 p-4 shadow-sm animate-pulse"
        >
          <div className="size-16 bg-gray-200 rounded-md" />
          <div>
            <div className="h-6 w-34 mb-2 bg-gray-200 rounded" />
            <div className="h-5 w-18 bg-gray-200 rounded" />
          </div>
        </div>
      ))}
    </div>
  )
}
