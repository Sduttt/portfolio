/* eslint-disable react/prop-types */
import { useState, useEffect } from "react";
import Blogcard from "../Components/Blogs/Blogcard";
import axios from "axios";
import 'animate.css'
import buffering from '../assets/loading.gif';
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
const endpoint = "https://gql.hashnode.com/";
const ARTICLE_QUERY = `
query Publication {
  publication(host: "sdutta.hashnode.dev") {
    posts(first: 6) {
      edges {
        node {
          title
          brief
          coverImage {
            url
          }
          reactionCount
          replyCount
          slug
          publishedAt
        }
      }
    }
  }
}
`;

function Blogs({ theme }) {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        async function fetchData() {
            const response = await axios({
                url: endpoint,
                method: "POST",
                data: {
                    query: ARTICLE_QUERY,
                },
            });
            setPosts(response.data.data.publication.posts.edges);
            setLoading(false)
        }
        fetchData();
    }, []);

    return (
        <>
            <Navbar theme={theme} url1={"/"} text1={"home"} url2={"/projects"} text2={"projects"} url3={"/achievements"} text3={"achievements"} url4={"/contact"} text4={"contact"} />

            <section className="mt-12">
                <h1 className="text-center font-zen text-3xl bold dark:text-white animate__animated animate__bounceIn">BLOGS:</h1>
                <p className="my-2 text-xl text-center text-gray-600 dark:text-gray-300">These are my latest articles. You can visit my <a href="https://sdutta.hashnode.dev/" className="underline">Hashnode</a> profile to get all articles.</p>
                <div className=" px-5 py-4 mx-auto">
                    <p className="text-center font-bold text-xl text-[#172C45] dark:text-gray-300 ">
                        Latest Articles:{" "}
                    </p>
                    <div className="flex flex-wrap justify-between">
                        {loading ?
                        (
                            <div className="w-full flex justify-center">
                                <img src={buffering} alt="buffering" />
                            </div>
                        ) : posts.map((edge) => {
                            const post = edge.node;
                            const date = new Date(post.publishedAt);
                            return (
                                <div className="w-1/3 flex justify-center my-2">
                                <Blogcard
                                    key={post.slug}
                                    title={post.title}
                                    brief={post.brief}
                                    img={post.coverImage.url}
                                    reaction={post.reactionCount}
                                    comment={post.replyCount}
                                    date={date}
                                    fullArticle={`https://sdutta.hashnode.dev/${post.slug}`}
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
