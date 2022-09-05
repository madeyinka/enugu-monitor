import React, {useState, useEffect} from 'react'
import useContent from '../hook/useContext'
import {useParams} from "react-router-dom"
import Widget from '../component/Widget'

function Category() {
    const {content, categories} = useContent()
    const {slug} = useParams()
    const [category, setCategory] = useState({})
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const item = categories.find(s => s.slug === slug)
        setCategory(item)
    },[categories, slug])

    useEffect(() => {
        const post = content.filter(({category}) => category?.value === slug)
        setArticles(post)
    },[content, slug])
    
    return (
        <>
        <div className="archive-header pt-50">
            <div className="container">
                <h2 className="font-weight-900">{category?.label}</h2>
                <div className="breadcrumb">
                    <a href="/" rel="nofollow">Home</a>
                    <span></span> {category?.label}
                </div>
                <div className="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
        </div>
        {articles?.length > 0 ? <div className="pb-50">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="post-module-3">
                            <div className="loop-list loop-list-style-1">
                                { articles?.length > 0 ?
                                articles.map((item) => {
                                    return (<article className="hover-up-2 transition-normal wow fadeInUp animated">
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
                                                {item.keywords?.length > 0 ? 
                                                item.keywords?.map((i) => {
                                                  return (<a href="/" key={i.value + "_npk"}><span className="post-cat text-info text-uppercase">{i.label}</span></a>)
                                                }) : null}
                                                </div>
                                                <h5 className="post-title font-weight-900 mb-20">
                                                    <a href={"/content/"+item.slug+"/"+item.id}>{item.title}</a>
                                                    {/* <span className="post-format-icon"><i className="elegant-icon icon_star_alt"></i></span> */}
                                                </h5>
                                                <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span className="post-on">7 August</span>
                                                    <span className="time-reading has-dot">11 mins read</span>
                                                    <span className="post-by has-dot">3k views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>)
                                }): null }
                                
                            </div>
                        </div> 
                    </div>
                    <div className="col-lg-4">
                        <Widget />
                    </div>
                </div>
            </div>
        </div>: <div className="container bg-grey pt-80 pb-50">
            <div className="row pt-80">
                <div className="col-lg-6 col-md-12 d-lg-block d-none pr-50"><img src="../../assets/imgs/theme/page-not-found.png" alt="" /></div>
                <div className="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
                    <h1 className="mb-30 font-weight-900 page-404">404</h1>
                    {/* <form action="#" method="get" className="search-form d-lg-flex open-search mb-30">
                        <i className="icon-search"></i>
                        <input className="form-control" name="name" id="name" type="text" placeholder="Search...">
                    </form> */}
                    <p className="">The link you clicked may be broken or the page may have been removed.<br /> visit the <a href="index.html">Homepage</a> or <a href="page-contact.html">Contact us</a> about the problem
                    </p>
                    <div className="form-group">
                        <button type="submit" className="button button-contactForm mt-30"><a className="text-white" href="index.html">Home page</a></button>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Category