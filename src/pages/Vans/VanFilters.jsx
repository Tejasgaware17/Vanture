export default function VanFilters({ typeFilter, handleFilterChange }) {
  const filterTypes = ['simple', 'luxury', 'rugged']

  return (
    <div className="my-4 flex gap-4 flex-wrap" role="group" aria-label="Filter vans by type">
      {filterTypes.map(type => (
        <button
          key={type}
          className="px-4 py-2 rounded-md text-sm font-medium bg-background-dark text-text transition hover:opacity-90 capitalize"
          style={
            typeFilter === type
              ? {
                  color: 'white',
                  backgroundColor: `var(--color-van-${type})`,
                }
              : null
          }
          onClick={() => handleFilterChange('type', type)}
          aria-pressed={typeFilter === type}
        >
          {type}
        </button>
      ))}

      {typeFilter && (
        <button
          className="text-sm underline text-text-light ml-2"
          onClick={() => handleFilterChange('type', null)}
          aria-label="Clear van type filter"
        >
          Clear filters
        </button>
      )}
    </div>
  )
}
