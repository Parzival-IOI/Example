
const Search = (param:{placeholder: string }) => {
  return (
    <input type="text" placeholder={param.placeholder} className="px-3 py-1 rounded-md caret-amber-600 accent-amber-500 bg-inherit"/>
  )
}

export default Search