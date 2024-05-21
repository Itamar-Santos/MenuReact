import Header from "./components/header";
import ListarTarefa from "./pages/tarefa/ListarTarefa";
import AnchorTemporaryDrawer from "./pages/Login/Menu/menu";
import { Login } from "@mui/icons-material";


function App() {
  return (
    <div className="App">
      <Header />
        
      <ListarTarefa />
     <Login />
     <AnchorTemporaryDrawer />
    </div>
  );
}

export default App;
