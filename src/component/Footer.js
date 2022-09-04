import React from 'react'

function Footer() {
  return (
    <>
    <div className="site-bottom pt-50 pb-50">
      <div className="container">
      <div className="sidebar-widget widget-latest-posts mb-30 mt-20 wow fadeInUp animated">
                <div className="widget-header-2 position-relative mb-30">
                    <h5 className="mt-5 mb-30">Top Categories</h5>
                </div>
                <div className="carausel-3-columns">
                    <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                                <img src="assets/imgs/news/thumb-1.jpg" alt="" />
                            </a>
                        </div>
                        <div className="post-content media-body">
                            <h6> <a href="category.html">Travel Tips</a> </h6>
                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                                <img src="assets/imgs/news/thumb-2.jpg" alt="" />
                            </a>
                        </div>
                        <div className="post-content media-body">
                            <h6><a href="category.html">Lifestyle</a></h6>
                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                                <img src="assets/imgs/news/thumb-3.jpg" alt="" />
                            </a>
                        </div>
                        <div className="post-content media-body">
                            <h6><a href="category.html">Foody</a></h6>
                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="carausel-3-columns-item d-flex bg-grey has-border p-25 hover-up-2 transition-normal border-radius-5">
                        <div className="post-thumb post-thumb-64 d-flex mr-15 border-radius-5 img-hover-scale overflow-hidden">
                            <a className="color-white" href="single.html">
                                <img src="assets/imgs/news/thumb-4.jpg" alt="" />
                            </a>
                        </div>
                        <div className="post-content media-body">
                            <h6><a href="category.html">Entertaiment</a></h6>
                            <p className="text-muted font-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    </div>
    
      <footer className="pt-50 pb-20 bg-grey">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6">
                    <div className="sidebar-widget wow fadeInUp animated mb-30">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">About Enugu Monitor</h5>
                        </div>
                        <div className="textwidget">
                            <p>
                                Start writing, no matter what. The water does not flow until the faucet is turned on.
                            </p>
                            <p><strong className="color-black">Address</strong><br />
                                123 Main Street<br />
                                New York, NY 10001</p>
                            <p><strong className="color-black">Follow me</strong><br />
                                <ul className="header-social-network d-inline-block list-inline color-white mb-20">
                                    <li className="list-inline-item"><a className="fb" href="#" target="_blank" title="Facebook"><i className="elegant-icon social_facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="tw" href="#" target="_blank" title="Tweet now"><i className="elegant-icon social_twitter"></i></a></li>
                                    <li className="list-inline-item"><a className="pt" href="#" target="_blank" title="Pin it"><i className="elegant-icon social_pinterest"></i></a></li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="sidebar-widget widget_categories wow fadeInUp animated mb-30" data-wow-delay="0.1s">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Popular Categories</h5>
                        </div>
                        <ul className="font-small">
                            <li className="cat-item cat-item-2"><a href="#">Politics</a></li>
                            <li className="cat-item cat-item-4"><a href="#">Business</a></li>
                            <li className="cat-item cat-item-5"><a href="#">​Interviews</a></li>
                            <li className="cat-item cat-item-6"><a href="#">Entertainment</a></li>
                            <li className="cat-item cat-item-7"><a href="#">Sport</a></li>
                            <li className="cat-item cat-item-7"><a href="#">Culture</a></li>
                        </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="sidebar-widget widget_tagcloud wow fadeInUp animated mb-30" data-wow-delay="0.2s">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Tags</h5>
                        </div>
                        <div className="tagcloud mt-50">
                            <a className="tag-cloud-link" href="category.html">beautiful</a>
                            <a className="tag-cloud-link" href="category.html">New York</a>
                            <a className="tag-cloud-link" href="category.html">droll</a>
                            <a className="tag-cloud-link" href="category.html">intimate</a>
                            <a className="tag-cloud-link" href="category.html">loving</a>
                            <a className="tag-cloud-link" href="category.html">travel</a>
                            <a className="tag-cloud-link" href="category.html">fighting </a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6">
                    <div className="sidebar-widget widget_newsletter wow fadeInUp animated mb-30" data-wow-delay="0.3s">
                        <div className="widget-header-2 position-relative mb-30">
                            <h5 className="mt-5 mb-30">Newsletter</h5>
                        </div>
                        <div className="newsletter">
                            <p className="font-medium">Subscribe to our newsletter and get our newest updates right on your inbox.</p>
                            <form className="input-group form-subcriber mt-30 d-flex">
                                <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                                <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                                <label className="mt-20"> <input className="mr-5" name="name" type="checkbox" value="1" required="" /> I agree to the <a href="#" target="_blank">terms &amp; conditions</a> </label>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy-right pt-30 mt-20 wow fadeInUp animated">
                <p className="float-md-left font-small text-muted">© 2020, All rights reserved </p>
                {/* <p className="float-md-right font-small text-muted">
                    Design by <a href="https://alithemes.com" target="_blank">AliThemes</a> | All rights reserved
                </p> */}
            </div>
        </div>
    </footer>
    </>
    
  )
}

export default Footer