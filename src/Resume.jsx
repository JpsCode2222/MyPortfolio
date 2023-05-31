import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
function Resume() {
    return (
        <>
            <div className='container-fluid mt-5 mb-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card pb-5' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
                            <div className='card-body text-center'>
                                <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: 'black' }}>
                                    <NavLink class="navbar-brand" id='logo' to="logo">
                                        <i id='logoi' className='fa fa-user h1 ml-5 mr-2 text-white'></i>Jayad Pathan</NavLink>
                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="navbar-toggler-icon"></span>
                                    </button>
                                    <div className="collapse navbar-collapse text-right" id="navbarNavDropdown">
                                        <ul id='nav' className="navbar-nav ml-5 pl-5">
                                            <li class="nav-item dropdown active">
                                                <NavLink className="nav-link dropdown-toggle" href="/" role="button" data-toggle="dropdown" aria-expanded="false">About Me<span class="sr-only">(current)</span>
                                                </NavLink>
                                                <div class="dropdown-menu">
                                                    <NavLink className="dropdown-item" to="/about">About Me 1</NavLink>
                                                    <NavLink className="dropdown-item" to="/about">About Me 2</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item ml-3">
                                                <NavLink className="nav-link" to="/resume">Resume</NavLink>
                                            </li>
                                            <li className="nav-item dropdown ml-3">
                                                <NavLink className="nav-link dropdown-toggle" to="/portfolio" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    Portfolio
                                                </NavLink>
                                                <div className="dropdown-menu">
                                                    <NavLink className="dropdown-item" to="/portfolio1">Portfolio 1 Columns</NavLink>
                                                    <NavLink className="dropdown-item" to="/portfolio2">Portfolio 2 Columns</NavLink>
                                                </div>
                                            </li>
                                            <li className="nav-item dropdown ml-3">
                                                <NavLink className="nav-link dropdown-toggle" to="/blog" role="button" data-toggle="dropdown" aria-expanded="false">
                                                    Blog
                                                </NavLink>
                                                <div className="dropdown-menu">
                                                    <NavLink className="dropdown-item" to="/blog1">Blog 2 Columns</NavLink>
                                                    <NavLink className="dropdown-item" to="/blog2">Blog 3 Columns</NavLink>
                                                </div>
                                            </li>
                                            <li class="nav-item ml-3">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                            <li class="nav-item ml-3">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                            <li class="nav-item ml-3">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                            <li class="nav-item ml-3">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                            <li class="nav-item ml-3">
                                                <NavLink className="nav-link" to="/contact">Contact</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>

                            <div className='container-fluid mb-5'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='card pb-5' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
                                            <div className='card-body text-center'>

                                            </div>
                                            <div className='row'>
                                                <div className="col-12">
                                                    <h5 className='mr-5 text-white' style={{ float: 'right', fontFamily: 'serif', fontWeight: 'bold' }}>1 Years of Experience</h5>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row mt-2">
                                                    <div className="col-12">
                                                        <h1 className="text-white" style={{ fontWeight: 'bold' }}>Resume</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row mt-5">
                                                    <div className="col-12 col-md-6">
                                                        <h3 className='text-white mb-5'>Education -:</h3>
                                                        <div className="info">
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2009</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>UI Design</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                        <div className="info">
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2008</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>Graphic Design</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                        <div className="info" style={{ borderBottom: 'none' }}>
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2007</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>Frontend Developement</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-6">
                                                        <h3 className='text-white mb-5'>Experience -:</h3>
                                                        <div className="info">
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2016 - Current</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>Lead UI/UX Designer</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                        <div className="info">
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2013-16</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>Senior UI/UX Designer</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                        <div className="info" style={{ borderBottom: 'none' }}>
                                                            <span id='rsa' className='text-white'><button id='bat' className='btn btn-primary rounded-pill bg-transparent text-white'>2011-13</button>University of Studies</span>
                                                            <h5 id='skill' className='text-white'>Junior UI/UX Designer</h5>
                                                            <p className='text-white ml-4' style={{ fontSize: '14px', fontWeight: 'light' }}>Duis posuere, quam non imperdiet egestas, eros enim mattis mauris, in posuere lacus arcu quis felis. Etiam interdum erat non enim venenatis fermentum.</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container mt-5">
                                                <div className="row mt-5">
                                                    <div className="col-12">
                                                        <h3 className='text-white mb-4'>Certificates -:</h3>
                                                    </div>
                                                    <div className="col-12 col-md-5 mt-3">
                                                        <div className="row" style={{ border: '1px solid silver' }}>
                                                            <div className="col-4 bg-light">
                                                                <img style={{ height: '130px' }} className='w-100' src="https://lmpixels.com/demo/leven-html-new/dark/img/clients/client-7.png" alt="" />
                                                            </div>
                                                            <div className="col-8 text-white p-3">
                                                                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Psyhology of Intertnation Design</p>
                                                                <p style={{ marginTop: '-15px' }}>Membership ID: XXXX</p>
                                                                <p style={{ marginTop: '-15px' }}>19 April 2018</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-2"></div>
                                                    <div className="col-12 col-md-5 mt-3">
                                                        <div className="row" style={{ border: '1px solid silver' }}>
                                                            <div className="col-4 bg-light">
                                                                <img style={{ height: '80px' }} className='w-100 mt-3' src="https://lmpixels.com/wp/leven-wp/wp-content/uploads/2019/12/client-1.png" alt="" />
                                                            </div>
                                                            <div className="col-8 text-white p-3">
                                                                <p style={{ fontWeight: 'bold', fontSize: '18px' }}>Psyhology of Intertnation Design</p>
                                                                <p style={{ marginTop: '-15px' }}>Membership ID: XXXX</p>
                                                                <p style={{ marginTop: '-15px' }}>19 April 2018</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container mt-5">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <div className="row">
                                                            <div className="col-6">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <h3 className='text-white mb-4 mt-5'>Design Skills -:</h3>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='text-white text-bold'><li>UI/UX Design</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>Graphics Design</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>Print Design</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>Logo Design</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>PHP</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="col-6">
                                                                <div className="row">
                                                                    <div className="col-12">
                                                                        <h3 className='text-white mb-4 mt-5'>Coding Skills -:</h3>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='text-white text-bold'><li>HTML / CSS</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>PHP</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>Java-Script</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>React</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-12">
                                                                        <p className='mt-3 text-white text-bold'><li>MySQL</li></p>
                                                                        <div className='progress'>
                                                                            <div className="progress-bar bg-primary progress-bar-striped progress-bar-animated" style={{ width: '95%' }}>95%</div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row text-center'>
                                <div className="col-md-8 col-12 pr-5">
                                    <ul>
                                        <li id='listitem'>
                                            <NavLink href="#">Facebook</NavLink>
                                        </li>
                                        <li id='listitem'>
                                            <NavLink href="#">Instagram</NavLink>
                                        </li>
                                        <li id='listitem'>
                                            <NavLink href="#">LinkedIn</NavLink>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col-md-4 col-12">
                                    <p className='text-white bold'>© 2020 All rights reserved.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Resume;