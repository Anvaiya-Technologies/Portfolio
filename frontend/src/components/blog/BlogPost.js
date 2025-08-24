import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

// Sample blog data - in a real app, this would come from an API or CMS
const blogPosts = [
  {
    id: 1,
    title: "Getting Started with React: Your First Application",
    excerpt:
      "Dive into the world of React, the leading JavaScript library for building dynamic user interfaces. Learn the core concepts and build your first application from scratch.",
    content:
      "### What is React?\nReact is a powerful, open-source JavaScript library developed by Facebook for building user interfaces. It's not a full-fledged framework like Angular or Vue, but rather a library focused on the view layer of your application. This makes it incredibly flexible and easy to integrate into existing projects. What sets React apart is its component-based architecture and use of a Virtual DOM, which allows for highly efficient updates and a snappy user experience.\n\n---\n\n### The Building Blocks: Core Concepts\nThink of a React application as a collection of reusable, independent pieces—just like Lego blocks. These are called components. Each component is a self-contained piece of UI, like a button, a navigation bar, or an entire user profile card. By composing these components together, you can build complex and scalable user interfaces. This approach makes your code cleaner, more organized, and easier to maintain.\n\n* JSX: React uses JSX, a syntax extension for JavaScript that lets you write HTML-like code directly within your JavaScript files. It may look a bit unusual at first, but it makes building and visualizing your UI incredibly intuitive.\n\n* State and Props: These are the two primary ways to handle data in a React application. Props (short for properties) are used to pass data from a parent component down to a child component. Think of them as function arguments—they're read-only and help maintain a clear, unidirectional flow of data. State, on the other hand, is data that a component manages internally and can change over time. When a component's state is updated, React automatically re-renders the component to reflect the new data, keeping your UI in sync.\n\n---\n\n### Let's Build a Simple React App\nReady to get your hands dirty? Follow these steps to set up your first React project using Vite, a modern build tool that is much faster than the older Create React App.\n\nPrerequisites: Make sure you have Node.js and npm (or pnpm, yarn) installed on your machine. A code editor like VS Code is also highly recommended.\n\nStep 1: Create a new project\nOpen your terminal and run the following command. This will create a new React project with a clean, fast setup. Replace my-react-app with your desired project name.\n\nbash\nnpm create vite@latest my-react-app -- --template react\n\n\nStep 2: Install dependencies and start the server\nNavigate into your new project folder and install the necessary packages. Then, start the development server.\n\nbash\ncd my-react-app\nnpm install\nnpm run dev\n\n\nYour first React app is now running! Open your browser and go to http://localhost:5173 to see it in action.\n\n---\n\n### Creating a Counter Component\nNow let's build something interactive. We'll create a simple counter component that uses state to track a number and a button to increment it.\n\n1. Create the Counter component:\nInside your project's src folder, create a new file named Counter.jsx. Add the following code:\n\njsx\nimport { useState } from 'react';\n\nfunction Counter() {\n  const [count, setCount] = useState(0);\n\n  return (\n    <div>\n      <p>The current count is: {count}</p>\n      <button onClick={() => setCount(count + 1)}>\n        Increment\n      </button>\n    </div>\n  );\n}\n\nexport default Counter;\n\n\n2. Use the component in your main app:\nNow, open src/App.jsx and replace its content with the following to import and render your new Counter component.\n\njsx\nimport Counter from './Counter';\nimport './App.css'; // Optional: if you want to keep the default styling\n\nfunction App() {\n  return (\n    <div className=\"App\">\n      <h1>Welcome to My First React App!</h1>\n      <Counter />\n    </div>\n  );\n}\n\nexport default App;\n\n\nSave your files, and you'll see your counter live in the browser. You've just built your first stateful component! This is the fundamental pattern for building dynamic UIs in React, and you're now ready to explore more advanced topics like component lifecycle, hooks, and routing.",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "May 15, 2023",
    author: "Jane Smith",
    slug: "getting-started-with-react",
  },
  {
    id: 2,
    title: "CSS Tips for Modern Web Design",
    excerpt:
      "Discover advanced CSS techniques that will take your web design skills to the next level.",
    content: "Full content for CSS Tips...",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "June 2, 2023",
    author: "John Doe",
    slug: "css-tips-for-modern-web-design",
  },
  {
    id: 3,
    title: "Introduction to Node.js",
    excerpt:
      "Explore the world of server-side JavaScript with Node.js and learn how to build scalable applications.",
    content: "Full content for Introduction to Node.js...",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "June 10, 2023",
    author: "Alex Johnson",
    slug: "introduction-to-nodejs",
  },
  {
    id: 4,
    title: "UX Design Principles",
    excerpt:
      "Learn the fundamental principles of user experience design that will help you create intuitive interfaces.",
    content: "Full content for UX Design Principles...",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "June 18, 2023",
    author: "Sarah Wilson",
    slug: "ux-design-principles",
  },
  {
    id: 5,
    title: "State Management in React",
    excerpt:
      "Understanding different state management solutions in React and when to use each approach.",
    content: "Full content for State Management in React...",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "July 5, 2023",
    author: "Michael Brown",
    slug: "state-management-in-react",
  },
  {
    id: 6,
    title: "Web Performance Optimization",
    excerpt:
      "Techniques and strategies to make your websites faster and more efficient for better user experience.",
    content: "Full content for Web Performance Optimization...",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "July 22, 2023",
    author: "Emily Chen",
    slug: "web-performance-optimization",
  },
  // Adding more posts to demonstrate pagination
  {
    id: 7,
    title: "JavaScript ES6 Features You Should Know",
    excerpt:
      "Explore the most important ES6 features that every JavaScript developer should master.",
    content: "Full content for JavaScript ES6 Features...",
    image:
      "https://images.unsplash.com/photo-1627398242454-45a1465c2479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwa90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    date: "August 5, 2023",
    author: "David Wilson",
    slug: "javascript-es6-features",
  },
  {
    id: 8,
    title: "Building Responsive Layouts with CSS Grid",
    excerpt:
      "Learn how to create flexible and responsive layouts using CSS Grid.",
    content: "Full content for CSS Grid...",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "August 15, 2023",
    author: "Lisa Johnson",
    slug: "responsive-layouts-css-grid",
  },
  {
    id: 9,
    title: "Introduction to TypeScript",
    excerpt:
      "Discover how TypeScript can help you write more robust and maintainable JavaScript code.",
    content: "Full content for TypeScript...",
    image:
      "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "September 2, 2023",
    author: "Robert Davis",
    slug: "introduction-to-typescript",
  },
  {
    id: 10,
    title: "API Design Best Practices",
    excerpt:
      "Learn the principles of designing clean, intuitive, and developer-friendly APIs.",
    content: "Full content for API Design...",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "September 15, 2023",
    author: "Maria Garcia",
    slug: "api-design-best-practices",
  },
  {
    id: 11,
    title: "Mobile-First Web Development",
    excerpt:
      "Strategies and techniques for building websites with a mobile-first approach.",
    content: "Full content for Mobile-First Development...",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "October 1, 2023",
    author: "James Miller",
    slug: "mobile-first-web-development",
  },
  {
    id: 12,
    title: "Introduction to GraphQL",
    excerpt:
      "Learn how GraphQL provides a more efficient alternative to REST APIs.",
    content: "Full content for GraphQL...",
    image:
      "https://images.unsplash.com/photo-1533750349088-cd871a92f312?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    date: "October 15, 2023",
    author: "Jennifer Lee",
    slug: "introduction-to-graphql",
  },
  {
    id: 13,
    title: "CSS Variables: Power and Flexibility",
    excerpt:
      "Discover how CSS custom properties can revolutionize your styling workflow.",
    content: "Full content for CSS Variables...",
    image:
      "https://images.unsplash.com/photo-1523437113738-bbd3cc89fb19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    date: "November 1, 2023",
    author: "Thomas Clark",
    slug: "css-variables-power-flexibility",
  },
];

