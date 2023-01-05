export default function Newscard(blog) {
    
  
  
  
  console.log(blog);
  return (
    <div className="section2-list" key={obj.id}>
        <img src={blog.img} alt="blog img" />
        <p>{obj.date}</p>
        <h4>{obj.title}</h4>
        <p>{obj.text}</p>
        <p>READ MORE</p>
    </div>
  )
}
