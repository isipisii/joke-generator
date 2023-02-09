
const Jokes = ({ joke, handleClick, loading }) => {
  return (
    <div className="flex flex-col justify-center items-center text-center gap-5">
      <h1 className="text-[1.5rem] px-5 py-1">{joke}</h1>
      <button onClick={handleClick} className="text-white bg-green-600 hover:bg-green-400 px-6 py-2 font-normal rounded">{ loading ? "Generating Joke" : "Get a joke"}</button>
    </div>
    
  )
}

export default Jokes