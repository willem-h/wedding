import { useState } from 'react'

import logo_white from './logo_white.svg';
import semi_circle from './semi_circle.svg'
import './App.css';

import Countdown from './Countdown'
import RSVP from './RSVP'

const blankRSVP = {
  names: [""],
  phone: "",
  email: "",
  attending: 'true',
  livestream: 'true',
  dietary: "",
  other: "",
}

function App() {
  const [rsvp, setRsvp] = useState(blankRSVP)

  const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
  }

  function handleChange(event) {
    const value = event.target.value
    const attribute = event.target.name
    setRsvp(prevRsvp => {
      return {
        ...prevRsvp,
        [attribute]: value
      }
    })
  }

  function handleNameChange(index) {
    return function(event) {
      const value = event.target.value
      setRsvp(prevRsvp => {
        prevRsvp.names[index] = value
        return {
          ...prevRsvp,
          names: prevRsvp.names
        }
      })
    }
  }

  function handleAddMember() {
    setRsvp(prevRsvp => {
      return {
        ...prevRsvp,
        names: [...prevRsvp.names, '']
      }
    })
  }

  function handleRemoveMember() {
    setRsvp(prevRsvp => {
      if (prevRsvp.names.length === 1) return prevRsvp
      return {
        ...prevRsvp,
        names: prevRsvp.names.slice(0, -1)
      }
    })
  }

  function handleSubmit(e) {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "rsvp",
        ...rsvp,
        guests: rsvp.names.join()
      })
    })
      .then(() => {
        setRsvp(() => blankRSVP)
        alert('Your RSVP was sent successfully!')
      })
      .catch(() => alert('Something has gone wrong. Please reach out to Bella or Willem to RSVP'))

    e.preventDefault()
  }

  return (
    <>

      <div className="h-screen text-center">

        <div className="flex h-4/5 w-screen items-center justify-center">
          <img src={logo_white} className="h-28 fixed -z-10" alt="Bella & Willem" />
        </div>
        <div className="h-1/5"></div>

        <img
          src={semi_circle}
          className="w-11/12 max-w-screen-md mx-auto"
          alt="Together with their families Bella and Willem invite you to celebreate their marriage!"
        />

        <div className="flex w-screen justify-center bg-[#f15e22]">
          <div className="w-11/12 max-w-screen-md bg-white pt-8 px-4 sm:px-12 space-y-12">

            {/* <div>
              <h1 className="font-serif text-4xl">October 8th, 2022</h1>
              <h1 className="font-serif text-4xl">At Bella Grace Manor, Woombye</h1>
            </div> */}

            <div className="space-y-6">
              <h1 className="font-serif text-4xl">SCHEDULE</h1>
              <div className='grid grid-cols-3 gap-x-4 text-left'>
                <p className="justify-self-end">🚗</p><p className="justify-self-start">9:30am - Arrive</p><p></p>
                <p className="justify-self-end text-slate-400">|&nbsp;</p><p></p><p></p>
                <p className="justify-self-end">💒</p><p className="justify-self-start">10am - Ceremony begins!</p><p></p>
                <p className="justify-self-end text-slate-400">|&nbsp;</p><p></p><p></p>
                <p className="justify-self-end">👰🏻‍♀️🤵🏻‍♂️</p><p className="justify-self-start">10:30am - Ceremony Concludes</p><p></p>
                <p className="justify-self-end text-slate-400">|&nbsp;</p><p></p><p></p>
                <p className="justify-self-end">👨‍👩‍👧‍👦</p><p className="justify-self-start">10:45am - Family Photos, Lawn Games</p><p></p>
                <p className="justify-self-end text-slate-400">|&nbsp;</p><p></p><p></p>
                <p className="justify-self-end">🍾</p><p className="justify-self-start">11:30am - Reception Begins</p><p></p>
                <p className="justify-self-end text-slate-400">|&nbsp;</p><p></p><p></p>
                <p className="justify-self-end">🛫</p><p className="justify-self-start">3pm - Bride and Groom Depart</p><p></p>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl">ACCOMMODATION</h1>
              <p>
                If you’re travelling to celebrate with us, firstly THANK YOU! The
                Sunshine Coast is a gorgeous area, and there are plenty of
                affordable and beautiful AirBnBs for you to enjoy.
              </p>

              <p>
                If you’re interested in a hinterland vibe, we’d suggest these suburbs:
              </p>
              <ul className="list-disc inline-block">
                <li>Woombye (5min to venue)</li>
                <li>Palmwoods (5min to venue)</li>
                <li>Mapleton (15min to venue)</li>
                <li>Montville (20min to venue)</li>
                <li>Maleny (35min to venue)</li>
              </ul>
              
              <p>
                If being close to the beach is more your priority, we’d suggest:
              </p>
              <ul className="list-disc inline-block">
                <li>Maroochydore (20min to venue)</li>
                <li>Cotton Tree (25min to venue)</li>
                <li>Mooloolaba (25min to venue)</li>
                <li>Mudjimba (20min to venue)</li>
                <li>Coolum (30min to venue)</li>
              </ul>
                
              <p>
                If proximity to shops and the central hub of the Sunny Coast is what you’re wanting, we’d suggest:
              </p>
              <ul className="list-disc inline-block">
                <li>Maroochydore (20min to venue)</li>
                <li>Buderim (20min to venue)</li>
                <li>Sippy Downs (25min to venue)</li>
              </ul>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl">PARKING</h1>
              <p>
                Our venue has very limited parking, so in respect of neighbours,
                parking is in the New Life Christian Church carpark, which is
                located at Nambour Christian College. As soon as you drive in, you
                will see the church carpark and our Event Bus Driver Richy - he will
                be waiting to shuttle you to Bella Grace Manor. The shuttle will run
                every 5-10mins, so you won’t be waiting long at all! Richy will be
                there from 9.10am to 9.45am, ready for you. 
              </p>
              <p>
                If you end up running late, just message RIchy on 0408881708 to let
                him know so he can meet you at the carpark. If you need to leave the
                event early, then just text and Richy will meet you on the front
                veranda to take you back to your car.
              </p>
            </div>

            <div className="space-y-6">
              <h1 className="font-serif text-4xl">GIFTS</h1>
              <p>
                Your presence on the day is more than enough, but if you’d like
                to contribute to our new life and home together, you can do so
                through our <a href="https://thankfulregistry.com/bella-and-willem" className="text-orange-600 underline underline-offset-4 hover:underline-offset-2">gift registry</a>.
                We’ll also have a wishing well on the day if you’d prefer to
                participate in that.
              </p>
            </div>

            <RSVP
              rsvp={rsvp}
              handleChange={handleChange}
              handleAddMember={handleAddMember}
              handleRemoveMember={handleRemoveMember}
              handleNameChange={handleNameChange}
              handleSubmit={handleSubmit}
            />

            <h1 className='font-serif text-4xl'>#thehandrecks</h1>

            <Countdown />
          </div>
        </div>

      </div>

    </>
  );
}

export default App;
