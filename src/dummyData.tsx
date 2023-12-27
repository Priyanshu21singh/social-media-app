 
 
interface User {
  id: number;
  profilePicture: string;
  userName: string;
}

interface Post {
  id: number;
  desc: string;
  photo: string;
  time: string;
  userId: number;
  like: number;
  bookmark: number;
  comment: number;
}
  {/*export const Users = [
    {id:1,
    profilePicture:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
    userName:"John Doe",
     },
    {id:2,
        profilePicture:"https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600",
        userName:"Dave Brag",
    },
    {id:3,
        profilePicture:"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
        userName:"Kate Williams",
          },
        {id:4,
            profilePicture:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
            userName:"Matt",
              },
              {id:5,
                profilePicture:"https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600",
                userName:"Steve",
                  }
    
]
*/}

export const Posts= [
  {id:1,
    desc:"Heyy! What a wonderful day. This is my first post. Please like and share.",
    photo:"https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600",
    time:"11/12/23",
    userId:1,
    userName:"John Doe",
    like:20,
    bookmark:7,
    comment:3,
  },
  {id:2,
    desc:"Financial freedom is the best medicine in the world",
    photo:"https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600",
    time:"09/12/23",
    userId:2,
    userName:"Matt Roger",
    like:22,
    bookmark:10,
    comment:2,
  },
  {id:3,
    desc:"Financial freedom is the best medicine in the world",
    photo:"https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600",
    time:"07/12/23",
    userId:3,
    userName:"Melisa",
    like:21,
    bookmark:5,
    comment:4,
  },
  {id:4,
    desc:"Love for all, hatred for none",
    photo:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    time:"06/12/23",
    userId:4,
    userName:"Peter",
    like:13,
    bookmark:3,
    comment:3,
  },
  {id:5,
    desc:"Love for all, hatred for none",
    photo:"https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    time:"06/12/23",
    userId:5,
    userName:"Heath Matthew",
    like:13,
    bookmark:3,
    comment:5,
  }
  
]



{/* export const Users: User[] = [
  { id: 1, profilePicture: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600", userName: "John Doe" },
  { id: 2, profilePicture: "https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600", userName: "Dave Brag" },
  { id: 3, profilePicture: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600", userName: "Kate Williams" },
  { id: 4, profilePicture: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", userName: "Matt" },
  { id: 5, profilePicture: "https://images.pexels.com/photos/810775/pexels-photo-810775.jpeg?auto=compress&cs=tinysrgb&w=600", userName: "Steve" }
];

export const Posts: Post[] = [
  { id: 1, desc: "Heyy! What a wonderful day. This is my first post. Please like and share.", photo: "https://images.pexels.com/photos/1759531/pexels-photo-1759531.jpeg?auto=compress&cs=tinysrgb&w=600", time: "11/12/23", userId: 1, like: 20, bookmark: 7, comment: 3 },
  { id: 2, desc: "Financial freedom is the best medicine in the world", photo: "https://images.pexels.com/photos/1759530/pexels-photo-1759530.jpeg?auto=compress&cs=tinysrgb&w=600", time: "09/12/23", userId: 2, like: 22, bookmark: 10, comment: 2 },
  { id: 3, desc: "Financial freedom is the best medicine in the world", photo: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=600", time: "07/12/23", userId: 3, like: 21, bookmark: 5, comment: 4 },
  { id: 4, desc: "Love for all, hatred for none", photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", time: "06/12/23", userId: 4, like: 13, bookmark: 3, comment: 3 },
  { id: 5, desc: "Love for all, hatred for none", photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600", time: "06/12/23", userId: 5, like: 13, bookmark: 3, comment: 5 }
];
*/}