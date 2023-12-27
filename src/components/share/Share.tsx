import React, {useState} from 'react'
import "./share.css"
import { PageContainer } from '@ant-design/pro-layout';
import { TfiWrite } from "react-icons/tfi";
import ProCard, { ProCardType } from '@ant-design/pro-card/es/ProCard';
import { PostType } from '../post/Post';


interface ShareProps {
 addPost: (newPost: PostType) => void; 
}


const Share: React.FC<ShareProps> = ({ addPost }) => {
 

  const [text, setText]=useState("");
  const [posts, setPosts] = useState<string[]>([]);

  const handleChange =(e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  

    setText('');
   
  }

  
  const handleShare = () => {
    const newPost: PostType = {
      id:  5+Math.floor(Math.random() * 1000),
      userName: "Edward",
      desc: text,
      photo: "https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600", // You can set a default photo or fetch it from somewhere
      time: new Date().toLocaleDateString(),
      userId: 7, // Assuming a default user ID for now
      like: 0,
      bookmark: 0,
      comment: 0,
  };
  addPost(newPost);
  setText('');
}


  return (
    <PageContainer>
        <ProCard layout="center" className='share'>

        <div className="shareWrapper">
            <div className='shareTop'>
             <img className='profileImage' src='https://images.pexels.com/photos/1704488/pexels-photo-1704488.jpeg?auto=compress&cs=tinysrgb&w=600'/> 
            <input placeholder='Whats on your mind' value={text} onChange={(e)=> setText(e.target.value)}
              className='shareInput'/>
             
            </div>
            <hr className='shareHr'/>
            <div className='shareBottom'>
                <div className="shareOptions">
                    <div className="shareOption">
                        <TfiWrite className='shareIcon'/>
                        <span className="shareOptionText">Add text here</span>
                    </div>
                    <div className="shareOption">
                        <TfiWrite className='shareIcon'/>
                        <span className="shareOptionText">Add text here</span>
                    </div>
                    <div className="shareOption">
                        <TfiWrite className='shareIcon'/>
                        <span className="shareOptionText">Add text here</span>
                    </div>
                     <div className="shareOption">
                        <TfiWrite className='shareIcon'/>
                        <span className="shareOptionText">Add text here</span>
                    </div>
                    </div>
                    <button className='shareButton' onClick={handleShare}>Share</button>
            </div>
   
    </div>
 
    </ProCard>

    </PageContainer>
  )
}

export default Share