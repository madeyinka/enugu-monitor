import React, {useState, useEffect} from 'react'
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
    {/* <div className="featured-1">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 text-right d-none d-lg-block">
                        <img src="assets/imgs/authors/statue.png" alt="/" />
                    </div>
                    <div className="col-lg-6 align-self-center">
                        <p className="text-muted"><span className="typewrite d-inline" data-period="2000" data-type='[ " Business. ", "Politics. ", "Entertainment. ", "Interviews. " ]'></span></p>
                        <h2>Welcome to <span>Enugu</span></h2>
                        <h3 className="mb-20"> Coal City State</h3>
                        <h5 className="text-muted">Don't miss out on the latest news about Travel tips, Hotels review, Food guide...</h5>
                        <form className="input-group form-subcriber mt-30 d-flex">
                            <input type="email" className="form-control bg-white font-small" placeholder="Enter your email" />
                            <button className="btn bg-primary text-white" type="submit">Subscribe</button>
                        </form>
                    </div>
                    
                </div>
            </div>
        </div> */}
        <div className="container">
            <div className="hot-tags pt-30 pb-30 font-small align-self-center">
                <div className="widget-header-3">
                    <div className="row align-self-center">
                        <div className="col-md-4 align-self-center">
                            <h5 className="widget-title">Featured posts</h5>
                        </div>
                        <div className="col-md-8 text-md-right font-small align-self-center">
                            <p className="d-inline-block mr-5 mb-0"><i className="elegant-icon  icon_tag_alt mr-5 text-muted"></i>Hot tags:</p>
                            <ul className="list-inline d-inline-block tags">
                                <li className="list-inline-item"><a href="#">#2023Elections</a></li>
                                <li className="list-inline-item"><a href="#">#NigeriaDecides</a></li>
                                <li className="list-inline-item"><a href="#">#ASUU Strike</a></li>
                                <li className="list-inline-item"><a href="#">#Insecurity</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="loop-grid mb-30">
                <div className="row">
                    <div className="col-lg-8 mb-30">
                        <div className="carausel-post-1 hover-up border-radius-10 overflow-hidden transition-normal position-relative wow fadeInUp animated">
                            <div className="arrow-cover"></div>
                            <div className="slide-fade">
                                {slider?.length > 0 ?
                                slider?.map((item) => {
                                  return (
                                    <div className="position-relative post-thumb" key={item.id}>
                                    <div className="thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                                        <a className="img-link" href={"/content/"+item.slug+"/"+item.id}></a>
                                        <span className="top-left-icon bg-warning"><i className="elegant-icon icon_star_alt"></i></span>
                                        <div className="post-content-overlay text-white ml-30 mr-30 pb-30">
                                            <div className="entry-meta meta-0 font-small mb-20">
                                                {item.keywords?.length > 0 ? 
                                                item.keywords?.map((i) => {
                                                  return (<a href="/" key={i.value + "_npk"}><span className="post-cat text-info text-uppercase">{i.label}</span></a>)
                                                }) : null}
                                            </div>
                                            <h3 className="post-title font-weight-900 mb-20">
                                                <a className="text-white" href={"/content/"+item.slug+"/"+item.id}>{item.title}</a>
                                            </h3>
                                            <div className="entry-meta meta-1 font-small text-white mt-10 pr-5 pl-5">
                                                <span className="post-on">{timeDiff(item.date_added)}</span>
                                                {/* <span className="hit-count has-dot">23k Views</span> */}
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
                      return (<article className="col-lg-4 col-md-6 mb-30 wow fadeInUp animated" data-wow-delay="0.4s" key={item.id}>
                      <div className="post-card-1 border-radius-10 hover-up">
                          <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                              <a className="img-link" href={"/content/"+item.slug+"/"+item.id}></a>
                          </div>
                          <div className="post-content p-30">
                              <div className="entry-meta meta-0 font-small mb-10">
                                <a href="/"><span className="post-cat text-info">{item.category.label}</span></a>
                                  {/* <a href="category.html"><span className="post-cat text-success">
                                    {item.keywords.length > 0 ? item?.keywords.map(i => {
                                      return (<a href="/"><span className="post-cat text-info text-uppercase">{i}</span></a>)
                                    }) : null}
                                  </span></a> */}
                              </div>
                              <div className="d-flex post-card-content">
                                  <h5 className="post-title mb-20 font-weight-900">
                                      <a href={"/content/"+item.slug+"/"+item.id}>{item.title}</a>
                                  </h5>
                                  <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                      <span className="post-on">{dateFormatter(item.date_added)}</span>
                                      <span className="time-reading has-dot">{timeDiff(item.date_added)}</span>
                                      {/* <span className="post-by has-dot">1.2k views</span> */}
                                  </div>
                              </div>
                          </div>
                      </div>
                  </article>)
                    }):null}
                    
                </div>
            </div>
        </div>
        <div className="bg-grey pt-50 pb-50">
          <div className="container">
            <div className="row">
              <div className="col-lg-8">
                <div className="post-module-2">
                  <div className="widget-header-1 position-relative mb-30  wow fadeInUp animated">
                    <h5 className="mt-5 mb-30">Latest</h5>
                  </div>
                  <div className="loop-list loop-list-style-1">
                    <div className="row">
                     { latestPosts?.length > 0 ? 
                     latestPosts?.map((item) => {
                     return (<article className="col-md-6 mb-40 wow fadeInUp  animated" key={item.id}>
                        <div className="post-card-1 border-radius-10 hover-up">
                          <div className="post-thumb thumb-overlay img-hover-slide position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                            <a className="img-link" href={"/content/"+item.slug+"/"+item.id}></a>
                            </div>
                            <div className="post-content p-30">
                              <div className="entry-meta meta-0 font-small mb-10">
                              <a href="/"><span className="post-cat text-info">{item.category.label}</span></a>
                                {/* {item.keywords?.length > 0 ? item.keywords.map((i) => {
                                  return ()
                                }) : null} */}
                              </div>
                              <div className="d-flex post-card-content">
                                <h5 className="post-title mb-20 font-weight-900">
                                  <a href={"/content/"+item.slug+"/"+item.id}>{item.title.slice(0, 52)}</a>{item.title.length > 52 ? "..." : ""}
                                </h5>
                                <div className="post-excerpt mb-25 font-small text-muted">
                                  <span dangerouslySetInnerHTML={{__html:item?.content.slice(0, 150)}}></span>
                                </div>
                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                  <span className="post-on">{dateFormatter(item.date_added)}</span>
                                  <span className="time-reading has-dot">{timeDiff(item.date_added)}</span>
                                  {/* <span className="post-by has-dot">23k views</span> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>)}) : null}
                      </div>
                    </div>
                </div>
              </div>
              <div className="col-lg-4">
                    <Widget />
              </div>
            </div>
          </div>
        </div>
        
    </>
  )
}

export default Home