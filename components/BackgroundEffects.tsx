export default function BackgroundEffects() {
  return (
    <>
      <div className="pointer-events-none fixed left-[-10%] top-[-10%] z-0 h-125 w-125 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="pointer-events-none fixed bottom-[-10%] right-[-10%] z-0 h-125 w-125 rounded-full bg-violet-500/10 blur-3xl" />
    </>
  )
}
