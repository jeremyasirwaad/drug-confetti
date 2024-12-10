import { useState } from 'react'
import logo from './Image.jpeg'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import './App.css'

function App () {
  const { width, height } = useWindowSize()
  const [applaunched, setApplaunched] = useState(false)
  return (
    <div className='container'>
      <Confetti
        width={width}
        height={height}
        numberOfPieces={400}
        run={applaunched}
        gravity={0.1}
      />
      <div className='container2'>
        <span className='h1'>DRUG FREE TAMIL NADU</span>
        <span className='h1'>போதை பொருள் இல்லாத தமிழ்நாடு</span>
        <div className='divider'></div>
        <span className='h2'>Together let us make Tamil Nadu drug free</span>
        <span className='h2'>
          போதை பொருள் எனக்கும் வேண்டாம் நமக்கும் வேண்டாம்
        </span>
      </div>

      <img src={logo} alt='' className='image' />
      {!applaunched ? (
        <div className='container2'>
          <div
            className='buttons'
            onClick={() => {
              setApplaunched(true)
            }}
          >
            <button>Launch App</button>
          </div>
          <span>
            Click to launch the App / பயன்பாட்டைத் தொடங்க கிளிக் செய்யவும்
          </span>
        </div>
      ) : (
        <div>
          <p className='live'>
            App is Launched in{' '}
            <span style={{ color: '#099c44' }}>PlayStore</span> and{' '}
            <span style={{ color: '#3969e1' }}>AppStore</span> /{' '}
            <span style={{ color: '#099c44' }}>பிளே ஸ்டோர்</span> மற்றும்{' '}
            <span style={{ color: '#3969e1' }}>ஆப் ஸ்டோரில்</span> ஆப்
            <span style={{ color: '#099c44' }}> வெளியிடப்பட்டது</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default App
