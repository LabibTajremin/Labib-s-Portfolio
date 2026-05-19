export function AmbientBackground() {
  return (
    <>
      <div className="grid-pattern pointer-events-none fixed inset-0 -z-10 opacity-50" />
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-50 animate-float blur-[80px]"
          style={{ background: "hsl(var(--brand-violet))" }}
        />
        <div
          className="absolute right-[-180px] top-[30%] h-[460px] w-[460px] rounded-full opacity-50 animate-float blur-[80px]"
          style={{
            background: "hsl(var(--brand-cyan))",
            animationDelay: "-6s"
          }}
        />
        <div
          className="absolute -bottom-24 left-[30%] h-[380px] w-[380px] rounded-full opacity-30 animate-float blur-[80px]"
          style={{
            background: "hsl(var(--brand-pink))",
            animationDelay: "-12s"
          }}
        />
      </div>
    </>
  );
}
