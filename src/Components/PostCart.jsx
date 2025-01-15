
export default function PostCart({post}) {
  return (
    <div className="card">
      <p className="title">{post.title}</p>
      <p className="description">{post.description}</p>
      <p className="control">
        <span className="author">{post.author}</span>
        <span className="delete"><i className="bi bi-trash3"></i></span>
      </p>
    </div>
  )
}
