import pageNotFound from "../assets/images/page-not-found.jpg"
import { Link } from "react-router-dom"
export default function PageNotFound() {
  return (
    <section className="pageNotFound">
        <p>404 Page Note Found</p>
        <img src={pageNotFound} alt="page not found" /> 
        <Link to="/">
            <button>Back To Home</button>
        </Link>
    </section>
  )
}
