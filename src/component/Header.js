import React from 'react'

function Header() {
  return (
    <>
    <header className="main-header header-style-1 font-heading">
        <div className="header-top">
            <div className="container">
                <div className="row pt-20 pb-20">
                    <div className="col-md-3 col-xs-6">
                        <a href="index.html"><img className="logo" src="assets/imgs/theme/logo.png" alt="Enugu Monitor" /></a>
                    </div>
                    <div className="col-md-9 col-xs-6 text-right header-top-right ">
                        <ul className="list-inline nav-topbar d-none d-md-inline">
                            
                            <li className="list-inline-item"><a href="/"><i className="mr-5"></i>About Us</a></li>
                        </ul>
                        <span className="vertical-divider mr-20 ml-20 d-none d-md-inline"></span>
                        <button className="search-icon d-none d-md-inline"><span className="mr-15 text-muted font-small"><i className="mr-5"></i>Search</span></button>
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
                            
                            <li> <a href="/">World</a> </li> 
                            <li> <a href="category-grid.html">Politics</a> </li>
                            <li> <a href="category-masonry.html">Business</a> </li>
                            <li> <a href="category-big.html">Education</a> </li>
                            <li> <a href="category.html">Technology</a> </li>
                            <li> <a href="category.html">Entertainment </a> </li>
                            <li> <a href="category.html">Lifestyle</a> </li>
                            <li> <a href="category.html">Sport</a> </li>
                            <li> <a href="category.html">Science</a> </li>
                            <li> <a href="category.html">Culture</a> </li>
                            <li> <a href="category.html">Tourism</a> </li>
                            <li> <a href="category.html">Art</a> </li>
                        </ul>
                     
                        <ul id="mobile-menu" className="d-block d-lg-none text-muted">
                            <li>
                                <a href="index.html">Home</a>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Pages</a>
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
                            </li>
                            <li className="menu-item-has-children"><a href="#">Category</a>
                                <ul className="sub-menu font-small">
                                    <li><a href="category-list.html">List layout</a></li>
                                    <li><a href="category-grid.html">Grid layout</a></li>
                                    <li><a href="category-masonry.html">Masonry layout</a></li>
                                    <li><a href="category-big.html">Big layout</a></li>
                                </ul>
                            </li>
                            <li className="menu-item-has-children"><a href="#">Single post</a>
                                <ul className="sub-menu font-small">
                                    <li><a href="single.html">Default</a></li>
                                    <li><a href="single-2.html">Big image</a></li>
                                    <li><a href="single-3.html">Left image</a></li>
                                    <li><a href="single-4.html">With sidebar</a></li>
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div className="float-right header-tools text-muted font-small">
                    {/* <ul className="header-social-network d-inline-block list-inline mr-15">
                        <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="#"><i className="elegant-icon social_facebook"></i></a></li>
                        <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="#"><i className="elegant-icon social_twitter "></i></a></li>
                        <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="#"><i className="elegant-icon social_pinterest "></i></a></li>
                    </ul> */}
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