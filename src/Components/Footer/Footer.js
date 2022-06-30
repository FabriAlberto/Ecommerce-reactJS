import React from 'react'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-md d-flex  col-7 justify-content-end">
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <div className='navbar__container'>
                            <div className='logo'>
                                <i class="bi bi-trophy-fill" />
                            </div>
                            <p className="navbar-brand">sportCenter</p>
                        </div>
                        
                    </Link>
                </div>
                <div className=' col-5 d-flex flex-column align-items-center'>
                    <p className='madeby'> site made by Fabricio Alberto</p>
                    <div className=' col-4 d-flex justify-content-around'> 
                   <a href='https://github.com/FabriAlberto' target="_blank" rel="noreferrer" ><i  class="bi__footer bi bi-github"></i></a>
                    <a href='https://www.linkedin.com/in/fabricio-alberto-597b17220/' target="_blank" rel="noreferrer" ><i class="bi__footer bi bi-linkedin"></i></a>
                    <a href='https://www.instagram.com/fabri._alberto/?hl=es' target="_blank" rel="noreferrer" ><i class="bi__footer bi bi-instagram"></i></a>
                    </div>
               </div>
            </nav>
        </>
    )
}

export default Footer