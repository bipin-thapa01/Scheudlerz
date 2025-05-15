import './Nav.css'

function Nav() {
  let redirect = () =>{
      window.open('https://github.com/bipin-thapa01', '_blank');
  }

  return (
    <div id='nav'>
      <i className="fa-brands fa-github" id='github' onClick={()=> {redirect()}}></i>
    </div>
  )
}

export default Nav;