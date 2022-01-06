function FeatureCard({ icon, title }, children) {
  return (
    <div>
      <h2 className='title'>
        {title} <span className={icon}></span>
      </h2>
      {children}
    </div>
  )
}

export default FeatureCard
