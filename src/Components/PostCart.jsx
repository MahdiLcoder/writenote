import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../config/firebase";

export default function PostCart({ post }) {
    const handleDelete = async (id) => {
        try {
            const docRef = doc(db, "posts", id);
            await deleteDoc(docRef);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div className="card">
            <p className="title">{post.title}</p>
            <p className="description">{post.description}</p>
            <p className="control">
                <span className="author">{post.userName}</span>
                <span className="delete" onClick={() => handleDelete(post.id)}>
                    <i className="bi bi-trash3"></i>
                </span>
            </p>
        </div>
    );
}
