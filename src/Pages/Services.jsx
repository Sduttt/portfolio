/* eslint-disable react/prop-types */
import 'animate.css';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ServiceCard from '../Components/Services/ServiceCard';
import Button from '../Components/Button/Button';

const WEB_STACK = [
  'MongoDB', 'Express.js', 'React.js', 'Node.js',
  'Next.js', 'TypeScript', 'Tailwind CSS', 'REST API',
  'PostgreSQL', 'Prisma', 'Git', 'Netlify / Vercel',
];

const APP_STACK = [
  'React Native', 'Expo', 'TypeScript',
  'Node.js', 'Express.js', 'MongoDB',
  'PostgreSQL', 'REST API', 'EAS Build',
  'Push Notifications', 'Git',
];

const PROCESS_STEPS = [
  { step: '01', title: 'Discovery', desc: 'Understanding your requirements, goals, and target audience to define the scope.' },
  { step: '02', title: 'Design', desc: 'Crafting wireframes and UI mockups that are intuitive, modern and on-brand.' },
  { step: '03', title: 'Development', desc: 'Building clean, scalable and well-documented code following best practices.' },
  { step: '04', title: 'Delivery', desc: 'Deploying, testing and handing over the product with full support.' },
];

function Services({ theme }) {
  return (
    <>
      <Navbar theme={theme} />

      {/* ── Hero ── */}
      <section className="mt-10 mb-4 px-4 text-center animate__animated animate__fadeInDown">
        <h1 className="font-zen text-3xl sm:text-4xl bold dark:text-white">
          SERVICES
        </h1>
        <p className="my-3 text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
          I build fast, scalable and production-ready digital products — from
          responsive web apps to cross-platform mobile experiences.
        </p>
        <div className="flex justify-center mt-4">
          <Button text="Hire Me" url="/contact" target="_self" />
        </div>
      </section>

      {/* ── Service Cards ── */}
      <section className="px-4 sm:px-6 py-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10">
          <ServiceCard
            icon="🌐"
            title="Full Stack Web Development"
            accentColor="bg-indigo-500"
            description={
              `I build complete, production-ready web applications end-to-end — from pixel-perfect frontends to robust backends and databases. Whether you need a landing page, SaaS dashboard, CRM, or a custom platform, I deliver scalable solutions using the MERN stack or Next.js, adapting tools to your project's specific requirements.`
            }
            techStack={WEB_STACK}
          />

          <ServiceCard
            icon="📱"
            title="Full Stack Mobile App Development"
            accentColor="bg-[#50DBB4]"
            description={
              `I develop cross-platform mobile apps for both iOS and Android from a single codebase using React Native and Expo. The apps connect to powerful Node.js/Express backends with real-time features, push notifications, secure auth, and seamless API integration — ready for App Store & Play Store deployment via EAS Build.`
            }
            techStack={APP_STACK}
          />
        </div>
      </section>

      {/* ── How I Work ── */}
      <section className="px-4 sm:px-6 py-10 max-w-5xl mx-auto">
        <h2 className="font-zen text-2xl sm:text-3xl text-center dark:text-white mb-2 animate__animated animate__bounceIn">
          HOW I WORK
        </h2>
        <p className="text-center text-gray-500 dark:text-gray-400 text-sm sm:text-base mb-10">
          A simple, transparent process — from idea to launch.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {PROCESS_STEPS.map(({ step, title, desc }) => (
            <div
              key={step}
              className="
                relative rounded-xl p-5
                bg-white dark:bg-gray-800
                border border-gray-100 dark:border-gray-700
                shadow-sm hover:shadow-md
                transition-shadow duration-300
                animate__animated animate__fadeInUp
              "
            >
              <span className="font-zen text-4xl text-gray-100 dark:text-gray-700 select-none absolute top-4 right-4">
                {step}
              </span>
              <h3 className="font-zen text-lg dark:text-white text-gray-800 mb-2">
                {title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="px-4 py-12 text-center">
        <div className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 p-8 sm:p-12 animate__animated animate__fadeIn">
          <h2 className="font-zen text-2xl sm:text-3xl dark:text-white text-gray-800 mb-3">
            GOT A PROJECT IN MIND?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 text-base mb-6">
            Let&apos;s talk about it. I&apos;m always open to discussing new ideas
            and opportunities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button text="Contact Me" url="/contact" target="_self" />
            <Button
              text="View Projects"
              url="/projects"
              target="_self"
            />
          </div>
        </div>
      </section>

      <Footer theme={theme} />
    </>
  );
}

export default Services;