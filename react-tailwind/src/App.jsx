import Navbar from "./components/navbar"

function App() {
  return (
    <>
     <Navbar />
     <div>Hello World</div>
     <button className="bg-orange-300 p-2 rounded-md ml-10 border border-black hover:bg-orange-900 md:bg-orange-500 animate-bounce hover:border-red-600">Submit</button>
    </>
  )
}

export default App
