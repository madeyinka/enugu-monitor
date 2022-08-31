import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import useContent from '../hook/useContext'
import Widget from '../component/Widget'
import {timeDiff, dateFormatter} from '../Util/index'

function Home() {
  const {content} = useContent()
  const [slider, setSlider] = useState([])
  const [featured, setFeatured] = useState([])

   useEffect(() => {
    const feature = content?.filter((item) => {
      return item.post_settings.featured ? item : null
    })
    setFeatured(feature.slice(0,4))

    const slide = content?.filter((item) => {
      return item.post_settings.slider ? item : null
    })
    setSlider(slide.slice(0,1))
   },[content])

   const latestPosts = content.slice(0, 4)
 
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
                                {slider?.length > 0 ?
                                slider?.map((item) => {
                                  return (
                                    <div class="position-relative post-thumb" key={item.id}>
                                    <div class="thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                                        <a class="img-link" href={"/content/"+item.slug+"/"+item.id}></a>
                                        <span class="top-left-icon bg-warning"><i class="elegant-icon icon_star_alt"></i></span>
                                        <div class="post-content-overlay text-white ml-30 mr-30 pb-30">
                                            <div class="entry-meta meta-0 font-small mb-20">
                                                <a href="category.html"><span class="post-cat text-info text-uppercase">Travel</span></a>
                                                <a href="category.html"><span class="post-cat text-success text-uppercase">Animal</span></a>
                                            </div>
                                            <h3 class="post-title font-weight-900 mb-20">
                                                <a class="text-white" href={"/content/"+item.slug+"/"+item.id}>{item.title}</a>
                                            </h3>
                                            <div class="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span class="post-on">{timeDiff(item.date_added)}</span>
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
                    {featured?.length > 0 ? 
                    featured?.map((item) => {
                      return (<article class="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.4s" key={item.id}>
                      <div class="post-card-1 border-radius-10 hover-up">
                          <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                              <a class="img-link" href="/"></a>
                          </div>
                          <div class="post-content p-30">
                              <div class="entry-meta meta-0 font-small mb-10">
                                  {/* <a href="category.html"><span class="post-cat text-success">
                                    {item.keywords.length > 0 ? item?.keywords.map(i => {
                                      return (<a href="/"><span class="post-cat text-info text-uppercase">{i}</span></a>)
                                    }) : null}
                                  </span></a> */}
                              </div>
                              <div class="d-flex post-card-content">
                                  <h5 class="post-title mb-20 font-weight-900">
                                      <a href="single.html">{item.title}</a>
                                  </h5>
                                  <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                      <span class="post-on">{dateFormatter(item.date_added)}</span>
                                      <span class="time-reading has-dot">{timeDiff(item.date_added)}</span>
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
                    <h5 class="mt-5 mb-30">Latest</h5>
                  </div>
                  <div class="loop-list loop-list-style-1">
                    <div class="row">
                     { latestPosts?.length > 0 ? 
                     latestPosts?.map((item) => {
                     return (<article class="col-md-6 mb-40 wow fadeInUp  animated">
                        <div class="post-card-1 border-radius-10 hover-up">
                          <div class="post-thumb thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                            <a class="img-link" href="/"></a>
                            </div>
                            <div class="post-content p-30">
                              <div class="entry-meta meta-0 font-small mb-10">
                                {latestPosts.keywords?.length > 0 ? latestPosts.keywords.map((item) => {
                                  return (<a href="category.html"><span class="post-cat text-info">{item}</span></a>)
                                }) : null}
                              </div>
                              <div class="d-flex post-card-content">
                                <h5 class="post-title mb-20 font-weight-900">
                                  <a href="single.html">{item.title.slice(0, 50)}</a>{item.title.length > 35 ? "..." : ""}
                                </h5>
                                <div class="post-excerpt mb-25 font-small text-muted">
                                  <span dangerouslySetInnerHTML={{__html:item?.content.slice(0, 150)}}></span>
                                </div>
                                <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span class="post-on">27 August</span>
                                  <span class="time-reading has-dot">12 mins read</span>
                                  {/* <span class="post-by has-dot">23k views</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>)}) : null}
                      </div>
                    </div>
                </div>
              </div>
              <div class="col-lg-4">
                    <Widget />
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Home