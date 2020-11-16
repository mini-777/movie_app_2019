import React from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import "./SearchMusic.css";
import Search from "../routes/Search";
import Modal from '../components/Modal/Modal';
import Detail from "../routes/Detail";

function SearchMusic({id, title, subtitle, url, images, me}){
    return (
       
        
        <div className="Music">
        <Link
        to={{
          pathname: `/music/${id}`,
          state: {
            id, title, subtitle, images, url
          }
        }}
      >
          {/* <a href="javascript:;" onClick={() => me.openModal(images, title, subtitle)}></a> */}
            <li>
            
                <img className="coverart" src={images} alt={title} title={title}></img>
                <div className="music__data">
                    <h3 className="music__title">{title.replace(/<b>/gi,"").replace(/<\/b>/gi,"")}</h3>
                    <p className="music__subtitle">
                        <span></span> {subtitle}
                    </p>
                </div>
            
            </li>
            {/* </a> */}
            </Link>
        </div>
        
       
    )
};


SearchMusic.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    images: PropTypes.string.isRequired,
};

export default SearchMusic;