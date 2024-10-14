import React from "react";
import Layout from "../../layout/Layout";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Layout>
      <section className="w-full flex-grow h-screen lg:w-11/12 flex items-center justify-start flex-wrap px-6 py-5">
        <div className="w-2/4">
          <p>Hello there...</p>
          <h1>Siddique Ahmed</h1>
          <h4>
            I Am Rassionate <span>Mobile App Development</span>
          </h4>
          <p>
            Passionate Mern Stack Developer dedidated to crafting user-friendly
            web applications that positively impact people's lives through
            innovative concepts.
          </p>
          <div>
            <button>
              <Link>MY WORK</Link>
            </button>
            <button>
              <Link>HIRE ME</Link>
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;
