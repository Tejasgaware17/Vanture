import { useOutletContext } from 'react-router-dom'

export default function HostVanInfo() {
  const { van } = useOutletContext()
  return (
    <div className="mt-6 space-y-2">
      <p>
        <span className="font-bold">Name:</span> {van.name}
      </p>
      <p>
        <span className="font-bold">Category:</span> {van.type}
      </p>
      <p>
        <span className="font-bold">Description:</span> {van.description}
      </p>
      <p>
        <span className="font-bold">Visibility:</span> Public
      </p>
    </div>
  )
}
