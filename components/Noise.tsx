export default function Noise() {
  return (
    <div className="pointer-events-none fixed inset-0 z-1 opacity-[0.03]">
      <div
        className="h-full w-full"
        style={{
          backgroundImage: `
    repeating-radial-gradient(
      #ffffff 0,
      #ffffff 1px,
      transparent 1px,
      transparent 100%
    )
  `,
          backgroundSize: '4px 4px',
          mixBlendMode: 'soft-light'
        }}
      />
    </div>
  )
}
