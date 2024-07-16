import "./App.css";
import {
  AccordionComponentRendering,
  ModalComponentRendering,
  CarouselComponentRendering,
} from "./ComponentRendering";

function App() {
  return (
    <div className="app__container">
      <h1>React Machine Coding</h1>

      <div>
        <ModalComponentRendering />
        <AccordionComponentRendering />
        <CarouselComponentRendering />
      </div>
    </div>
  );
}

export default App;
