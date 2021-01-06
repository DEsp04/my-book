import './Book.css';


function Book(prop) { 
  return (
    <div className="books"> 
      <h2>{prop.title}</h2>
      <div className="flex">
        <img src={prop.img} />
        <p>{prop.description}</p>
      </div>
    </div>

  );
}

export default Book