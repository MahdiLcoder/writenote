import { addDoc } from "firebase/firestore"
import { postsCollectionRef, auth } from "../config/firebase"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function CreatePost() {

    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [userName, setUserName] = useState(null);

    useEffect(() => {
      const user = auth.currentUser;
      if (user) {
        setUserName(user.displayName); 
      } else {
        setUserName(null);
      }
    },)
    const addPost = async(e)=>{
        e.preventDefault();
        try{
            if(title && description){
                await addDoc(postsCollectionRef,{
                    title,
                    description,
                    userName
                    
                })
                setDescription("")
                setTitle("")
                navigate("/");
            }
        }catch(err){
            console("error")
        }
    }
  return (
    <section className="create">
      <div className="heading">
        <h1>Add new Post</h1>
      </div>
      <form className="createPost" onSubmit={addPost}>
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required onChange={(e)=> setTitle(e.target.value)} value={title}/>
        <textarea name="description"  className="description" placeholder="description" maxLength="600" required onChange={(e)=>setDescription(e.target.value)} value={description}></textarea>
        <button className="submit">Create </button>
      </form>
    </section>
  )
}
