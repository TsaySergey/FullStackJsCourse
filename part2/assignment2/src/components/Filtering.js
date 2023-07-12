
const Filtering = ({newFiltering, handleFilter}) => {
 
  return (
    <div> 
      filter shown with <input value={newFiltering} 
      onChange={handleFilter} />
    </div>
  )
}

export default Filtering