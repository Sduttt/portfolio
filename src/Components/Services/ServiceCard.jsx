/* eslint-disable react/prop-types */
import 'animate.css';

function ServiceCard({ icon, title, description, techStack, accentColor }) {
  return (
    <div
      className={`
        relative group rounded-2xl overflow-hidden
        bg-white dark:bg-gray-800
        shadow-md hover:shadow-2xl
        border border-gray-100 dark:border-gray-700
        transition-all duration-400 ease-in-out
        hover:-translate-y-2
        flex flex-col
        animate__animated animate__fadeInUp
      `}
    >
      {/* Top accent bar */}
      <div className={`h-1.5 w-full ${accentColor}`} />

      <div className="p-6 sm:p-8 flex flex-col flex-1">
        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`
              w-14 h-14 rounded-xl flex items-center justify-center text-3xl
              bg-gray-100 dark:bg-gray-700
              group-hover:scale-110 transition-transform duration-300
            `}
          >
            {icon}
          </div>
          <h2 className="font-zen text-xl sm:text-2xl dark:text-white text-gray-800 leading-tight">
            {title}
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mb-6">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="mt-auto">
          <p className="text-xs font-nav uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-3">
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  px-3 py-1 rounded-full text-xs font-semibold
                  bg-gray-100 dark:bg-gray-700
                  text-gray-700 dark:text-gray-200
                  border border-gray-200 dark:border-gray-600
                  hover:border-gray-400 dark:hover:border-gray-400
                  transition-colors duration-200
                "
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ServiceCard;