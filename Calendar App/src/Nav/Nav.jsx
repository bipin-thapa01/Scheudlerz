import './Nav.css'

function Nav() {
  let redirect = () =>{
      window.location.href = 'https://github.com/bipin-thapa01';
  }

  return (
    <div id='nav'>
      <i className="fa-brands fa-github" id='github' onClick={()=> {redirect()}}></i>
    </div>
  )
}

export default Nav;