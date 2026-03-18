export default function VanFilters({ typeFilter, handleFilterChange }) {
  const filterTypes = ['simple', 'luxury', 'rugged']

  return (
    <fieldset className="my-4 flex gap-4 flex-wrap">
      <legend className="sr-only">Filter vans by type</legend>

      {filterTypes.map(type => (
        <button
          key={type}
          type="button"
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
          type="button"
          className="text-sm underline text-text-light ml-2"
          onClick={() => handleFilterChange('type', null)}
        >
          Clear filters
        </button>
      )}
    </fieldset>
  )
}
