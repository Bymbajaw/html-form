import "./App.css";
import BlogTitle from "./components/BlogTitle";
import Header from "./components/Header";
import Mainlist from "./components/Mainlist";
import Newscard from "./components/Newscard";
import blog from "./data"

function App() {
  const headList = 
  [
    { id: 1, title: "PORTFOLIO" },
    { id: 2, title: "BLOG" },
    { id: 3, title: "CV" },
    { id: 4, title: "STORE" },
    { id: 5, title: "FREELANCE" },
    { id: 6, title: "ABOUT ME" },
    { id: 7, title: "CONTACT" },
  ];



  const mainList = 
  [
    { id: 1, category: "All" },
    { id: 2, category: "UI Design" },
    { id: 3, category: "UX Design" },
    { id: 4, category: "Product Design" },
    { id: 5, category: "Articles" },
    { id: 6, category: "Tutorials" },
    { id: 7, category: "News" },
  ];


  return (
    <div className="App">
      <div className="container">
        <Header headList={headList} />
        <main>
         <BlogTitle />
          <div className="section-2">
            <Mainlist mainList={mainList} />
            <div className="section2-aaa">
              {blog.map((obj)=>{
                console.log(obj);
                return <Newscard {...obj} />
              })}
            </div>
          </div>
        </main>
        <footer>
          <img src={require("./image/derel.png")} alt="" />
        </footer>
      </div>
    </div>
  );
}


export default App ;