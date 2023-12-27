import React, {useState} from 'react'
import "./feed.css"
import { PageContainer } from '@ant-design/pro-layout';
import Share from '../share/Share';
import Post, { PostType } from '../post/Post';
import { Posts } from '../../dummyData';





  const Feed: React.FC = () => {
    const [posts, setPosts] = useState<PostType[]>(Posts);
  
    const addPost = (newPost: PostType) => {
      // Update the posts state with the new post
      setPosts([newPost, ...posts]);
    };

  return (
    <PageContainer pageHeaderRender={false}>
    <div  className='feed'>
        <div  className='feedWrapper'>
          <Share addPost={addPost}/>
          {Posts.map((post:PostType)=>(
              <Post key={post.id} post={post}/>
          ))}
        
        
        

          </div>
    </div>
    </PageContainer>
  )
}

export default Feed