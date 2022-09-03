import React, {useState, useEffect} from 'react'
import useContent from '../hook/useContext'
import {useParams} from "react-router-dom"
import Widget from '../component/Widget'

function Category() {
    const {content, categories} = useContent()
    const {slug, id} = useParams()
    const [category, setCategory] = useState({})
    const [articles, setArticles] = useState([])

    useEffect(() => {
        const item = categories.find(s => s.slug === slug)
        setCategory(item)
    },[categories, slug])

    useEffect(() => {
        const post = content.filter(({category}) => category?.value === id)
        post.length > 0 ? setArticles(post) : setArticles(null)
    },[content, id])
    
    return (
        <>
        <div class="archive-header pt-50">
            <div class="container">
                <h2 class="font-weight-900">{category?.label}</h2>
                <div class="breadcrumb">
                    <a href="/" rel="nofollow">Home</a>
                    <span></span> {category?.label}
                </div>
                <div class="bt-1 border-color-1 mt-30 mb-50"></div>
            </div>
        </div>
        {articles?.length > 0 ? <div class="pb-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-8">
                        <div class="post-module-3">
                            <div class="loop-list loop-list-style-1">
                                { articles?.length > 0 ?
                                articles.map((item) => {
                                    return (<article class="hover-up-2 transition-normal wow fadeInUp animated">
                                    <div class="row mb-40 list-style-2">
                                        <div class="col-md-4">
                                            <div class="post-thumb position-relative border-radius-5">
                                                <div class="img-hover-slide border-radius-5 position-relative" style={{"backgroundImage": `url(${item.image})`}}>
                                                    <a class="img-link" href="single.html"></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-md-8 align-self-center">
                                            <div class="post-content">
                                                <div class="entry-meta meta-0 font-small mb-10">
                                                {item.keywords?.length > 0 ? 
                                                item.keywords?.map((i) => {
                                                  return (<a href="/" key={i.value + "_npk"}><span className="post-cat text-info text-uppercase">{i.label}</span></a>)
                                                }) : null}
                                                </div>
                                                <h5 class="post-title font-weight-900 mb-20">
                                                    <a href="single.html">{item.title}</a>
                                                    {/* <span class="post-format-icon"><i class="elegant-icon icon_star_alt"></i></span> */}
                                                </h5>
                                                <div class="entry-meta meta-1 float-left font-x-small text-uppercase">
                                                    <span class="post-on">7 August</span>
                                                    <span class="time-reading has-dot">11 mins read</span>
                                                    <span class="post-by has-dot">3k views</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </article>)
                                }): null }
                                
                            </div>
                        </div> 
                    </div>
                    <div class="col-lg-4">
                        <Widget />
                    </div>
                </div>
            </div>
        </div>: <div class="container bg-grey pt-80 pb-50">
            <div class="row pt-80">
                <div class="col-lg-6 col-md-12 d-lg-block d-none pr-50"><img src="../../assets/imgs/theme/page-not-found.png" alt="" /></div>
                <div class="col-lg-6 col-md-12 pl-50 text-md-center text-lg-left">
                    <h1 class="mb-30 font-weight-900 page-404">404</h1>
                    {/* <form action="#" method="get" class="search-form d-lg-flex open-search mb-30">
                        <i class="icon-search"></i>
                        <input class="form-control" name="name" id="name" type="text" placeholder="Search...">
                    </form> */}
                    <p class="">The link you clicked may be broken or the page may have been removed.<br /> visit the <a href="index.html">Homepage</a> or <a href="page-contact.html">Contact us</a> about the problem
                    </p>
                    <div class="form-group">
                        <button type="submit" class="button button-contactForm mt-30"><a class="text-white" href="index.html">Home page</a></button>
                    </div>
                </div>
            </div>
        </div>}
        </>
    )
}

export default Category