function Button({ url, text }) {
  return (
    <div className="flex flex-wrap place-items-center">
      <button className="px-6 py-1 hover:bg-transparent border-2 border-gray-900 hover:text-gray-900 text-lg rounded-lg transition-colors duration-300 transform bg-gray-900 text-gray-100 focus:border-4 focus:border-black">
        {" "}
        <a
          href={url}
          className="font-medium"
          target="_blank"
          rel="noopener noreferrer">
          {" "}
          {text}{" "}
        </a>{" "}
      </button>
    </div>
  );
}

export default Button;
