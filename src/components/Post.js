import React from 'react';
import Faker from "faker";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEllipsisV, faHeart as faHeartSolid} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from "@fortawesome/free-regular-svg-icons";
import Comment from './Comment';
import './Post.css';

function getRandomPostTime() {
    return (Math.floor(Math.random() * 10) + 1) + 'h';
}
function getRandomLikeBtn() {
    return Faker.random.boolean() ?  <FontAwesomeIcon icon={faHeart}/> :  <FontAwesomeIcon style={{color: "red"}} icon={faHeartSolid}/>
}

const Post =  (props) => {
    console.log(props.comments);
    let username = props.username;
    return (
        <div className="Post">
            <div className="Post-header">
                <div className="Post-header-profile-image">
                    <img src={props.avatar} alt="Post Profile Image"/>
                </div>
                <div className="Post-header-username">
                    {username}
                </div>
                <div className="Post-header-more-btn">
                    <FontAwesomeIcon icon={faEllipsisV}/>
                </div>
            </div>
            <div className="Post-image">
                <img src={props.image} alt="Post Image"/>
            </div>
            <div className="Post-caption">
                <span className="Post-caption-username">{username}</span>
                {props.caption}
                <div className="Post-caption-time">
                    {props.time}
                </div>
            </div>
            <div className="Post-comments">
                {
                    props.comments.map(comment => {
                        return <Comment username={comment.username} avatar={comment.avatar} is-like={comment['is-like']} comment={comment.comment} time={comment.time}/>
                    })
                }
            </div>
        </div>
    );
};


export default Post;