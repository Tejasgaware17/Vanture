export default function VansSkeleton() {
  return (
    <>
      <div className="flex gap-4">
        <div className="h-9 w-28 bg-gray-200 rounded-md"></div>
        <div className="h-9 w-30 bg-gray-200 rounded-md"></div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-x-10 gap-y-12 sm:gap-x-12">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="block p-1 rounded-lg animate-pulse">
            <div className="w-full aspect-square rounded-lg bg-gray-200" />
            <div className="mt-2 sm:mt-4 h-6 w-4/5 bg-gray-200 rounded" />
            <div className="mt-2 h-5 w-1/3 bg-gray-200 rounded" />
            <div className="mt-2 sm:mt-4 h-10 w-20 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </>
  )
}
