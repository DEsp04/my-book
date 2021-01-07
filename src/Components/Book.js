import './Book.css';


function Book(props) { 
  console.log("props", props)

  const { bookObj } = props;

  return (
    <div className="books"> 
      <h2>{bookObj.title}</h2>
      <div className="flex">
        <img src={bookObj.img} />
        <p>{bookObj.description}</p>
      </div>
    </div>

  );
}

export default Book