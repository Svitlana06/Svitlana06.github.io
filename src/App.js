
import {Navigate, Route, Routes} from "react-router-dom";
import PokemonPage from "./pages/pokemon,page";
import {MainLayout} from "./components";


function App() {
  return (
    <div>
        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route index element={<Navigate to={'pokemon?offset=0'}/>}/>
                <Route path={'pokemon'} element={<PokemonPage/>}/></Route>

        </Routes>
    </div>
  );
}

export default App;
