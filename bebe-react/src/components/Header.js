export default function Header({headList}){
    console.log(headList);
    return(
        <header>
          <div className="headerLogo">
            <img src={require("../image/Leap.png")} alt="" />
            <img
              src={require("../image/Rectangle114.png")}
              className="purple"
              alt=""
            />
          </div>
          <div className="headerList">
            {headList.map((obj) => {
              return (
                <div key={obj.id}>
                  <p>{obj.title}</p>
                </div>
              );
            })}
          </div>
        </header>
    )
}