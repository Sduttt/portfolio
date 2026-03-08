/* eslint-disable react/prop-types */

const AchivementCard = ({ title, org, img, date, desc, onOpen }) => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto px-2 py-4">
        <button
          type="button"
          onClick={() => onOpen && onOpen()}
          className="bg-white cursor-pointer dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm h-72 sm:h-80 md:h-96 flex flex-col w-full text-left">
          <div className="w-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
            <img
              className="max-h-40 sm:max-h-44 md:max-h-56 object-contain"
              alt={title}
              src={img}
            />
          </div>
          <div className="p-4 flex flex-col grow justify-between text-center">
            <h1 className="text-lg sm:text-xl font-zen mb-2 text-gray-700 dark:text-gray-200">
              {title}
            </h1>
            <div className="flex text-gray-500 justify-center text-xs sm:text-sm flex-wrap">
              <p className="mx-2">
                <span className="dark:text-gray-400 text-gray-600">Date:</span> {date}
              </p>
              <p className="mx-2">
                <span className="text-gray-600 dark:text-gray-400">Organization:</span> {org}
              </p>
            </div>
            <p className="mt-2 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
              {desc}
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default AchivementCard;
