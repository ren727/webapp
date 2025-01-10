import { Link } from 'react-router-dom'
import logo from '../assets/leaf.png'

const Logo = () => {
  return (
     <Link to="/"   
      className="navbar-brand">
        <img src={logo}  width={48} height={48} className='rounded-circle' style={{ objectFit: 'cover' }}/>
     </Link>
  )
}

export default Logo