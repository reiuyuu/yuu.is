interface ArrowProps {
  className?: string
}

export default function Arrow({ className }: ArrowProps) {
  return (
    <div
      className={`group flex h-8 w-8 cursor-pointer items-center justify-center text-3xl font-[350] leading-none md:h-10 md:w-10 md:text-4xl lg:h-12 lg:w-12 lg:text-5xl ${className}`}
    >
      <span
        className={`transition-transform duration-500 group-hover:-translate-y-1/3 motion-reduce:transform-none`}
      >
        ↑
      </span>
    </div>
  )
}