// Blogs.js - Add this export statement at the bottom
export { blogPosts };

const BLOGS_PER_PAGE = 12;

const Blogs = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages
  const totalPages = Math.ceil(blogPosts.length / BLOGS_PER_PAGE);

  // Get current posts
  const currentPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
    return blogPosts.slice(startIndex, startIndex + BLOGS_PER_PAGE);
  }, [currentPage]);

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Generate page numbers for pagination
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <Helmet>
        <title>Blog | Anvaiya Technologies</title>
        <meta
          name="description"
          content="Stay updated with the latest insights, tutorials, and news from our team of experts at Anvaiya Technologies."
        />
        <meta
          name="keywords"
          content="blog, technology, web development, design, tutorials, news"
        />
        <meta property="og:title" content="Blog | Anvaiya Technologies" />
        <meta
          property="og:description"
          content="Stay updated with the latest insights, tutorials, and news from our team of experts."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://anvaiya.com/blog" />
      </Helmet>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Our Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay updated with the latest insights, tutorials, and news from our
            team of experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {currentPosts.map((post) => (
            <BlogCard key={post.id} post={post} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-8">
            <nav className="flex items-center space-x-2">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Previous
              </button>

              {pageNumbers.map((number) => (
                <button
                  key={number}
                  onClick={() => handlePageChange(number)}
                  className={`px-3 py-1 rounded-md ${
                    currentPage === number
                      ? "bg-cyan-600 text-white"
                      : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {number}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="px-3 py-1 rounded-md bg-white text-gray-700 border border-gray-300 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
              >
                Next
              </button>
            </nav>
          </div>
        )}
      </div>
    </div>
  );
};

// Blog Card Component
const BlogCard = ({ post }) => {
  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 group">

      <Link to={`/${post.slug}`} className="block">
        <div className="overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <time
              className="text-sm text-gray-500"
              dateTime={new Date(post.date).toISOString()}
            >
              {post.date}
            </time>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-3 group-hover:text-cyan-600 transition-colors duration-300">
            {post.title}
          </h2>
          <p className="text-gray-600 mb-4">{post.excerpt}</p>
          <div className="flex items-center justify-between">
            <address className="text-sm text-gray-500 not-italic">
              By {post.author}
            </address>
            <span className="text-cyan-600 font-medium group-hover:underline">
              Read more
            </span>
          </div>
        </div>
      </Link>
    </article>
  );
};

export default Blogs;
