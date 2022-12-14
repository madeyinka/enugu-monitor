import React, {useEffect} from 'react'
import useContent from '../hook/useContext'
import Axios from '../hook/Axios'
import { sortByDate } from '../Util'

function Header() {
    const {setContent, setCategories} = useContent()
    
    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()
        const fetchPosts = async () => {
        try {
            const response = await Axios.get('/content/posts?user='+process.env.REACT_APP_USER, {
                signal:controller.signal
        })
        const result = response.data?.data.posts
        isMounted && setContent(result.sort(sortByDate))
        } catch (err) {
                console.error(err.message)
            }
        }
        fetchPosts()

        return () => {
            isMounted = false
            controller.abort()
        }
    },[])

    useEffect(() => {
        let isMounted = true
        const controller = new AbortController()

        const fetchCategories = async () => {
            const response = await Axios.get('/content/categories?user='+process.env.REACT_APP_USER, {
                signal: controller.signal
            })
            isMounted && setCategories(response.data.data.categories)
        }
        fetchCategories()

        return () => {
            isMounted = false
            controller.abort()
        }
    },[])

  return (
    <>
    <header className="main-header header-style-1 font-heading">
        <div className="header-top">
            <div className="container">
                <div className="row pt-20 pb-20">
                    <div className="col-md-3 col-xs-6">
                        <a href="/"><img className="logo" src="../../assets/imgs/theme/logo.jpg" alt="Enugu Monitor" /></a>
                    </div>
                    <div className="col-md-9 col-xs-6 text-right header-top-right ">
                        {/* <ul className="list-inline nav-topbar d-none d-md-inline">
                            
                            <li className="list-inline-item"><a href="/"><i className="mr-5"></i>About Us</a></li>
                        </ul>
                        <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span> */}
                        {/* <button className="search-icon d-none d-md-inline"><span className="mr-15 text-muted font-small"><i className="mr-5"></i>Search</span></button> */}
                        {/* <button className="btn btn-radius bg-primary text-white ml-15 font-small box-shadow">Buy Now</button> */}
                    </div>
                </div>
            </div>
        </div>
        <div className="header-sticky">
            <div className="container align-self-center position-relative">
                <div className="mobile_menu d-lg-none d-block"></div>
                <div className="main-nav d-none d-lg-block float-left">
                    <nav>
                        <ul className="main-menu d-none d-lg-inline font-small"> 
                            <li> <a href="/category/world">World</a> </li> 
                            <li> <a href="/category/politics">Politics</a> </li>
                            <li> <a href="/category/business">Business</a> </li>
                            <li> <a href="/category/education">Education</a> </li>
                            <li> <a href="/category/technology">Technology</a> </li>
                            <li> <a href="/category/entertainment">Entertainment </a> </li>
                            <li> <a href="/category/lifestyle">Lifestyle</a> </li>
                            <li> <a href="/category/sport">Sport</a> </li>
                            <li> <a href="/category/science">Science</a> </li>
                            <li> <a href="/category/culture">Culture</a> </li>
                            <li> <a href="/category/tourism">Tourism</a> </li>
                            <li> <a href="/category/art">Art</a> </li>
                        </ul>
                     
                        <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                            <li>
                                <a href="/">Home</a>
                            </li>
                            {/* <li className="menu-item-has-children"><a href="#">Pages</a>
                                <ul className="sub-menu font-small">
                                    <li><a href="page-about.html">About</a></li>
                                    <li><a href="page-contact.html">Contact</a></li>
                                    <li><a href="page-typography.html">Typography</a></li>
                                    <li><a href="page-register.html">Register</a></li>
                                    <li><a href="page-login.html">Login</a></li>
                                    <li><a href="page-search.html">Search</a></li>
                                    <li><a href="page-author.html">Author</a></li>
                                    <li><a href="page-404.html">404 page</a></li>
                                </ul>
                            </li> */}
                            <li className="menu-item-has-children"><a href="#">Category</a>
                                <ul className="sub-menu font-small">
                                    <li> <a href="/category/world">World</a> </li> 
                                    <li> <a href="/category/politics">Politics</a> </li>
                                    <li> <a href="/category/business">Business</a> </li>
                                    <li> <a href="/category/education">Education</a> </li>
                                    <li> <a href="/category/technology">Technology</a> </li>
                                    <li> <a href="/category/entertainment">Entertainment </a> </li>
                                    <li> <a href="/category/lifestyle">Lifestyle</a> </li>
                                    <li> <a href="/category/sport">Sport</a> </li>
                                    <li> <a href="/category/science">Science</a> </li>
                                    <li> <a href="/category/culture">Culture</a> </li>
                                    <li> <a href="/category/tourism">Tourism</a> </li>
                                    <li> <a href="/category/art">Art</a> </li>
                                </ul>
                            </li>
                            {/* <li className="menu-item-has-children"><a href="#">Single post</a>
                                <ul className="sub-menu font-small">
                                    <li><a href="single.html">Default</a></li>
                                    <li><a href="single-2.html">Big image</a></li>
                                    <li><a href="single-3.html">Left image</a></li>
                                    <li><a href="single-4.html">With sidebar</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </nav>
                </div>
                <div className="float-right header-tools text-muted font-small">
                    
                    <div className="off-canvas-toggle-cover d-inline-block">
                        <div className="off-canvas-toggle hidden d-inline-block" id="off-canvas-toggle">
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>
        </div>
    </header>
    </>
  )
}

export default Header