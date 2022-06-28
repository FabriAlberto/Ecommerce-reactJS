import React from 'react'

const Loading = () => {
    return (
        <div className=' loading col-12 d-flex flex-column align-items-center justify-content-center'>
          
            <div className='navbar__container'><div className='logo'><i class="bi bi-trophy-fill"></i></div> <p className="navbar-brand">sportCenter</p></div>
            <div class="spinner-border " role="status">
                <span class="visually-hidden">Loading...</span>
            </div>

        </div>
    )
}

export default Loading