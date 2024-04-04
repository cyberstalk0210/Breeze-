import './searchBar.css'

const SearchBar = () => {

  return (
    <div className=' container-fluid  search-bar '>
      <form action="" role='search' className='d-flex search-form'>
        <input type="search" name='search' className='form-control' placeholder='Search for Sities' />
        <button type="submit" class="btn btn-primary" >search </button>
      </form>
    </div>
  )
}

export default SearchBar