import React, { useState, useEffect } from "react";
import Blogcard from "./Blogcard";
import axios from "axios";
const endpoint = "https://api.hashnode.com/";
const ARTICLE_QUERY = `
{
  user(username: "sduttt") {
      publication {
        posts(page: 0) {
          title
          brief
          coverImage
          responseCount
          totalReactions
          slug
          dateAdded
        }
      }
    }
}

`;

function Blog() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios({
        url: endpoint,
        method: "POST",
        data: {
          query: ARTICLE_QUERY,
        },
      });
      setPosts(response.data.data.user.publication.posts);
    }
    fetchData();
  }, []);

  return (
    <section className="" id="blog">
      <h1 className="text-center font-zen text-3xl bold ">BLOG :</h1>
      <div className=" px-5 py-4 mx-auto">
        <p className="text-center font-bold text-xl text-[#172C45]">
          Latest Articles:{" "}
        </p>
        <div className="flex flex-wrap justify-around">
          {posts.map((posts) => {
            const date = new Date(posts.dateAdded);
            return (
              <Blogcard
                key={posts.slug}
                title={posts.title}
                brief={posts.brief}
                img={posts.coverImage}
                reaction={posts.totalReactions}
                comment={posts.responseCount}
                date={date}
                fullArticle={`https://sdutta.hashnode.dev/${posts.slug}`}
              />
            );
          })}
        </div>
        <div className="flex justify-center">
          <a
            className="text-[#172C45] inline-flex items-center mx-auto mb-8 text-xl font-bold"
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
  );
}
export default Blog;
