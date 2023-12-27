import './comments.css'

const Comments = () => {

    const comments = [
        {
            id:1,
            desc:"What a wonderful post !",
            name: "John Doe",
            userId:1,
            profilePic:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",

        },
        {
            id:2,
            desc:"Nice thought, hope to see you around",
            name: "Matt Roger",
            userId:2,
            profilePic:"https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600",

        },
        {
            id:3,
            desc:"What a wonderful post !",
            name: "Melisa",
            userId:3,
            profilePic:"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",

        },
        {
            id:4,
            desc:"Amazing dude",
            name: "Peter",
            userId:4,
            profilePic:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",

        },

    ]
  return (
    <div className='comments'>
       { comments.map(comments=>(
        <div className='comment'>
            <div>
            <img className='commentImg' src={comments.profilePic}/>
            <div className='info'>
                <span className='topInfo'>{comments.name}</span>
                <p>{comments.desc}</p>
            </div>
            </div>
            <div>
            <span className='topInfo'>1 hour ago</span>
            </div>
        </div>
       ))
}
    </div>
  )
}

export default Comments