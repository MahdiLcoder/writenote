
export default function CreatePost() {
  return (
    <section className="create">
      <div className="heading">
        <h1>Add new Post</h1>
      </div>
      <form className="createPost">
        <input type="text" className="title" name="title" placeholder="Title" maxLength="50" required/>
        <textarea name="description"  className="description" dirName="description" placeholder="description" maxLength="600" required ></textarea>
        <button className="submit">Create </button>
      </form>
    </section>
  )
}
