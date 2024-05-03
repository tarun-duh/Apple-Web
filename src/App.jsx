import Hero from "./Components/Hero";
import Highlights from "./Components/Highlights";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <main className="bg-black ">
        <Navbar />
        <Hero />
        <Highlights />
      </main>
    </>
  );
}

export default App;
