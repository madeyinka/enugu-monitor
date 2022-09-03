import React, {useState, useEffect} from 'react'
import useContent from '../hook/useContext'
import {dateFormatter, timeDiff} from './../Util'

function Widget() {
    const {content} = useContent()
    const [popular, setPopular] = useState([])

    useEffect(() => {
        const newData = content.filter((item) => {
            return item.post_settings.popular ? item : null
        })
        setPopular(newData)
    },[content])
  return (
    <>
    <div className="widget-area">
        <div className="sidebar-widget widget-latest-posts mb-50 wow fadeInUp animated">
            <div className="widget-header-1 position-relative mb-30">
                <h5 className="mt-5 mb-30">Most popular</h5>
            </div>
            <div className="post-block-list post-module-1">
                <ul className="list-post">
                    {popular.length > 0 ? 
                        popular.map((item) => {
                            return (<li className="mb-30 wow fadeInUp animated" key={item._id}>
                            <div className="d-flex bg-white has-border p-25 hover-up transition-normal border-radius-5">
                                <div className="post-content media-body">
                                    <h6 className="post-title mb-15 text-limit-2-row font-medium"><a href="single.html">{item.title}</a></h6>
                                    <div className="entry-meta meta-1 float-left font-x-small text-uppercase">
                                        <span className="post-on">{dateFormatter(item.date_added)}</span>
                                        <span className="post-by has-dot">{timeDiff(item.date_added)}</span>
                                    </div>
                                </div>
                                <div className="post-thumb post-thumb-80 d-flex ml-15 border-radius-5 img-hover-scale overflow-hidden">
                                    <a className="color-white" href="single.html">
                                        <img src={item.image} alt="" />
                                    </a>
                                </div>
                            </div>
                        </li>)
                        }):null}
                </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Widget