import { Flex, Box } from "@chakra-ui/react";
import Footer from "./Component/Footer";
import Navbar from "./Component/Navbar";
import Home from "./Pages/Home";
import MainRoutes from "./Routes/MainRoutes";

function App() {
  return (
    <div>
    <Navbar/>
     <MainRoutes/>
     
      <Footer/>
     
    
    </div>
  );
}

export default App;
