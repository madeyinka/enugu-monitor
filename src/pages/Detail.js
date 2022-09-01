import React, {useState, useEffect} from 'react'
import Axios from '../hook/Axios'
import {timeDiff, dateFormatter} from '../Util/index'
import {useParams} from 'react-router-dom'
import useContent from '../hook/useContext'
import Widget from '../component/Widget'

function Detail() {
    const {content} = useContent()
    const {id} = useParams()
    const [item, setItem] = useState({})

    useEffect(() => {
        let isMounted = true
        content?.forEach((i) => {
            if (i.id === id){
               isMounted && setItem(i)
            } 
        })
        return () => {
            isMounted = false
        }
    },[content])
    

  return (
  <>
  <div class="bg-grey pt-50 pb-50">
    <div class="container">
        <div class="row">
            <div class="col-lg-8">
                <div class="single-content2">
                    <div class="entry-header entry-header-style-1 mb-50">
                        <h1 class="entry-title mb-30 font-weight-900">
                            {item.title}
                        </h1>
                        {/* <div class="row">
                            <div class="col-md-6">
                                <div class="entry-meta align-items-center meta-2 font-small color-muted">
                                    <p class="mb-5">
                                        <a class="author-avatar" href="#"><img class="img-circle" src="../../assets/imgs/authors/author-3.jpg" alt="" /></a>
                                            By <a href="/"><span class="author-name font-weight-bold">{item.author}</span></a>
                                    </p>
                                    <span class="mr-10"> {dateFormatter(item.date_added)}</span>
                                    <span class="has-dot"> {timeDiff(item.date_added)}</span>
                                </div>
                            </div>
                            <div class="col-md-6 text-right d-none d-md-inline">
                                <ul class="header-social-network d-inline-block list-inline mr-15">
                                    <li class="list-inline-item text-muted"><span>Share this: </span></li>
                                    <li class="list-inline-item"><a class="social-icon fb text-xs-center" target="_blank" href="#"><i class="elegant-icon social_facebook"></i></a></li>
                                    <li class="list-inline-item"><a class="social-icon tw text-xs-center" target="_blank" href="#"><i class="elegant-icon social_twitter "></i></a></li>
                                    <li class="list-inline-item"><a class="social-icon pt text-xs-center" target="_blank" href="#"><i class="elegant-icon social_pinterest "></i></a></li>
                                </ul>
                            </div>
                        </div>    */}
                    </div>
                    <figure class="image mb-30 m-auto text-center border-radius-10">
                        <img class="border-radius-10" src={item.image} alt="" />
                    </figure>
                    <article class="entry-wraper mb-50">
                        {item.short_content && <div class="excerpt mb-30">
                            <p>{item.short_content}</p>
                        </div>}
                        <div class="entry-main-content dropcap wow fadeIn animated">
                            <span dangerouslySetInnerHTML={{__html: item.content}}></span>
                        </div>
                        <div class="entry-bottom mt-50 mb-30 wow fadeIn animated">
                            <div class="tags">
                                <span>Tags: </span>
                                {item.keywords?.length > 0 ? 
                                item.keywords.map((i) => {
                                    return (<a href="/" rel="tag" key={i.value}>{i.label}</a>)
                                }): null}
                            </div>
                        </div>
                        {/* <div class="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                            <div class="author-image mb-30">
                                <a href="http://demos.alithemes.com/html/stories/demo/author.html"><img src="assets/imgs/authors/author-3.jpg" alt="" class="avatar" /></a>
                            </div>
                            <div class="author-info">
                                <h4 class="font-weight-bold mb-20"><span class="vcard author"><span class="fn"><a href="http://demos.alithemes.com/html/stories/demo/author.html" title="Posted by Barbara Cartland" rel="author">Barbara Cartland</a></span></span>
                                </h4>
                                <h5 class="text-muted">About author</h5>
                                <div class="author-description text-muted">You should write because you love the shape of stories and sentences and the creation of different words on a page. </div>
                                <a href="http://demos.alithemes.com/html/stories/demo/author.html" class="author-bio-link mb-md-0 mb-3">View all posts (125)</a>
                                <div class="author-social">
                                    <ul class="author-social-icons">
                                        <li class="author-social-link-facebook"><a href="#" target="_blank"><i class="ti-facebook"></i></a></li>
                                        <li class="author-social-link-twitter"><a href="#" target="_blank"><i class="ti-twitter-alt"></i></a></li>
                                        <li class="author-social-link-pinterest"><a href="#" target="_blank"><i class="ti-pinterest"></i></a></li>
                                        <li class="author-social-link-instagram"><a href="#" target="_blank"><i class="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div class="related-posts">
                            <div class="post-module-3">
                                <div class="widget-header-2 position-relative mb-30">
                                    <h5 class="mt-5 mb-30">Related posts</h5>
                                </div>
                                <div class="loop-list loop-list-style-1">
                                    <article class="hover-up-2 transition-normal wow fadeInUp  animated">
                                        <div class="row mb-40 list-style-2">
                                            <div class="col-md-4">
                                                <div class="post-thumb position-relative border-radius-5">
                                                    <div class="img-hover-slide border-radius-5 position-relative" style={{"backgroundImage": "url(../../assets/imgs/news/news-13.jpg)"}}>
                                                        <a class="img-link" href="single.html"></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-md-8 align-self-center">
                                                <div class="post-content">
                                                    <div class="entry-meta meta-0 font-small mb-10">
                                                        <a href="category.html"><span class="post-cat text-primary">Food</span></a>
                                                    </div>
                                                    <h5 class="post-title font-weight-900 mb-20">
                                                        <a href="single.html">Helpful Tips for Working from Home as a Freelancer</a>
                                                        <span class="post-format-icon"><i class="elegant-icon icon_star_alt"></i></span>
                                                    </h5>
                                                    <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span class="post-on">7 August</span>
                                                        <span class="time-reading has-dot">11 mins read</span>
                                                        <span class="post-by has-dot">3k views</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div class="col-lg-4 primary-sidebar sticky-sidebar">
                <Widget />
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Detail