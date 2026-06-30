/* eslint-disable react/prop-types */
import 'animate.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const RESUME_URL =
  'https://docs.google.com/document/d/e/2PACX-1vSgnJpYmMi0XKQRdEOm17DWzk4mqj5gKtr8YTo_fG7WJ4Ku2FmmyCHS_MKJd6z2jQ/pub?embedded=true';

const RESUME_OPEN_URL =
  'https://docs.google.com/document/d/e/2PACX-1vSgnJpYmMi0XKQRdEOm17DWzk4mqj5gKtr8YTo_fG7WJ4Ku2FmmyCHS_MKJd6z2jQ/pub';

function Resume({ theme }) {
  return (
    <>
      <Navbar theme={theme} />

      {/* Header */}
      <section className="mt-10 mb-6 px-4 text-center animate__animated animate__fadeInDown">
        <h1 className="font-zen text-3xl sm:text-4xl dark:text-white text-gray-800">
          RESUME
        </h1>
        <p className="mt-3 text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Subham Dutta — Full Stack Developer
        </p>

        {/* Action buttons */}
        <div className="mt-5 flex flex-wrap gap-3 justify-center">
          <a
            href={RESUME_OPEN_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              px-6 py-2 rounded-lg font-bold text-sm font-nav uppercase tracking-wide
              bg-gray-900 text-gray-100
              border-2 border-gray-900
              hover:bg-transparent hover:text-gray-900
              dark:bg-[#50DBB4] dark:text-gray-900
              dark:border-[#50DBB4]
              dark:hover:bg-cyan-300 dark:hover:border-cyan-300
              transition-colors duration-300
            "
          >
            Open in New Tab ↗
          </a>
        </div>
      </section>

      {/* Iframe embed */}
      <section className="px-2 sm:px-6 pb-12 animate__animated animate__fadeIn">
        <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 bg-white">
          <iframe
            src={RESUME_URL}
            title="Subham Dutta — Resume"
            className="w-full"
            style={{ height: '90vh', minHeight: '600px', border: 'none' }}
            loading="lazy"
          />
        </div>
      </section>

      <Footer theme={theme} />
    </>
  );
}

export default Resume;
