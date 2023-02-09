
const Options = ({ setJokeOptions, jokeOptions  }) => {

  const handleChange = e =>{
    const {name, value} = e.target
    setJokeOptions(prevJokeOp => {
      return{
        ...prevJokeOp,
        [name]: value
      }
    })
  }

  return (
    // game options container
    <div className="joke-options-container flex flex-col gap-2"> 
        <div className="flex gap-4">
          
         <label className="custom-label" htmlFor="category">Category:</label>

         <select
          className="border-slate-400 rounded border-[1px] outline-none p-1"
          name="category"
          id="category"
          value={jokeOptions.category}
          onChange={handleChange}
          >
            <option value="DAD_JOKE">Dad Joke</option>
            <option value="PUN">Pun</option>
            <option value="KNOCK_KNOCK">Knock knock</option>
            <option value="ONE_LINER">One liner</option>
          </select>

        </div>
        
        <div className="flex gap-4">
          
         <label className="custom-label" htmlFor="language">Language:</label>

         <select
          name="language"
          id="language"
          className="border-slate-400 rounded border-[1px] outline-none p-1"
          value={jokeOptions.language}
          onChange={handleChange}
          >
            <option value="TAGALOG">Tagalog</option>
            <option value="ENGLISH">English</option>
          </select>

        </div>    
    </div>
  )
}

export default Options