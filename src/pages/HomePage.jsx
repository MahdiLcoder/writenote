import { useEffect, useState } from "react"
import PostCart from "../Components/PostCart"
import { db } from "../config/firebase"
import { getDocs } from "firebase/firestore"
import { postsCollectionRef } from "../config/firebase"
import { Link } from "react-router-dom"
export default function HomePage({isAuth}) {

    const [posts, setPosts] = useState([])

    // const posts = [
    //     {id:1, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo quae doloremque dolores animi dolorem est, odit a laboriosam facere perspiciatis, explicabo nostrum ut! Sed, molestiae? Cumque, tempore animi. Nulla repudiandae consequuntur praesentium sequi non? Earum vero ab inventore illo voluptatem eos fugiat temporibus recusandae. Earum consequatur vel deserunt perferendis.", author: "Mahdi"},
    //     {id:2, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo quae doloremque dolores animi dolorem est, odit a laboriosam facere perspiciatis, explicabo nostrum ut! Sed, molestiae? Cumque, tempore animi. Nulla repudiandae consequuntur praesentium sequi non? Earum vero ab inventore illo voluptatem eos fugiat temporibus recusandae. Earum consequatur vel deserunt perferendis.", author: "Mahdi"}
    // ]
    useEffect(()=>{
        const getPosts = async() =>{
            try{
                const data = await getDocs(postsCollectionRef);
                const filteredPostes = data.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id
                  }));
                setPosts(filteredPostes);
            }catch(err){
                console.error("error");
            }
        }
        getPosts();
    },[posts])
  return (
    <section>
      {
        isAuth? posts.length === 0 ? <div style={{
          fontSize: 20,
          textAlign: "center",
          fontWeight: "bold",
          fontSize: 50
      }}>
          <p>There are no posts.</p>
      </div>
        : posts.map((item)=>{
          return <PostCart key={item.id} post={item} />
      })  
        : <div style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            fontSize: 50
        }}>
            <p>You Should Sign In</p>
        </div>
      }
    </section>
  )
}
