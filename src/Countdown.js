function Countdown() {

  const findOverflow = floating => floating - parseInt(floating)

  const updateCountdown = () => {
    const timeLeft = new Date(2022, 9, 8, 10) - Date.now()
    let countdown = ''
    if (timeLeft >= 0) {
      const days = timeLeft / 1000 / 60 / 60 / 24 
      const hours = findOverflow(days) * 24
      const minutes = findOverflow(hours) * 60
      // const seconds = findOverflow(minutes) * 60
      countdown = `
        See you in
        ${parseInt(days)} day${ days === 1 ? '' : 's'},
        ${parseInt(hours)} hour${ hours === 1 ? '' : 's'},
        and ${parseInt(minutes)} minute${ minutes === 1 ? '' : 's'}
      `
    } else {
      countdown = `We're married!`
    }
    return countdown
  }

  const countdownText = updateCountdown()

  return (
    <svg viewBox="0 0 400 200" className="fill-orange-600">
      <path id="countdown-semi-circle" d="M 30,200
                                          A 10,10 0,1,1 370,200" />
      <path id="countdown-path" d="M 60,200
                                  A 10,10 0,1,1 340,200" />
      <text
        width="400"
        className="font-serif fill-white" 
        style={{
          textAnchor: 'middle',
        }}
      >
        <textPath id="countdown-text" xlinkHref="#countdown-path" startOffset="50%">
          {countdownText}
        </textPath>
      </text>
    </svg>
  )
}

export default Countdown
