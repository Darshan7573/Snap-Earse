import { assets } from "../assets/assets/assets"
import { Link } from 'react-router-dom'

const NavBar = () => {


    return (
        <div className="flex items-center justify-between mx-4 py-3 lg:mx-44">
            <Link to={'/'}>
                <img className="w-32 sm:w-44" src={assets.logo} alt="logo" />
            </Link>
            <button className="flex bg-zinc-800  text-white items-center gap-4 px-4 py-2 sm:px-8 sm:py-3 text-sm rounded-md hover:bg-zinc-500 hover:scale-y-105 transition-all duration-200">
                Get Started <img className="w-3 sm:w-4" src={assets.arrow_icon} />
            </button>
        </div>
    )
}

export default NavBar