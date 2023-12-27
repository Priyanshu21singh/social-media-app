import React, { useState } from 'react'
import "./post.css"
import { PageContainer } from '@ant-design/pro-layout'
import { HiDotsVertical } from "react-icons/hi";
import ProCard from '@ant-design/pro-card';
import { AiFillLike } from "react-icons/ai";
import { FaRegBookmark } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import Comments from '../comments/Comments';


export interface PostType {
    id: number;
 
    desc: string;
    photo: string;
    time: string;
    userId: number;
    userName: string;
    like: number;
    bookmark: number;
    comment: number;
  }
  
  interface PostProps {
    post: PostType;
   
  }


const Post: React.FC<PostProps> = ({ post }) => {

const [commentOpen, setcommentOpen]= useState(false)

const [like,setLike]= useState(post.like);
const [isliked,setisLiked]= useState(false);

const [bookmark,setbookmark]= useState(post.bookmark);
const [isBookmarked,setisBookmarked]= useState(false);

const likeHandler = ()=>{
    setLike(isliked ? like-1 : like+1)
    setisLiked(!isliked)
}

const bookmarkHandler = ()=>{
    setbookmark(isBookmarked ? bookmark-1 : bookmark+1)
    setisBookmarked(!isBookmarked)
}

  return (
    <PageContainer>
      <ProCard className='post'>
    
        <div className='postWrapper'>
            <div className='postTop'>
                <div className='postTopLeft'>
                    <img className='postProfileImg' src={post.photo}/>
                    <span className='postUserName'>{post.userName}</span>
                    <span className='postDate'>{post.time}</span>
                </div>
                <div className='postTopRight'>
                   <HiDotsVertical/>
                </div>
            </div>
            <div className='postCenter'>{post.desc}</div>
            
            </div>
                <div className='postBottom'>
                <div className='postBottomLeft'>
                <FaRegHeart className='postBottomLike' onClick={likeHandler}/>
                <span className='likeButtonCounter'>{like}</span>
                <FaRegBookmark className='postBottomBookmark' onClick={bookmarkHandler}/>
                <span className='bookmarkButtonCounter'>{bookmark}</span>
                </div>
               <div className='postBottomRight' onClick={()=>setcommentOpen(!commentOpen)}>
                <FaRegComment className='postBottomComment' />
               <span className='postCommentsText'>{post.comment} comments</span>
                </div>
               
                </div>
                {commentOpen && <Comments/>}
  
    </ProCard>  
   {/* <ProCard className='post'>
    
    <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <img className='postProfileImg' src='https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                <span className='postUserName'>Dave Brag</span>
                <span className='postDate'>9/12/23</span>
            </div>
            <div className='postTopRight'>
               <HiDotsVertical/>
            </div>
        </div>
        <div className='postCenter'>Financial freedom is the best medicine in the world</div>
        
        </div>
            <div className='postBottom'>
            <div className='postBottomLeft'>
            <FaRegHeart className='postBottomLike'/>
            <span className='likeButtonCounter'>22</span>
            <FaRegBookmark className='postBottomBookmark'/>
            <span className='bookmarkButtonCounter'>10</span>
            </div>
           <div className='postBottomRight'>
            <FaRegComment className='postBottomComment'/>
           <span className='postCommentsText'>2 comments</span>
            </div>
            </div>

</ProCard>  
<ProCard className='post'>
    
    <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <img className='postProfileImg' src='https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                <span className='postUserName'>Kate Williams</span>
                <span className='postDate'>7/12/23</span>
            </div>
            <div className='postTopRight'>
               <HiDotsVertical/>
            </div>
        </div>
        <div className='postCenter'>Financial freedom is the best medicine in the world</div>
        
        </div>
            <div className='postBottom'>
            <div className='postBottomLeft'>
            <FaRegHeart className='postBottomLike'/>
            <span className='likeButtonCounter'>13</span>
            <FaRegBookmark className='postBottomBookmark'/>
            <span className='bookmarkButtonCounter'>3</span>
            </div>
           <div className='postBottomRight'>
            <FaRegComment className='postBottomComment'/>
           <span className='postCommentsText'>3 comments</span>
            </div>
            </div>

</ProCard>  
<ProCard className='post'>
    
    <div className='postWrapper'>
        <div className='postTop'>
            <div className='postTopLeft'>
                <img className='postProfileImg' src='https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600'/>
                <span className='postUserName'>Matt</span>
                <span className='postDate'>6/12/23</span>
            </div>
            <div className='postTopRight'>
               <HiDotsVertical/>
            </div>
        </div>
        <div className='postCenter'>Love for all hatred for none</div>
        
        </div>
            <div className='postBottom'>
            <div className='postBottomLeft'>
            <FaRegHeart className='postBottomLike'/>
            <span className='likeButtonCounter'>21</span>
            <FaRegBookmark className='postBottomBookmark'/>
            <span className='bookmarkButtonCounter'>5</span>
            </div>
           <div className='postBottomRight'>
            <FaRegComment className='postBottomComment'/>
           <span className='postCommentsText'>4 comments</span>
            </div>
            </div>

  </ProCard>  */}
    </PageContainer>
  )
}

export default Post