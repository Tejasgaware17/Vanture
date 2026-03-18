import { useOutletContext } from 'react-router-dom'

export default function HostVanPhotos() {
  const { van } = useOutletContext()

  return (
    <div className="mt-6">
      <img
        src={van.imageUrl}
        alt={`Image of ${van.name} camper van`}
        className="w-32 sm:w-64 rounded-lg"
      />
    </div>
  )
}
