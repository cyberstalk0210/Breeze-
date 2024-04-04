
import './searchBar.css'
const SearchBar = ({ searchHandler }) => {

  function ChangeValue(e) {
    searchHandler(e)
    console.log(e);
  }
  return (
    <div className=' container-fluid  search-bar '>
      <form action="" role='search' className='d-flex search-form'>
        <input type="search" name='search' className='form-control' placeholder='Search for Sities' onSubmit={(e) => ChangeValue(e.target.value)} />
        <button type="submit" class="btn btn-primary"  >search</button>
      </form>
    </div>
  )
}

export default SearchBar