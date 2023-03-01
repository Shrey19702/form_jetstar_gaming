import Footer from "./components/Footer";
import FormInput from "./components/FormInput";
import Navbar from "./components/Navbar";
function App() {
  return (
    <div>
        <Navbar/>
      <div className=" bg-wallpaper bg-auto bg-center h-[100vh]">
        <FormInput/>
      </div>
        <Footer/>
    </div>
  );
}

export default App;
