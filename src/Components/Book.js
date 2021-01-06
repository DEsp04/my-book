import './Book.css';

function Book(prop) { 
  return (
    <div className="books"> 
      <h2>{prop.title }</h2>
      <img src='{img}' />
      <p>{prop.description}</p>
    </div>

  );
}

export default Book