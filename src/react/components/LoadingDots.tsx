function LoadingDots() {
  return (
    <>
      <div className="animation-delay-0 animate-pulse">
        <Dot />
      </div>
      <div className="animation-delay-500 animate-pulse">
        <Dot />
      </div>
      <div className="animation-delay-1000 animate-pulse">
        <Dot />
      </div>
    </>
  )
}

function Dot() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="#8b8ea2" viewBox="0 0 24 24" strokeWidth={1.5} className={`w-4 h-4`}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
  )
}

export default LoadingDots
