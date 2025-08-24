import React from "react";
import { useParams, Link } from "react-router";
import { motion } from "framer-motion"; // Import motion from framer-motion

// We'll use the same blogPosts array, but in a real app this would come from an API
import { blogPosts } from "../components/blog/BlogPost";

const BlogPost = () => {
  const { slug } = useParams();
  const post = blogPosts.find((post) => post.slug === slug);

  // Define animation variants for the main content
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.2, // Stagger the animation of child elements
        when: "beforeChildren", // Start parent animation before children
      },
    },
  };

  // Define animation variants for individual elements
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  if (!post) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-gray-50 pt-20 flex items-center justify-center"
      >
        <div className="text-center">
          <motion.h1
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
            className="text-2xl font-bold text-gray-800 mb-4"
          >
            Post not found
          </motion.h1>
          <Link
            to="/blogs"
            className="text-cyan-600 hover:underline transition-colors duration-300"
          >
            Back to all posts
          </Link>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <motion.article
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-4 py-12 max-w-4xl"
      >
        <motion.div variants={itemVariants}>
          <Link
            to="/blogs"
            className="inline-flex items-center text-cyan-600 hover:underline mb-8 transition-colors duration-300"
          >
            <svg
              className="w-4 h-4 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to all posts
          </Link>
        </motion.div>

        <motion.div
          className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
          variants={itemVariants}
        >
          <motion.img
            src={post.image}
            alt={post.title}
            className="w-full h-64 object-cover"
            initial={{ scale: 1.05, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6 }}
          />
          <div className="p-8">
            <motion.div
              className="flex items-center justify-between mb-6"
              variants={itemVariants}
            >
              <span className="text-sm font-medium text-cyan-600">
                {post.category}
              </span>
              <span className="text-sm text-gray-500">{post.date}</span>
            </motion.div>

            <motion.h1
              className="text-3xl font-bold text-gray-800 mb-4"
              variants={itemVariants}
            >
              {post.title}
            </motion.h1>

            <motion.div
              className="flex items-center mb-8"
              variants={itemVariants}
            >
              <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center mr-3">
                <span className="text-gray-600 font-medium">
                  {post.author.split(" ").map((name) => name[0]).join("")}
                </span>
              </div>
              <span className="text-gray-600">By {post.author}</span>
            </motion.div>

            <motion.div className="prose max-w-none" variants={itemVariants}>
              <p className="text-gray-700 leading-relaxed mb-4">
                {post.content}
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam at mauris vel dolor ullamcorper facilisis. Praesent lobortis lacus et eros consectetur, at aliquet nunc pharetra. Phasellus euismod purus id lectus tempus, a posuere nunc interdum.
              </p>
              <p className="text-gray-700 leading-relaxed">
                In a real application, this would be the full blog post content fetched from a database or CMS. The content would include proper formatting, images, and other rich media elements.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </motion.article>
    </div>
  );
};

export default BlogPost;