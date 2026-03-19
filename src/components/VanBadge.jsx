import React from 'react'

function VanBadge({ type }) {
  return (
    <span
      className="inline-block px-4 py-2 mt-2 sm:mt-4 text-sm font-medium capitalize rounded text-white"
      style={{ backgroundColor: `var(--color-van-${type})` }}
    >
      {type}
    </span>
  )
}

export default React.memo(VanBadge)
