
import "../Styles/hero.css"

export default function Hero() {
    return (
       <>

        <div className="hero-container">

      {/* Blue Planet */}
      <div className="blue"></div>

      {/* Video Layer */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>

      {/* Red Planet */}
      <div className="red"></div>

      {/* Explosions */}
      <div className="explosion-left"></div>
      <div className="explosion-right"></div>

      <div className="planets-texture"></div>
      <div className="surface-texture"></div>

      {/* Content */}
      <h1>TechShastra</h1>

    </div>
       
       </>  
       
    
    
    )
}