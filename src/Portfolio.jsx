import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
import Portfoliocard from './Portfoliocard';
var data=[
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/1.jpg',
        name:'Full Project 2'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/2.jpg',
        name:'YouTube Video 2'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/3.jpg',
        name:'Image 2'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/4.jpg',
        name:'SoundCloud Audio 1'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/5.jpg',
        name:'Vimeo Video'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/6.jpg',
        name:'Image 1'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/7.jpg',
        name:'YouTube Video 1'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/8.jpg',
        name:'Full Project 1'
    },
    {
        img:'https://lmpixels.com/demo/leven-html-new/dark/img/portfolio/9.jpg',
        name:'Direct URL'
    },
]
function Portfolio() {
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

                            <div className='container-fluid'>
                                <div className='row'>
                                    <div className='col-12'>
                                        <div className='card' style={{ borderRadius: '30px', backgroundColor: 'black' }}>
                                            <div className='card-body text-center'>

                                            </div>
                                            <div className='row '>
                                                <div className="col-12">
                                                    <h5 className='mr-5 text-white' style={{ float: 'right', fontFamily: 'serif', fontWeight: 'bold' }}>My Work</h5>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">
                                                    <div className="col-12">
                                                        <h1 className="text-white mt-3" style={{ fontWeight: 'bold' }}>Portfolio</h1>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="container">
                                                <div className="row">{
                                                    data.map((val,index)=>{
                                                        return(
                                                    <Portfoliocard img={val.img} name={val.name}></Portfoliocard>
                                                        )
                                                    })
                                                }
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='row mt-5 pt-5 text-center'>
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
export default Portfolio;