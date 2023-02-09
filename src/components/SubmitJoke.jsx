import React, { useState }  from 'react'; 

const SubmitJoke = () => { 
  const [jokeData, setJokeData] = useState({
    joke:"",
    category:"",
    language:"",
  })

  function handleChange(e) { 
    const {name, value} = e.target
    setJokeData(prevJoke => (
      {
        ...prevJoke,
        [name]: value
      }
    ))
  }

  function resetInput(){
    setJokeData(prevJoke => (
      {
        ...prevJoke, 
        joke: ""
      }
    ))
  }
  
  async function submitJoke(){
    console.log(jokeData)
    resetInput()

    if(jokeData.joke === ""){
      alert("Please input your joke")
    } else {
      try {
        const response = await fetch("https://jokes.araopj.tech/v1/submit", {
          method: "POST",
          body: JSON.stringify(jokeData),
          headers: {
            "Content-Type": "application/json"
          },
        })
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const responseJSON = await response.text();
        console.log("Success: ", responseJSON)
      } catch (error) {
        console.error("Error: ", error)
      }
    }
  }
 
  return ( 
  <div className="w-[95%] py-8 sm:w-[450px] border-slate-400 border-[1px] absolute z-10 flex justify-center items-center bg-white rounded-[10px]">
    <div className=" flex flex-col px-[2rem] gap-2 w-[100%]"> 
      <h1 className="font-bold text-[1.5rem] text-center">Submit your funny joke</h1>

      <label htmlFor="joke">Joke</label>
      <input id="joke" value={jokeData.joke} onChange={handleChange} type="text" name="joke" className='outline-none'/> 

      <label className="custom-label" htmlFor="category">Category:</label>
      <select
        className="border-slate-400 rounded border-[1px] outline-none  p-[.5rem]"
        name="category"
        id="category"
        value={jokeData.category}
        onChange={handleChange}
      > 
        <option value="DAD_JOKE">Dad Joke</option>
        <option value="PUN">Pun</option>
        <option value="KNOCK_KNOCK">Knock knock</option>
        <option value="ONE_LINER">One liner</option>
      </select>

      <label className="custom-label" htmlFor="language">Language:</label>
      <select
        name="language"
        id="language"
        className="border-slate-400 rounded border-[1px] outline-none p-[.5rem] "
        value={jokeData.language}
        onChange={handleChange}
      >
        <option value="ENGLISH">English</option>
        <option value="TAGALOG">Tagalog</option>
      </select>

      <button onClick={submitJoke} className=" bg-green-600 hover:bg-green-400 text-white py-2 mt-4 rounded-[5px] outline-slate-700">Submit Joke</button> 
    </div> 
  </div>
  )
} 

export default SubmitJoke