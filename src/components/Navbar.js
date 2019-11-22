import React from 'react'
import UserLogin from './Users/UserLogin'
import UserInfo from './Users/UserInfo'

const Navbar = () => {
    return(
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container'>
                <button className='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarTogglerDemo03' aria-controls='navbarTogglerDemo03' aria-expanded='false' aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <a className='navbar-brand' href='/'>#comentaki</a>

                <div className='collapse navbar-collapse' id='navbarTogglerDemo03'>
                    {
                    <ul className='navbar-nav mr-auto mt-2 mt-lg-0'>
                        
                    </ul>
                    }
                    <UserLogin />
                    <UserInfo />
                </div>
            </div>
        </nav>
    )
}

export default Navbar