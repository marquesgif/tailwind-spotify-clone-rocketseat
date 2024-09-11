
export function ArrowButton({children}:{
    children: React.ReactNode
}) {
  return (
    <button className="rounded-full bg-black/40 p-1">
        {children}
    </button>
  )
}
