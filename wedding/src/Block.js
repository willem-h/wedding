function Block({ heading, children }) {
  return (
    <>
      <h1 className="font-serif text-4xl">{heading}</h1>
      {children}
    </>
  )
}

export default Block