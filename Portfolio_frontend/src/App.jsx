
import './App.css'

function App() {
 

  return (
    <>
     <nav>
      <a href="#" className='logo'>
        <span>Mondayp</span>
      </a>


      <ul className="links">
        <li><a href="#home"><span style={{marginLeft: "0px", marginBottom: '10px'}} >Home</span></a></li>
        <li><a href="#about"><span style={{marginLeft: "25px"}} >About Mondayp</span></a></li>
        <li><a href="#techs"><span style={{marginLeft: "45px"}} >Services Techs</span></a></li>
        <li><a href="#contact"><span style={{marginLeft: "85px"}} >Contact Me</span></a></li>
      </ul>


      <i className='bx bx-menu-alt-right' id="menu"></i>
      {/* <div className="menu">Menu </div> */}

      <a href="#contact" className="btn">Contact Me</a>
     </nav>
    </>
  )
}

export default App
