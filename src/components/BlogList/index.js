import BlogItem from '../BlogItem'
import './index.css'

const BlogsList = props => {
  const {blogsList} = props
  return (
    <ul className="blog-list-container">
      {blogsList.map(eachBlog => (
        <BlogItem eachBlog={eachBlog} key={eachBlog.id} />
      ))}
    </ul>
  )
}

export default BlogsList
