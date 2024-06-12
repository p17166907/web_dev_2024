import { NavBar } from "./components/NavBar-component";
import { Search } from "./components/Search-component";
import { NumResults } from "./components/NumResults-component";

function App() {
  return (
    < >
      <NavBar>
        <Search />
        <NumResults />
      </NavBar>
    </>
  );
}

export default App;
