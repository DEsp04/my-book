import Book from "./Components/Book"
import Footer from "./Components/Footer"
import Header from "./Components/Header"
import faker from 'faker';

function App() {
  return (
    <div className="App">
      <Header />
      <Book title="The Power of Now" description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore nostro patentium. Ne sea summo deleniti Ea omnes nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis quaestio enum eu." img={faker.image.image()} />
      <Book title="The Alchemist" description="Lorem dolor sit amet, an sea omnis luptaum, ea consul iudicabit duo. Cu enim lucilus vic, ut pri decore nostro patentium. Ne sea summo deleniti Ea omnes
      nominati pro. At vis propriae consequat torquantos, ex facer oratio mel. Quodsi tritani appareat his ei, atqui facilis
      quaestio enum eu." img={faker.image.image()} />
      <Footer />
    </div>
  );
}

export default App;
