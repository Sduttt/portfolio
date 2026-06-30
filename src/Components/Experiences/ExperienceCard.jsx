import React from 'react'

function ExperienceCard({ title, org, start, end, desc }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 w-full max-w-sm">
      <h3 className="text-md font-semibold text-gray-800 dark:text-gray-100">{title}</h3>
      <p className="text-sm text-gray-500 dark:text-gray-300">{org}</p>
      <p className="text-xs text-gray-400 mt-1">{start} - {end}</p>
      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">{desc}</p>
    </div>
  )
}

export default ExperienceCard
