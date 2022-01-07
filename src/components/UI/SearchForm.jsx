function SearchForm({ query, setQuery, handleSearch }) {
  const handleSubmit = (e) => {
    e.preventDefault()
    handleSearch()
  }

  return (
    <form onSubmit={handleSubmit} className='form-search'>
      <label htmlFor='txtSearchInput' className='show-for-sr'>
        Search for a recipe
      </label>
      <input
        id='txtSearchInput'
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        placeholder='Search here...'
        type='text'
      />
      <button id='cmdSearch' type='submit' className='btn-search'>
        <span className='sicon-search'></span>
        <span className='show-for-sr'>Search</span>
      </button>
    </form>
  )
}

export default SearchForm
