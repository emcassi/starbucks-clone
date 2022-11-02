import React from 'react'
import './BottomNav.css'
function BottomNav() {
  return (
    <div className='bottom-nav'>
        <div className="bottom-nav__section">
            <h1>About Us</h1>
            <ul className="bottom-nav-links">
                <li><a href="#">Our Company</a></li>
                <li><a href="#">Our Coffee</a></li>
                <li><a href="#">Stories and News</a></li>
                <li><a href="#">Starbucks Archive</a></li>
                <li><a href="#">Investor Relations</a></li>
                <li><a href="#">Customer Service</a></li>
            </ul>
        </div>
        <div className="bottom-nav__section">
            <h1>Careers</h1>
            <ul className="bottom-nav-links">
                <li><a href="#">Culture and Values</a></li>
                <li><a href="#">Inclusion, Diversity, and Equity</a></li>
                <li><a href="#">College Achievement Plan</a></li>
                <li><a href="#">Alumni Community</a></li>
                <li><a href="#">U.S. Careers</a></li>
                <li><a href="#">International Careers</a></li>
            </ul>
        </div>
        <div className="bottom-nav__section">
            <h1>Social Impact</h1>
            <ul className="bottom-nav-links">
                <li><a href="#">People</a></li>
                <li><a href="#">Planet</a></li>
                <li><a href="#">Environmental and Social Impact Reporting </a></li>
            </ul>
        </div>
        <div className="bottom-nav__section">
            <h1>For Business Partners</h1>
            <ul className="bottom-nav-links">
                <li><a href="#">Landlord Support Center</a></li>
                <li><a href="#">Suppliers</a></li>
                <li><a href="#">Corporate Gift Card Sales</a></li>
                <li><a href="#">Office and Foodservice Coffee</a></li>
            </ul>
        </div>
        <div className="bottom-nav__section">
            <h1>Order and Pickup</h1>
            <ul className="bottom-nav-links">
                <li><a href="#">Order on the App</a></li>
                <li><a href="#">Order on the Web</a></li>
                <li><a href="#">Delivery</a></li>
                <li><a href="#">Order and Pickup Options</a></li>
                <li><a href="#">Explore and Find Coffee for Home </a></li>
            </ul>
        </div>
    </div>
  )
}

export default BottomNav