import React from "react";
import { NavLink } from "react-router-dom";
function About() {
    return (
        <>
            <div className='container-fluid mt-5 mb-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
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

                            <div className='container-fluid mt-5'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='card pb-5' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
                                            <div className='card-body text-center'>

                                            </div>
                                            <div className='row pt-5 pb-5'>
                                                <div className='col-12'>
                                                    <div className="row">
                                                        <div className='col-12 col-md-6 pr-5'>
                                                            <div className='ml-5 profilediv' style={{ boxShadow: '5px 50px 100px 50px', backgroundColor: 'white', height: '300px', width: '300px', borderRadius: '50%', border: '15px solid silver' }}>
                                                                <img src="https://media.istockphoto.com/id/1366725032/photo/smiling-teenager-taking-notes-while-using-laptop-during-a-class-at-high-school.jpg?b=1&s=612x612&w=0&k=20&c=SQoLizvrXEvIZrNYpyPv33ZlfP32SSvPpqqcGVC9PPo=" id="img" alt="" />
                                                            </div>
                                                        </div>
                                                        <div className='col-12 col-md-6 pl-5 text-white'>
                                                            <p className='h5 mt-3' style={{ fontWeight: 'normal' }}>Web Designer</p>
                                                            <h1>Jayad Pathan</h1>
                                                            <p className='mt-3' style={{ fontWeight: 'normal' }}>Fusce tempor magna mi, non egestas velit ultricies nec. <br /> Aenean convallis, risus non condimentum gravida,  odio <br />mauris ullamcorper felis, ut venenatis purus ex eu mi.br <br />Quisque  imperdiet lacinia urna, a placerat </p>
                                                            <button id='btn1' className=' btn-info bg-transparent rounded-pill bordered mt-3 p-2 mr-3' style={{ width: '180px' }}>
                                                                <NavLink to="/cv" className='text-white' style={{ textDecoration: 'none' }}>Download CV</NavLink>
                                                            </button>
                                                            <button id='btn2' className=' bg-transparent rounded-pill mt-3 p-2' style={{ width: '180px' }}>
                                                                <NavLink to="/contact" id='abtn2' className='text-white' style={{ textDecoration: 'none' }}>Contact</NavLink>
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5'>
                                                <div className="col-12">
                                                    <h5 className='ml-5 text-white' style={{ fontFamily: 'serif', fontWeight: 'bold' }}>What I Do</h5>
                                                </div>
                                            </div>
                                            <div className='row mt-2'>
                                                <div className='col-12 col-md-6 pr-5'>
                                                    <div className="row">
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <i className='fa fa-user h3 text-white float-right'></i>
                                                                </div>
                                                                <div className="col-10 text-white">
                                                                    <h4 >Copywrite</h4>
                                                                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <i className='fa fa-user h3 text-white float-right'></i>
                                                                </div>
                                                                <div className="col-10 text-white">
                                                                    <h4 >Web Design</h4>
                                                                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className='col-12 col-md-6'>
                                                    <div className="row pr-5">
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <i className='fa fa-user h3 text-white float-right'></i>
                                                                </div>
                                                                <div className="col-10 text-white">
                                                                    <h4 >Ecommerce</h4>
                                                                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-12">
                                                            <div className="row">
                                                                <div className="col-2">
                                                                    <i className='fa fa-user h3 text-white float-right'></i>
                                                                </div>
                                                                <div className="col-10 text-white">
                                                                    <h4 >Marketing</h4>
                                                                    <p>Mauris neque libero, aliquet vel mollis nec, euismod sed tellus. Mauris convallis dictum elit id volutpat. Vivamus blandit, dolor vitae lacinia maximus, risus velit vehicula odio, a tincidunt turpis turpis tempus ex</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5'>
                                                <div className="col-12">
                                                    <h5 className='ml-5 text-white' style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Fun Facts</h5>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12 col-md-3 mt-4">
                                                        <div className="card bg-dark">
                                                            <div className="card-body text-white text-center">
                                                                <i className='fa fa-heart'></i>
                                                                <h5 className='mt-2'>Happy Clients</h5>
                                                                <p className='h3'>557</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 mt-4">
                                                        <div className="card bg-dark">
                                                            <div className="card-body text-white text-center">
                                                                <i className='fa fa-clock'></i>
                                                                <h5 className='mt-2'>Working Hours</h5>
                                                                <p className='h3'>4587</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 mt-4">
                                                        <div className="card bg-dark">
                                                            <div className="card-body text-white text-center">
                                                                <i className='fa fa-trophy'></i>
                                                                <h5 className='mt-2'>Award Wins</h5>
                                                                <p className='h3'>101</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-3 mt-4">
                                                        <div className="card bg-dark">
                                                            <div className="card-body text-white text-center">
                                                                <i className='fa fa-book'></i>
                                                                <h5 className='mt-2'>Cofee Consume</h5>
                                                                <p className='h3'>557</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='row mt-5 mb-3'>
                                                <div className="col-12">
                                                    <h5 className='ml-5 text-white' style={{ fontFamily: 'serif', fontWeight: 'bold' }}>Pricing</h5>
                                                </div>
                                            </div>
                                            <div className="container mb-1">
                                                <div className="row">
                                                    <div className="col-12 col-md-4 mt-3">
                                                        <div className="card bg-dark">
                                                            <div id='price1' className="card-body text-white text-center">
                                                                <p className='h5'>Silver</p>
                                                                <p className='h1'>$64</p>
                                                                <p className='' style={{ marginTop: '-10px' }}>per month</p>
                                                                <button id='btnprice' className='btn btn-primary rounded-pill'>Free Trail</button>
                                                                <p className='h6 mt-3'>Lorem ipsum dolor</p>
                                                                <p className='h6'>Pellentesque scelerisque</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 mt-3">
                                                        <div className="card bg-dark">
                                                            <div id='price2' className="card-body text-white text-center">
                                                                <p className='h5'>Gold</p>
                                                                <p className='h1'>$164</p>
                                                                <p className='' style={{ marginTop: '-10px' }}>per month</p>
                                                                <button id='btnprice' className='btn btn-primary rounded-pill'>Free Trail</button>
                                                                <p className='h6 mt-3'>Lorem ipsum dolor</p>
                                                                <p className='h6'>Pellentesque scelerisque</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col-12 col-md-4 mt-3">
                                                        <div className="card bg-dark">
                                                            <div id='price3' className="card-body text-white text-center">
                                                                <p className='h5'>Platinum</p>
                                                                <p className='h1'>$264</p>
                                                                <p className='' style={{ marginTop: '-10px' }}>per month</p>
                                                                <button id='btnprice' className='btn btn-primary rounded-pill'>Free Trail</button>
                                                                <p className='h6 mt-3'>Lorem ipsum dolor</p>
                                                                <p className='h6'>Pellentesque scelerisque</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                                <p className='h6'>Morbi eu sagittis</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='container-fluid mt-5 mb-2'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='card' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
                            <div className='row  pt-5 text-center'>
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
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
export default About;