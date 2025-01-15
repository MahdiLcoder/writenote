import PostCart from "../Components/PostCart"
export default function HomePage() {
    const posts = [
        {id:1, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo quae doloremque dolores animi dolorem est, odit a laboriosam facere perspiciatis, explicabo nostrum ut! Sed, molestiae? Cumque, tempore animi. Nulla repudiandae consequuntur praesentium sequi non? Earum vero ab inventore illo voluptatem eos fugiat temporibus recusandae. Earum consequatur vel deserunt perferendis.", author: "Mahdi"},
        {id:2, title: "Lorem ipsum dolor sit amet.", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id illo quae doloremque dolores animi dolorem est, odit a laboriosam facere perspiciatis, explicabo nostrum ut! Sed, molestiae? Cumque, tempore animi. Nulla repudiandae consequuntur praesentium sequi non? Earum vero ab inventore illo voluptatem eos fugiat temporibus recusandae. Earum consequatur vel deserunt perferendis.", author: "Mahdi"}
    ]
  return (
    <section>
      {
        posts.map((item)=>{
            return <PostCart key={item.id} post={item} />
        })
      }
    </section>
  )
}
