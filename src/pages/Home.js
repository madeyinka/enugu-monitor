import React, {useState, useEffect} from 'react'
import {postData} from './PostData'

function Home() {
  const [data, setData] = useState(postData)
  const [slider, setSlider] = useState([])
  const [sticky, setSticky] = useState([])

  useEffect(() => {
    let isMounted = true
    const controller = new AbortController()
    const sliderFilter = async () => {
      const response = data?.filter((item) => {
        return item.post_settings.slider === true
      })
      isMounted && setSlider(response.slice(0,1))
    }
    sliderFilter()

    const stickyFilter = async () => {
      const response = data.filter((item) => {
        return item.post_settings.featured === true
      })
      isMounted && setSticky(response.slice(0,4))
    }
    stickyFilter()

    return () => {
      isMounted = false
      controller.abort()
    }
  },[data])
  return (
    <>
    <div class="featured-1">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6 text-right d-none d-lg-block">
                        <img src="assets/imgs/authors/statue.png" alt="/" />
                    </div>
                    <div class="col-lg-6 align-self-center">
                        <p class="text-muted"><span class="typewrite d-inline" data-period="2000" data-type='[ " Business. ", "Politics. ", "Entertainment. ", "Interviews. " ]'></span></p>
                        <h2>Welcome to <span>Enugu</span></h2>
                        <h3 class="mb-20"> Coal City State</h3>
                        <h5 class="text-muted">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</h5>
                        <form class="input-group form-subcriber mt-30 d-flex">
                            <input type="email" class="form-control bg-white font-small" placeholder="Enter your email" />
                            <button class="btn bg-primary text-white" type="submit">Subscribe</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div>
        <div class="container">
            <div class="hot-tags pt-30 pb-30 font-small align-self-center">
                <div class="widget-header-3">
                    <div class="row align-self-center">
                        <div class="col-md-4 align-self-center">
                            <h5 class="widget-title">Featured posts</h5>
                        </div>
                        <div class="col-md-8 text-md-right font-small align-self-center">
                            <p class="d-inline-block mr-5 mb-0"><i class="elegant-icon  icon_tag_alt mr-5 text-muted"></i>Hot tags:</p>
                            <ul class="list-inline d-inline-block tags">
                                <li class="list-inline-item"><a href="#"># 2023 Elections</a></li>
                                <li class="list-inline-item"><a href="#"># NigeriaDecides</a></li>
                                <li class="list-inline-item"><a href="#"># ASUU Strike</a></li>
                                <li class="list-inline-item"><a href="#"># Insecurity</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="loop-grid mb-30">
                <div class="row">
                    <div class="col-lg-8 mb-30">
                        <div class="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                            <div class="arrow-cover"></div>
                            <div class="slide-fade">
                                {slider.length > 0 ?
                                slider.map((item) => {
                                  return (
                                    <div class="position-relative post-thumb">
                                    <div class="thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                                        <a class="img-link" href="single.html"></a>
                                        <span class="top-left-icon bg-warning"><i class="elegant-icon icon_star_alt"></i></span>
                                        <div class="post-content-overlay text-white ml-30 mr-30 pb-30">
                                            <div class="entry-meta meta-0 font-small mb-20">
                                                {item.keywords.map(i => {
                                                  return (<a href="/"><span class="post-cat text-info text-uppercase">{i}</span></a>)
                                                })}
                                            </div>
                                            <h3 class="post-title font-weight-900 mb-20">
                                                <a class="text-white" href="single.html">{item.title}</a>
                                            </h3>
                                            <div class="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span class="post-on">{item.readtime}</span>
                                                {/* <span class="hit-count has-dot">23k Views</span> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                  )
                                }): null}
                            </div>
                        </div>
                    </div>
                    {sticky.length > 0 ? 
                    sticky.map((item) => {
                      return (<article class="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.4s">
                      <div class="post-card-1 border-radius-10 hover-up">
                          <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                              <a class="img-link" href="/"></a>
                              {/* <span class="top-right-icon bg-info"><i class="elegant-icon icon_headphones"></i></span> */}
                              {/* <ul class="social-share">
                                  <li><a href="#"><i class="elegant-icon social_share"></i></a></li>
                                  <li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>
                                  <li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>
                                  <li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>
                              </ul> */}
                          </div>
                          <div class="post-content p-30">
                              <div class="entry-meta meta-0 font-small mb-10">
                                  <a href="category.html"><span class="post-cat text-success">
                                    {item.keywords.map(i => {
                                      return (<a href="/"><span class="post-cat text-info text-uppercase">{i}</span></a>)
                                    })}
                                  </span></a>
                              </div>
                              <div class="d-flex post-card-content">
                                  <h5 class="post-title mb-20 font-weight-900">
                                      <a href="single.html">{item.title}</a>
                                  </h5>
                                  <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                      <span class="post-on">15 Jun</span>
                                      <span class="time-reading has-dot">9 mins read</span>
                                      {/* <span class="post-by has-dot">1.2k views</span> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>)
                    }):null}
                    
                </div>
            </div>
        </div>
        <div class="bg-grey pt-50 pb-50">
          <div class="container">
            <div class="row">
              <div class="col-lg-8">
                <div class="post-module-2">
                  <div class="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                    <h5 class="mt-5 mb-30">Politics</h5>
                  </div>
                  <div class="loop-list loop-list-style-1">
                    <div class="row">
                      <article class="col-md-6 mb-40 wow fadeInUp  animated">
                        <div class="post-card-1 border-radius-10 hover-up">
                          <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"background-image": "url(assets/imgs/news/news-6.jpg)"}}>
                            <a class="img-link" href="single.html"></a>
                              <ul class="social-share">
                                <li><a href="#"><i class="elegant-icon social_share"></i></a></li>
                                <li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>
                                <li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>
                                <li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>
                              </ul>
                            </div>
                            <div class="post-content p-30">
                              <div class="entry-meta meta-0 font-small mb-10">
                                <a href="category.html"><span class="post-cat text-info">Artists</span></a>
                                <a href="category.html"><span class="post-cat text-success">Film</span></a>
                              </div>
                              <div class="d-flex post-card-content">
                                <h5 class="post-title mb-20 font-weight-900">
                                  <a href="single.html">Easy Ways to Use Alternatives to Plastic</a>
                                </h5>
                                <div class="post-excerpt mb-25 font-small text-muted">
                                  <p>Graduating from a top accelerator or incubator can be as career-defining for a&nbsp;startup founder&nbsp;as an elite university diploma. The intensive programmes, which…</p>
                                </div>
                                <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span class="post-on">27 August</span>
                                  <span class="time-reading has-dot">12 mins read</span>
                                  <span class="post-by has-dot">23k views</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                        <article class="col-md-6 mb-40 wow fadeInUp  animated">
                          <div class="post-card-1 border-radius-10 hover-up">
                            <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"background-image": "url(assets/imgs/news/news-8.jpg)"}}>
                              <a class="img-link" href="single.html"></a>
                                <ul class="social-share">
                                  <li><a href="#"><i class="elegant-icon social_share"></i></a></li>
                                  <li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>
                                  <li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>
                                  <li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>
                                </ul>
                              </div>
                              <div class="post-content p-30">
                                <div class="entry-meta meta-0 font-small mb-10">
                                  <a href="category.html"><span class="post-cat">Fashion</span></a>
                                </div>
                                <div class="d-flex post-card-content">
                                  <h5 class="post-title mb-20 font-weight-900">
                                    <a href="single.html">Tips for Growing Healthy, Longer Hair</a>
                                  </h5>
                                  <div class="post-excerpt mb-25 font-small text-muted">
                                    <p>Proin vitae placerat quam. Ut sodales eleifend urna, in condimentum tortor ultricies eu. Nunc auctor iaculis dolorProin vitae placerat quam. Proin vitae placerat quam.</p>
                                  </div>
                                  <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                    <span class="post-on">12 August</span>
                                    <span class="time-reading has-dot">6 mins read</span>
                                    <span class="post-by has-dot">3k views</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </article>
                          <article class="col-md-6 mb-40 wow fadeInUp  animated">
                            <div class="post-card-1 border-radius-10 hover-up">
                              <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"background-image": "url(assets/imgs/news/news-10.jpg)"}}>
                                <a class="img-link" href="single.html"></a>
                                <span class="top-right-icon bg-secondary"><i class="elegant-icon icon_heart_alt"></i></span>
                                  <ul class="social-share">
                                    <li><a href="#"><i class="elegant-icon social_share"></i></a></li>
                                    <li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>
                                    <li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>
                                    <li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>
                                  </ul>
                                </div>
                                <div class="post-content p-30">
                                  <div class="entry-meta meta-0 font-small mb-10">
                                    <a href="category.html"><span class="post-cat text-success">Lifestyle</span></a>
                                  </div>
                                  <div class="d-flex post-card-content">
                                    <h5 class="post-title mb-20 font-weight-900">
                                      <a href="single.html">Project Ideas Around the House</a>
                                    </h5>
                                    <div class="post-excerpt mb-25 font-small text-muted">
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempor condimentum metus non tempor. Maecenas non augue aliquam, facilisis lectus quis, lacinia risus.</p>
                                    </div>
                                    <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                      <span class="post-on">27 August</span>
                                      <span class="time-reading has-dot">12 mins read</span>
                                      <span class="post-by has-dot">23k views</span>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </article>
                            <article class="col-md-6 mb-40 wow fadeInUp  animated">
                              <div class="post-card-1 border-radius-10 hover-up">
                                <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"background-image": "url(assets/imgs/news/news-12.jpg)"}}>
                                  <a class="img-link" href="single.html"></a>
                                    <ul class="social-share">
                                      <li><a href="#"><i class="elegant-icon social_share"></i></a></li>
                                      <li><a class="fb" href="#" title="Share on Facebook" target="_blank"><i class="elegant-icon social_facebook"></i></a></li>
                                      <li><a class="tw" href="#" target="_blank" title="Tweet now"><i class="elegant-icon social_twitter"></i></a></li>
                                      <li><a class="pt" href="#" target="_blank" title="Pin it"><i class="elegant-icon social_pinterest"></i></a></li>
                                    </ul>
                                </div>
                                <div class="post-content p-30">
                                  <div class="entry-meta meta-0 font-small mb-10">
                                    <a href="category.html"><span class="post-cat text-danger">Hotels</span></a>
                                  </div>
                                  <div class="d-flex post-card-content">
                                    <h5 class="post-title mb-20 font-weight-900">
                                      <a href="single.html">How to Give Yourself a Spa Day from Home</a>
                                    </h5>
                                                    <div class="post-excerpt mb-25 font-small text-muted">
                                                        <p>Graduating from a top accelerator or incubator can be as career-defining for a&nbsp;startup founder&nbsp;as an elite university diploma. The intensive programmes, which…</p>
                                                    </div>
                                                    <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span class="post-on">18 August</span>
                                                        <span class="time-reading has-dot">14 mins read</span>
                                                        <span class="post-by has-dot">25k views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                </div>
              </div>
              <div class="col-lg-4">
                    {/* sidebar */}
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Home