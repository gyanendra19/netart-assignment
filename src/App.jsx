import {RiFacebookCircleFill, RiPhoneLine, RiGlobalLine} from '@remixicon/react'
import './App.scss'
import FirstPart from './components/FirstPart'
import SecondPart from './components/SecondPart'

function App() {

  return (
    <>
      <div className="main">
        <FirstPart />
        <SecondPart />
        
        <div className="footer">
          <div className="phone">
            <RiPhoneLine />
            <span>Toll free 1800 200 1234</span>
          </div>

          <div className="facebook">
          <RiFacebookCircleFill />
          <span>www.facebook.com/cripumps</span>
          </div>

          <div className="global">
          <RiGlobalLine />
          <span>www.cripumps.com</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
