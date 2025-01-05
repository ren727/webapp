import logo from '../assets/leaf.png'

const Logo = () => {
  return (
     <a href='www.google.com'   
      className="navbar-brand">
        <img src={logo}  width={48} height={48} className='rounded-circle' style={{ objectFit: 'cover' }}/>
     </a>
  )
}

export default Logo