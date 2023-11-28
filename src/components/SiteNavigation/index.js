import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import './SiteNavigation.css'

function SiteNavigation() {
    return (
        <nav className='menu'>
            <NavLink to='/' exact className='menuitem' activeClassName='active'>
                <strong>Home</strong>
            </NavLink>
            <NavLink to='/places' exact className='menuitem' activeClassName='active'>
                <strong>Places I Lived</strong>
            </NavLink>
            <NavLink to='/links' exact className='menuitem' activeClassName='active'>
                <strong>Social Links</strong>
            </NavLink>
            <NavLink to='/contact' exact className='menuitem' activeClassName='active'>
                <strong>Contact Me</strong>
            </NavLink>
        </nav>
    )
}

export default SiteNavigation;