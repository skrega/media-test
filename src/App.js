import { BrowserRouter } from "react-router-dom";
import Board from "./layout/Board/Board";
import MenuPanel from "./components/MenuPanel/MenuPanel";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="grid xl:grid-cols-[220px_1fr]">
          <MenuPanel />
          <Board />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
