import React from 'react';
import Home from './Home.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';
import Blog from './Blog.jsx';
import Resume from './Resume.jsx';
import Portfolio from './Portfolio.jsx';
import { BrowserRouter as Router , Routes , Route} from 'react-router-dom';
function Master() {
    return (
        <>
            <Router>
                <Routes>
                    <Route path='/' element={<Home></Home>}>Home</Route>
                    <Route path='/about' element={<About></About>}>About</Route>
                    <Route path='/contact' element={<Contact></Contact>}>Contact</Route>
                    <Route path='/blog' element={<Blog></Blog>}>Blog</Route>
                    <Route path='/resume' element={<Resume></Resume>}>Resume</Route>
                    <Route path='/portfolio' element={<Portfolio></Portfolio>}>PortFolio</Route>
                </Routes>
            </Router>
        </>
    )
}
export default Master;