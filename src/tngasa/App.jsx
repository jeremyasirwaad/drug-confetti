import { useState } from 'react'
import logo from '../tngasa_logo.jpg'
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'
import '../App.css'

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
        <span className='h1'>INAUGURATION OF ONLINE REGISTRATION - TNGASA'2025</span>
        <span className='h1'>ஆன்லைன் பதிவு தொடக்க விழா - TNGASA'2025</span>
        <div className='divider'></div>
        <span className='h2'>Welcome to Tamil Nadu Government Arts and Science Admissions 2025</span>
        <span className='h2'>
          தமிழ்நாடு அரசு கலை மற்றும் அறிவியல் சேர்க்கை 2025-க்கு வரவேற்கிறோம்
        </span>
      </div>

      {applaunched ? (
        <img src={logo} alt='' className='image' />
      ) : (
        <img
          src='https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='
          alt=''
          className='image'
        ></img>
      )}

      {!applaunched ? (
        <div className='container2'>
          <div
            className='buttons'
            onClick={() => {
              setApplaunched(true)
            }}
          >
            <button style={{
              width: '270px',
            }}>Begin Registration</button>
          </div>
          <span>
            Click to begin registration / பதிவைத் தொடங்க கிளிக் செய்யவும்
          </span>
        </div>
      ) : (
        <div>
          <p className='live' style={{ 
            marginBottom: '15px', 
            padding: '8px 15px',
            backgroundColor: 'rgba(9, 156, 68, 0.1)', 
            borderRadius: '8px',
            display: 'inline-block',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
          }}>
            <a 
              href="https://www.tngasa.in" 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ 
                color: '#3969e1', 
                fontWeight: 'bold',
                fontSize: '1.8em',
                textDecoration: 'none',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => e.target.style.textDecoration = 'underline'}
              onMouseOut={(e) => e.target.style.textDecoration = 'none'}
            >
              www.tngasaonline.org
            </a>
          </p>
          <p className='live'>
            Online Registration Portal is now <span style={{ color: '#099c44' }}>LIVE</span> and{' '}
            <span style={{ color: '#3969e1' }}>OPEN</span> for all applicants /{' '}
            <span style={{ color: '#099c44' }}>ஆன்லைன்</span> பதிவு இணையதளம் இப்போது{' '}
            <span style={{ color: '#3969e1' }}>அனைத்து விண்ணப்பதாரர்களுக்கும்</span>{' '}
            <span style={{ color: '#099c44' }}>திறக்கப்பட்டுள்ளது</span>
          </p>
        </div>
      )}
    </div>
  )
}

export default App 