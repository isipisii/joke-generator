import { useState } from 'react'
import Jokes from './components/Jokes'
import Options from './components/Options'
import SubmitJoke from './components/SubmitJoke'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  const [joke, setJoke] = useState("There's no joke yet")
  const [jokeOptions, setJokeOptions] = useState({
    category: "",
    language: ""
  })
  const [loading, setLoading] = useState(false)
  const [toggle, setToggle] = useState(false)
 
  async function fetchJokes(){
    setLoading(true)
    setJoke("Generating joke...")
    try { 
      const response = await fetch(`https://jokes.araopj.tech/v1/random?category=${jokeOptions.category}&language=${jokeOptions.language}`)
      const data = await response.json() 
      setJoke(data.joke)
    } catch(error) { 
      console.log(error)
    }
    setLoading(false)
  }

  return (
    <main className="h-[100vh] flex justify-center flex-col items-center border-black relative">
      <div className="flex justify-center flex-col gap-5 items-center sm:w-[600px] ">
        <div>
          <h1 className="text-yellow-500 font-bold 
          sm:text-[3rem] text-[2.2rem] text-center">Random Joke Generator</h1>
          <p className="text-center sm:text-[0.8rem] 
          text-[0.7rem] font-medium">Joke generator that will let you choose what language and category you want.</p>
        </div>
        <Options 
          setJokeOptions={setJokeOptions} 
          jokeOptions={jokeOptions}
        />
        <Jokes
          loading={loading}
          joke={joke}
          handleClick={fetchJokes}
        />
      </div>

    {/* Submit form toggler */} 
      <FontAwesomeIcon 
        icon={faPlus}
        className="absolute bottom-4 right-4 cursor-pointer px-4 py-2 rounded text-white bg-green-600 hover:bg-green-400"
        onClick={() => setToggle( toggle => !toggle)}
      />

    {toggle && <SubmitJoke />}
    </main>
  )
  }
export default App