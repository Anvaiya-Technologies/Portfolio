import React, { useState, useMemo } from "react";
import { Link } from "react-router";
import { Helmet } from "react-helmet";

// Sample blog data - in a real app, this would come from an API or CMS
export const blogPosts = [
  {
    id: 1,
    title: "The Ultimate Guide to Choosing a Web Development Framework",
    slug: "ultimate-guide-web-frameworks",
    date: "August, 2025",
    author: "Him Kishan Das",
    image:
      "https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    content: [
      {
        type: "heading",
        level: 2,
        value: "INTRODUCTION",
      },
      {
        type: "paragraph",
        value:
          `Imagine you're opening a new restaurant. You could build everything from scratch—design the kitchen layout, invent your own recipes, train staff with custom procedures—but that would take ages and cost a fortune. Instead, you might choose a proven franchise model that gives you a blueprint: kitchen setup, menu, training manuals, even marketing strategies. That’s exactly what a web development framework does for your app.
In the rapidly evolving universe of web development, selecting the right framework is crucial to getting your project off the ground. Frameworks are the foundation of most modern web apps—they provide a template structure, enforce best practices, and abstract away much of the complexity required to get something production-ready. Whether you’re working on a simple single-page app or a high-traffic platform, the framework you choose will shape your codebase, influence your team’s workflow, and directly impact your app’s performance and scalability.
Just like choosing the right franchise for your restaurant depends on your goals, budget, and audience, selecting the right framework depends on your project’s scope, your team’s expertise, and how you envision maintaining and growing the app over time. Some frameworks offer speed and flexibility, while others provide structure and enterprise-level features. The key is understanding what each one brings to the table—and how it aligns with your vision.`
      },
      {
        type: "heading",
        level: 2,
        value: "DEEP DIVE INTO THE TOP FRAMEWORKS",
      },
      {
        type: "paragraph",
        value:
          `Choosing the right JavaScript framework is one of the most critical decisions a developer or business can make. The right choice accelerates development, while the wrong one can lead to bottlenecks and technical debt. In this comprehensive guide, we break down the three giants of frontend development: React, Angular, and Vue.js. We’ll explore their key features, pros, cons, and ideal use cases to help you select the perfect tool for your next project.`
      },
      // REACT SECTION
      {
        type: "heading",
        level: 3,
        value: "REACT: THE FLEXIBLE UI LIBRARY",
      },
      {
        type: "paragraph",
        value:
          `Developed and maintained by Facebook, React isn’t a full framework but a powerful JavaScript library specifically designed for building modern, dynamic user interfaces. It dominates the landscape for single-page applications (SPAs).`,
      },
      {
        type: "heading",
        level: 4,
        value: "Key Features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Component-Based Architecture: Build encapsulated components that manage their own state, then compose them to make complex UIs.",
          "Virtual DOM: Creates a virtual representation of the DOM in memory, leading to highly efficient updates and rendering, which boosts performance.",
          "Rich Ecosystem: While React itself is lean, its massive community offers tools like Redux for state management and React Router for navigation.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Pros",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Flexible and Modular: Lets you choose your own libraries for routing, state management, etc.",
          "Large Community: Extensive support, tutorials, and job market.",
          "Great Performance: Thanks to Virtual DOM.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Cons",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Not a Full Framework: You need to select and integrate other libraries for routing, state, etc.",
          "Fast Pace: The ecosystem changes quickly, which may require frequent updates.",
          "Boilerplate: Can require more code and setup for larger apps.",
        ],
      },
      // ANGULAR SECTION
      {
        type: "heading",
        level: 3,
        value: "ANGULAR: THE ENTERPRISE-GRADE FRAMEWORK",
      },
      {
        type: "paragraph",
        value:
          `Angular is a full-fledged, TypeScript-based framework developed by Google. It is a complete solution for building large-scale, enterprise-grade applications, providing everything you need out of the box.`,
      },
      {
        type: "heading",
        level: 4,
        value: "Key Features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Two-Way Data Binding: Automatically synchronizes data between the model and view components, reducing development time.",
          "Dependency Injection: Makes applications more efficient, modular, and easier to test and maintain.",
          "Full-Featured Framework: Includes built-in solutions for routing, HTTP client, form handling, and more.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Pros",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "All-in-One Solution: Provides a standardized, cohesive structure, reducing the need to make decisions about supporting libraries.",
          "TypeScript by Default: Offers strong typing, which enhances code quality, scalability, and catches errors early.",
          "Long-Term Support (LTS): Google offers extended support, making it a safe bet for long-lived, complex projects.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Cons",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Steep Learning Curve: Its complexity and comprehensive nature make it more difficult to learn than React or Vue.",
          "Verbosity: Requires more code to accomplish the same tasks compared to other frameworks, which can impact development speed.",
        ],
      },
      // VUE SECTION
      {
        type: "heading",
        level: 3,
        value: "VUE.JS: THE PROGRESSIVE FRAMEWORK",
      },
      {
        type: "paragraph",
        value:
          `Vue.js is a progressive JavaScript framework created by Evan You. It is renowned for its gentle learning curve, simplicity, and flexibility, allowing you to scale from a lightweight library to a full framework as needed.`,
      },
      {
        type: "heading",
        level: 4,
        value: "Key Features",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Reactive Data Binding: A simple and intuitive system for keeping the view and model in sync.",
          "Component-Based Structure: Like React, it uses a component-based architecture for building reusable UI elements.",
          "Gentle Integration: Can be easily dropped into projects without a complex build process, making it great for enhancing existing sites.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Pros",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Easy to Learn: Clear documentation and simple syntax make it the most beginner-friendly option.",
          "Highly Versatile: Can be used for everything from small, interactive parts of a page to large SPAs.",
          "Optimal Performance: Offers performance comparable to React due to a similar Virtual DOM implementation.",
        ],
      },
      {
        type: "heading",
        level: 4,
        value: "Cons",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Smaller Ecosystem: While growing rapidly, its ecosystem of libraries and tools is not as vast as React's.",
          "Less Corporate Backing: Originally developed by an individual, it has a smaller market share in large enterprises compared to React/Angular, though it is now backed by a strong community.",
        ],
      },
      // CONCLUSION
      {
        type: "heading",
        level: 2,
        value: "CONCLUSION",
      },
      {
        type: "paragraph",
        value:
          `There is no single "best" framework—only the best framework for you. Your choice ultimately depends on your project's specific requirements, your team's expertise, and your long-term vision.`,
      },
      {
        type: "paragraph",
        value: "To make your decision clear, let's break it down one final time:",
      },
      {
        type: "list",
        style: "unordered",
        items: [
          "Choose React if: You need maximum flexibility and a vast ecosystem. It's ideal for building highly dynamic, single-page applications (SPAs) like dashboards or social media feeds. If your team values choosing their own tools and you prioritize a massive job market and community support, React is the leading choice.",
          "Choose Angular if: You are building a large-scale, enterprise-level application. If you need a powerful, all-in-one solution with built-in everything, strong typing with TypeScript, and a structured environment for big teams, Angular is built for you. It’s the definition of a full-featured framework.",
          "Choose Vue.js if: You value a gentle learning curve and simplicity. It's perfect for quick prototyping, smaller projects, or seamlessly enhancing existing applications. Vue offers a fantastic balance of performance and ease of use, making it a favorite for startups and developers who want to get up and running quickly.",
        ],
      },
    ],
  },
];



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
