/* eslint-disable react/prop-types */
import Blogcard from "../Components/Blogs/Blogcard";
import 'animate.css'
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import blogsData from '../assets/blogs.json';

function Blogs({ theme }) {
    return (
        <>
            <Navbar theme={theme} />

            <section className="mt-12">
                <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">BLOGS:</h1>
                <p className="my-2 text-base sm:text-xl text-center px-4 text-gray-600 dark:text-gray-300">These are my latest articles. You can visit my <a href="https://sdutta.hashnode.dev/" className="underline">Hashnode</a> profile to get all articles.</p>
                <div className=" px-5 py-4 mx-auto">
                    <p className="text-center font-bold text-xl text-[#172C45] dark:text-gray-300 ">
                        Latest Articles:{" "}
                    </p>
                    <div className="flex flex-wrap justify-center">
                        {blogsData.map((post) => {
                            const date = new Date(post.publishedAt);
                            return (
                                <div key={post.slug} className="w-full sm:w-1/2 md:w-1/3 flex justify-center my-2">
                                <Blogcard
                                    title={post.title}
                                    brief={post.brief}
                                    img={post.coverImage}
                                    reaction={0}
                                    comment={0}
                                    date={date}
                                    fullArticle={post.fullArticle}
                                />
                                </div>
                            );
                        })}
                    </div>
                    <div className="flex justify-center">
                        <a
                            className="text-[#172C45] inline-flex items-center mx-auto mb-8 text-xl font-bold dark:text-gray-300"
                            href="https://sdutta.hashnode.dev/">
                            Read More Articles
                            <svg
                                className="w-4 h-4 ml-2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="3"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                transform="scale(1.5)">
                                <path d="M5 12h14"></path>
                                <path d="M12 5l7 7-7 7"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </section>

            <Footer theme={theme} />

        </>
    );
}
export default Blogs;
