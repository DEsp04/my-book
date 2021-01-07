import Book from "./Components/Book"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import faker from 'faker';
import Data from './Data'

function App() {
  //below is the JSON that's coming from the Data component
  console.log(Data);

  return (
    <div className="App">
      <Header />
      {/* <Book title="The Power of Now" description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore nostro patentium. Ne sea summo deleniti Ea omnes nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio enum eu." img={faker.image.image()} />
      <Book title="The Alchemist" description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore nostro patentium. Ne sea summo deleniti Ea omnes
      nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis
      quaestio enum eu." img={faker.image.image()} /> */}

      {
        Data.map((books) => {
          //Books is an array with object as element.
          return <Book bookObj={books} />
        })
      }
      <Footer />
    </div>
  );
}

export default App;
