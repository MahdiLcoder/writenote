import { Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import CreatePost from "../pages/CreatePost"
import PageNotFound from "../pages/PageNotFound"
export default function AllRoutes() {
  return (
    <main>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/create" element = {<CreatePost />} />
        <Route path="*" element = {<PageNotFound />} />
      </Routes>
    </main>
  )
}
