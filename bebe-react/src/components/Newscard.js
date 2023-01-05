export default function Newscard({id, img, title, date, text}) {
    // console.log(id, img, title, date, text);
  return (
    <div className="section2-list" key={id}>
        <img src={img} alt="blog img" />
        <p>{date}</p>
        <h4>{title}</h4>
        <p>{text}</p>
        <p>READ MORE</p>
    </div>
  )
}
