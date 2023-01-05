

export default function Mainlist({mainList}) {
    console.log(mainList);
  return (
    <div className="mainList">
    {mainList.map((e) => {
      return (
        <div key={e.id}>
          <p>{e.category}</p>
        </div>
      );
    })}
  </div>
  )
}
