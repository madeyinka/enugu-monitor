import React, {useState, useEffect} from 'react'
import {timeDiff, dateFormatter} from '../Util/index'
import {useParams} from 'react-router-dom'
import useContent from '../hook/useContext'
import Widget from '../component/Widget'

function Detail() {
    const {content} = useContent()
    const {id} = useParams()
    const [item, setItem] = useState({})
    const [related, setRelated] = useState()

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

   useEffect(()=>{
    const relatedPosts = content?.filter((i) => {
        return (i._id !== content?._id) ? item : null
    })
    setRelated(relatedPosts.slice(0,3))
   },[item, content])
    

  return (
  <>
  <div className="bg-grey pt-50 pb-50">
    <div className="container">
        <div className="row">
            <div className="col-lg-8">
                <div className="single-content2">
                    <div className="entry-header entry-header-style-1 mb-50">
                        <h1 className="entry-title mb-30 font-weight-900">
                            {item.title}
                        </h1>
                        {/* <div className="row">
                            <div className="col-md-6">
                                <div className="entry-meta align-items-center meta-2 font-small color-muted">
                                    <p className="mb-5">
                                        <a className="author-avatar" href="#"><img className="img-circle" src="../../assets/imgs/authors/author-3.jpg" alt="" /></a>
                                            By <a href="/"><span className="author-name font-weight-bold">{item.author}</span></a>
                                    </p>
                                    <span className="mr-10"> {dateFormatter(item.date_added)}</span>
                                    <span className="has-dot"> {timeDiff(item.date_added)}</span>
                                </div>
                            </div>
                            <div className="col-md-6 text-right d-none d-md-inline">
                                <ul className="header-social-network d-inline-block list-inline mr-15">
                                    <li className="list-inline-item text-muted"><span>Share this: </span></li>
                                    <li className="list-inline-item"><a className="social-icon fb text-xs-center" target="_blank" href="#"><i className="elegant-icon social_facebook"></i></a></li>
                                    <li className="list-inline-item"><a className="social-icon tw text-xs-center" target="_blank" href="#"><i className="elegant-icon social_twitter "></i></a></li>
                                    <li className="list-inline-item"><a className="social-icon pt text-xs-center" target="_blank" href="#"><i className="elegant-icon social_pinterest "></i></a></li>
                                </ul>
                            </div>
                        </div>    */}
                    </div>
                    <figure className="image mb-30 m-auto text-center border-radius-10">
                        <img className="border-radius-10" src={item.image} alt="" />
                    </figure>
                    <article className="entry-wraper mb-50">
                        {item.short_content && <div className="excerpt mb-30">
                            <p>{item.short_content}</p>
                        </div>}
                        <div className="entry-main-content dropcap wow fadeIn animated">
                            <span dangerouslySetInnerHTML={{__html: item.content}}></span>
                        </div>
                        <div className="entry-bottom mt-50 mb-30 wow fadeIn animated">
                            <div className="tags">
                                <span>Tags: </span>
                                {item.keywords?.length > 0 ? 
                                item.keywords.map((i) => {
                                    return (<a href="/" rel="tag" key={i.value}>{i.label}</a>)
                                }): null}
                            </div>
                        </div>
                        {/* <div className="author-bio p-30 mt-50 border-radius-10 bg-white wow fadeIn animated">
                            <div className="author-image mb-30">
                                <a href="http://demos.alithemes.com/html/stories/demo/author.html"><img src="assets/imgs/authors/author-3.jpg" alt="" className="avatar" /></a>
                            </div>
                            <div className="author-info">
                                <h4 className="font-weight-bold mb-20"><span className="vcard author"><span className="fn"><a href="http://demos.alithemes.com/html/stories/demo/author.html" title="Posted by Barbara Cartland" rel="author">Barbara Cartland</a></span></span>
                                </h4>
                                <h5 className="text-muted">About author</h5>
                                <div className="author-description text-muted">You should write because you love the shape of stories and sentences and the creation of different words on a page. </div>
                                <a href="http://demos.alithemes.com/html/stories/demo/author.html" className="author-bio-link mb-md-0 mb-3">View all posts (125)</a>
                                <div className="author-social">
                                    <ul className="author-social-icons">
                                        <li className="author-social-link-facebook"><a href="#" target="_blank"><i className="ti-facebook"></i></a></li>
                                        <li className="author-social-link-twitter"><a href="#" target="_blank"><i className="ti-twitter-alt"></i></a></li>
                                        <li className="author-social-link-pinterest"><a href="#" target="_blank"><i className="ti-pinterest"></i></a></li>
                                        <li className="author-social-link-instagram"><a href="#" target="_blank"><i className="ti-instagram"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div> */}
                        <div className="related-posts">
                            <div className="post-module-3">
                                <div className="widget-header-2 position-relative mb-30">
                                    <h5 className="mt-5 mb-30">Related posts</h5>
                                </div>
                                <div className="loop-list loop-list-style-1">
                                    {related?.length > 0 ?
                                    related.map((item) => {
                                        return (<article className="hover-up-2 transition-normal wow fadeInUp  animated" key={item._id}>
                                        <div className="row mb-40 list-style-2">
                                            <div className="col-md-4">
                                                <div className="post-thumb position-relative border-radius-5">
                                                    <div className="img-hover-slide border-radius-5 position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                                                        <a className="img-link" href={"/content/"+item.slug+"/"+item.id}></a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-8 align-self-center">
                                                <div className="post-content">
                                                    <div className="entry-meta meta-0 font-small mb-10">
                                                        <a href="category.html"><span className="post-cat text-primary">{item.category.label}</span></a>
                                                    </div>
                                                    <h5 className="post-title font-weight-900 mb-20">
                                                        <a href={"/content/"+item.slug+"/"+item.id}>{item.title}</a>
                                                        <span className="post-format-icon"><i className="elegant-icon icon_star_alt"></i></span>
                                                    </h5>
                                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                        <span className="post-on">{dateFormatter(item.date_added)}</span>
                                                        <span className="time-reading has-dot">{timeDiff(item.date_added)}</span>
                                                        {/* <span className="post-by has-dot">3k views</span> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </article>)
                                    }) : null}
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </div>
            <div className="col-lg-4 primary-sidebar sticky-sidebar">
                <Widget />
            </div>
        </div>
    </div>
  </div>
  </>
  )
}

export default Detail