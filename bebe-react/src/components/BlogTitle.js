
export default function BlogTitle() {
  return (
    <div className="section-1">
    <div className="blog-posts">
      <h1>Blog Posts</h1>
      <span>I think so, this is it.</span>
      <p>
        Design begins after I begin to think about how to present an
        experience most successfully, whether a button I put in can
        solve a problem. The only point in design is not ui design, if
        the user does not have a good experience at the end of the
        product, the design will be considered unsuccessful in my
        opinion.
      </p>
      <div className="links">
        <a href="#" className="twit">
          <i class="bi bi-twitter"></i> Twitter
        </a>
        <a href="#" className="link">
          <i class="bi bi-linkedin"></i> Linkedin
        </a>
        <a href="#" className="medi">
          <i class="bi bi-medium"></i> Medium
        </a>
      </div>
    </div>
    <div>
      <img src={require("../image/section1.png")} alt="" />
    </div>
  </div>
  )
}
