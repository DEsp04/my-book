import './Book.css';


function Book(props) { 
  console.log("props", props)

  const { bookObj } = props;
  console.log("this is the books", bookObj)

  return (
    <div className="books"> 
      <h2>{bookObj.title}</h2>
      <div className="flex">
        <img src={bookObj.img} />
        <p>{bookObj.desc}</p>
      </div>
    </div>

  );
}

export default Book