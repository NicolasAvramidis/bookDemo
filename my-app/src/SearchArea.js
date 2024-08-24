import React from 'react';

const SearchArea = (props) => {
  return (
    <div className="search-area">

      

      <form onSubmit={props.searchBook} action=''> 
      
        <input onChange={props.handleSearch} type='text' placeholder="Search Books"/>
        <button type='submit'>Search</button>
        <select defaultValue="Sort" onChange={props.handleSort}>
          <option disabled value="Sort">Sort</option>
          <option value="Newest">Newest</option>
          <option value={"Oldest"}>Oldest</option>
        </select>

        <button type='submit' className="random" onClick={props.randomBook}>Random To Read</button>
        <input onChange={props.handleUserID} type='text' placeholder="Enter User ID"/>
        <a href="https://developers.google.com/books/docs/v1/using#ids/#:~:text=When%20viewing%20your%20library%20on%20the%20site,%20you%20can%20find%20the%20user%20ID" target="_blank" rel="noreferrer" className='userLink'>How do I find my User ID?</a>
        

      </form>

    </div>

  );
}

export default SearchArea;