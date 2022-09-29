import React from 'react'
import { useGlobalContext } from './Context'
const Search = () => {
  const {query,setQuery, isError}=useGlobalContext();
  return (
    <>
    <section style={{textAlign: "center", margin:"20px"}}>
      <h2>Search a movie</h2>
      <form action="#" onSubmit={(e)=>e.preventDefault()}>
        <div>
          <input style={{border:"2px solid black",borderRadius:"15px",padding:"5px"}} type="text" placeholder="Search here" value={query} onChange={(e)=>setQuery(e.target.value)}/>
        </div>
      </form>
      <div>
        <p style={{color:"red"}}>{isError.show && isError.mssg}</p>
      </div>
    </section>
    </>
  )
}

export default Search
