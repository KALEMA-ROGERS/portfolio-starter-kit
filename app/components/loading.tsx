export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white dark:bg-black">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-blue-200 dark:border-blue-800 rounded-full animate-spin border-t-blue-600 dark:border-t-blue-400"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-purple-600 dark:border-t-purple-400"></div>
        </div>
        <p className="mt-4 text-lg font-medium text-neutral-600 dark:text-neutral-400">
          Loading...
        </p>
      </div>
    </div>
  )
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-white dark:bg-neutral-900 rounded-2xl border border-neutral-200 dark:border-neutral-800 p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 bg-neutral-200 dark:bg-neutral-700 rounded-2xl"></div>
          <div className="flex-1">
            <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded mb-2"></div>
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-3/4"></div>
          </div>
        </div>
        <div className="space-y-2 mb-4">
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded"></div>
          <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-5/6"></div>
        </div>
        <div className="flex gap-2 mb-4">
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-16"></div>
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-20"></div>
          <div className="h-6 bg-neutral-200 dark:bg-neutral-700 rounded-full w-14"></div>
        </div>
        <div className="h-10 bg-neutral-200 dark:bg-neutral-700 rounded-xl"></div>
      </div>
    </div>
  )
}

export function SkeletonSkills() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-5">
      {Array.from({ length: 12 }).map((_, index) => (
        <div key={index} className="animate-pulse">
          <div className="flex flex-col items-center justify-center p-4 rounded-3xl bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            <div className="w-14 h-14 bg-neutral-200 dark:bg-neutral-700 rounded-full mb-2"></div>
            <div className="h-4 bg-neutral-200 dark:bg-neutral-700 rounded w-16"></div>
          </div>
        </div>
      ))}
    </div>
  )
}
