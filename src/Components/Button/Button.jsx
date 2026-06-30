/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

const btnClass = "px-6 py-1 hover:bg-transparent border-2 border-gray-900 dark:border-[#50DBB4] hover:text-gray-900 text-lg font-bold rounded-lg transition-colors duration-300 transform bg-gray-900 dark:bg-[#50DBB4] dark:text-gray-900 text-gray-100 focus:border-4 focus:border-black dark:hover:bg-cyan-300 dark:hover:border-cyan-300";

const Button = ({ text, url, target = '_blank' }) => {
    const isInternal = url && url.startsWith('/');

    return (
        <div className="flex flex-wrap place-items-center">
            {isInternal ? (
                <Link to={url} className={btnClass}>
                    {text}
                </Link>
            ) : (
                <a
                    href={url}
                    target={target}
                    rel="noopener noreferrer"
                    className={btnClass}
                >
                    {text}
                </a>
            )}
        </div>
    );
};

export default Button;