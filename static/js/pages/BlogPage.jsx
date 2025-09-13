import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactMarkdown from 'react-markdown';
import blogData from "../data/blogData";
import bgElement from './../assets/images/backgrounds/page-bg-element.png'
import SeoMeta from "../component/SeoMeta";
import chatllat from './../assets/images/general/chatllat.png'

const BlogPage = () => {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  // Find the blog post by slug
  const blog = blogData.find((item) => item.id === slug);

  useEffect(() => {
    const loadMarkdown = async () => {
      if (!blog) {
        setError("Blog not found");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);
        
        // Use absolute URL or relative path from public folder
        const filePath = `${process.env.PUBLIC_URL}/blogs/${blog.contentFile}`;
        console.log("Attempting to fetch:", filePath); // Debug log
        
        // Fetch markdown from public folder
        const response = await fetch(filePath);
        
        console.log("Response status:", response.status); // Debug log
        console.log("Response headers:", response.headers.get('content-type')); // Debug log
        
        if (!response.ok) {
          throw new Error(`Failed to load blog content: ${response.status}`);
        }
        
        const markdownText = await response.text();
        
        // Check if we got HTML instead of markdown (common issue)
        if (markdownText.includes('<!DOCTYPE html>') || markdownText.includes('<html')) {
          throw new Error("Received HTML instead of markdown - file not found");
        }
        
        console.log("Markdown loaded successfully, length:", markdownText.length); // Debug log
        setContent(markdownText);
      } catch (err) {
        console.error("Error loading markdown:", err);
        setError(`Failed to load blog content: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    loadMarkdown();
  }, [blog, slug]);

  // Loading state
  if (loading) {
    return (
      <div className="bg-[#0d0d0f] text-white min-h-screen p-6 md:px-16">
        <div className="max-w-3xl mx-auto">
          <div className="animate-pulse">
            <div className="h-4 bg-gray-700 rounded w-32 mb-4"></div>
            <div className="h-8 bg-gray-700 rounded w-3/4 mb-2"></div>
            <div className="h-4 bg-gray-700 rounded w-48 mb-6"></div>
            <div className="space-y-3">
              <div className="h-4 bg-gray-700 rounded"></div>
              <div className="h-4 bg-gray-700 rounded w-5/6"></div>
              <div className="h-4 bg-gray-700 rounded w-4/6"></div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error || !blog) {
    return (
      <div className="bg-[#0d0d0f] text-white min-h-screen p-6 md:px-16">
        <div className="max-w-3xl mx-auto text-center py-16">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <p className="text-gray-400 mb-6">
            {error || "The blog post you're looking for doesn't exist."}
          </p>
          <a 
            href="/blog" 
            className="inline-block bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Back to All Blogs
          </a>
        </div>
      </div>
    );
  }

  // Main blog content
  return (
    <>
      <SeoMeta
        title={`${blog.title} | Chatllat`}
        description="Read this in-depth blog post on Chatllat. Learn how Chatllat empowers secure Web3 hiring, protects freelancers with escrow, and ensures transparent collaboration."
        image={chatllat}
      />
      <section className="contant-section relative py-16 md:py-24 overflow-hidden">
          <div className="w-full h-auto absolute top-0 left-0">
              <img src={bgElement} className='w-full object-cover' alt="Banner Background" />
          </div>
          <div className="container min-h-screen relative">
              <div className="max-w-4xl mx-auto">
                  {/* Blog Header */}
                  <div className="mb-8">
                      <div className="flex flex-wrap items-center space-x-4 divide-x divide-gray-900 text-sm md:text-base text-gray-900 tracking-wider mb-4">
                          <div className="flex gap-3 pl-0">
                              <svg
                                  width={20}
                                  height={20}
                                  viewBox="0 0 20 20"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg"
                                  >
                                  <mask
                                      id="mask0_1065_17373"
                                      style={{ maskType: "alpha" }}
                                      maskUnits="userSpaceOnUse"
                                      x={0}
                                      y={0}
                                      width={20}
                                      height={20}
                                  >
                                      <rect width={20} height={20} fill="#7D838C" />
                                  </mask>
                                  <g mask="url(#mask0_1065_17373)">
                                      <path
                                      d="M4.44396 17.9166C4.02299 17.9166 3.66667 17.7708 3.375 17.4791C3.08333 17.1875 2.9375 16.8312 2.9375 16.4102V5.25644C2.9375 4.83547 3.08333 4.47915 3.375 4.18748C3.66667 3.89582 4.02299 3.74998 4.44396 3.74998H5.59771V1.98727H6.87979V3.74998H13.194V1.98727H14.444V3.74998H15.5977C16.0187 3.74998 16.375 3.89582 16.6667 4.18748C16.9583 4.47915 17.1042 4.83547 17.1042 5.25644V16.4102C17.1042 16.8312 16.9583 17.1875 16.6667 17.4791C16.375 17.7708 16.0187 17.9166 15.5977 17.9166H4.44396ZM4.44396 16.6666H15.5977C15.6619 16.6666 15.7206 16.6399 15.774 16.5864C15.8274 16.5331 15.8542 16.4744 15.8542 16.4102V8.58977H4.1875V16.4102C4.1875 16.4744 4.21424 16.5331 4.26771 16.5864C4.32104 16.6399 4.37979 16.6666 4.44396 16.6666ZM4.1875 7.33977H15.8542V5.25644C15.8542 5.19227 15.8274 5.13352 15.774 5.08019C15.7206 5.02672 15.6619 4.99998 15.5977 4.99998H4.44396C4.37979 4.99998 4.32104 5.02672 4.26771 5.08019C4.21424 5.13352 4.1875 5.19227 4.1875 5.25644V7.33977ZM10.0208 11.7308C9.81681 11.7308 9.64292 11.6589 9.49917 11.5152C9.35556 11.3716 9.28375 11.1977 9.28375 10.9935C9.28375 10.7895 9.35556 10.6156 9.49917 10.4719C9.64292 10.3282 9.81681 10.2564 10.0208 10.2564C10.2249 10.2564 10.3988 10.3282 10.5425 10.4719C10.6861 10.6156 10.7579 10.7895 10.7579 10.9935C10.7579 11.1977 10.6861 11.3716 10.5425 11.5152C10.3988 11.6589 10.2249 11.7308 10.0208 11.7308ZM6.6875 11.7308C6.48347 11.7308 6.30958 11.6589 6.16583 11.5152C6.02222 11.3716 5.95042 11.1977 5.95042 10.9935C5.95042 10.7895 6.02222 10.6156 6.16583 10.4719C6.30958 10.3282 6.48347 10.2564 6.6875 10.2564C6.89153 10.2564 7.06542 10.3282 7.20917 10.4719C7.35278 10.6156 7.42458 10.7895 7.42458 10.9935C7.42458 11.1977 7.35278 11.3716 7.20917 11.5152C7.06542 11.6589 6.89153 11.7308 6.6875 11.7308ZM13.3542 11.7308C13.1501 11.7308 12.9763 11.6589 12.8325 11.5152C12.6889 11.3716 12.6171 11.1977 12.6171 10.9935C12.6171 10.7895 12.6889 10.6156 12.8325 10.4719C12.9763 10.3282 13.1501 10.2564 13.3542 10.2564C13.5582 10.2564 13.7321 10.3282 13.8758 10.4719C14.0194 10.6156 14.0913 10.7895 14.0913 10.9935C14.0913 11.1977 14.0194 11.3716 13.8758 11.5152C13.7321 11.6589 13.5582 11.7308 13.3542 11.7308ZM10.0208 15C9.81681 15 9.64292 14.9281 9.49917 14.7844C9.35556 14.6407 9.28375 14.4669 9.28375 14.2629C9.28375 14.0587 9.35556 13.8848 9.49917 13.7412C9.64292 13.5975 9.81681 13.5256 10.0208 13.5256C10.2249 13.5256 10.3988 13.5975 10.5425 13.7412C10.6861 13.8848 10.7579 14.0587 10.7579 14.2629C10.7579 14.4669 10.6861 14.6407 10.5425 14.7844C10.3988 14.9281 10.2249 15 10.0208 15ZM6.6875 15C6.48347 15 6.30958 14.9281 6.16583 14.7844C6.02222 14.6407 5.95042 14.4669 5.95042 14.2629C5.95042 14.0587 6.02222 13.8848 6.16583 13.7412C6.30958 13.5975 6.48347 13.5256 6.6875 13.5256C6.89153 13.5256 7.06542 13.5975 7.20917 13.7412C7.35278 13.8848 7.42458 14.0587 7.42458 14.2629C7.42458 14.4669 7.35278 14.6407 7.20917 14.7844C7.06542 14.9281 6.89153 15 6.6875 15ZM13.3542 15C13.1501 15 12.9763 14.9281 12.8325 14.7844C12.6889 14.6407 12.6171 14.4669 12.6171 14.2629C12.6171 14.0587 12.6889 13.8848 12.8325 13.7412C12.9763 13.5975 13.1501 13.5256 13.3542 13.5256C13.5582 13.5256 13.7321 13.5975 13.8758 13.7412C14.0194 13.8848 14.0913 14.0587 14.0913 14.2629C14.0913 14.4669 14.0194 14.6407 13.8758 14.7844C13.7321 14.9281 13.5582 15 13.3542 15Z"
                                      fill="#7D838C"
                                      />
                                  </g>
                              </svg>
                              <span>{blog.dateLabel}</span>
                          </div>
                          <span className="pl-4">{blog.readTime} read</span>
                      </div>
                      <h1 className="text-4xl md:text-5xl font-semibold text-white tracking-wider !leading-tight">
                          {blog.title}
                      </h1>
                      {blog.category && 
                          <p className="font-medium text-sm md:text-base text-gray-900 tracking-wider mt-4">
                              {blog.category}
                          </p>
                      }
                  {/* <div className="text-gray-400 text-sm mt-3 flex items-center gap-3">
                      <span>{blog.dateLabel}</span>
                      <span>•</span>
                      <span>{blog.readTime}</span>
                  </div> */}
                  </div>

                  {/* Blog Image (optional) */}
                  {blog.image && (
                  <div className="mb-8">
                      <img 
                      src={blog.image} 
                      alt={blog.title}
                      className="w-full object-cover"
                      />
                  </div>
                  )}

                  {/* Markdown Content */}
                  <div className="prose prose-base md:prose-lg prose-invert dark:prose-invert max-w-none
                              prose-headings:text-white prose-headings:font-medium prose-headings:tracking-wider prose-headings:pl-4 prose-headings:border-l-4 prose-headings:border-primary
                              prose-p:text-gray-500 prose-p:leading-relaxed prose-p:tracking-wider
                              prose-a:text-purple-400 prose-a:no-underline hover:prose-a:underline
                              prose-strong:text-white prose-strong:font-semibold
                              prose-code:text-purple-300 prose-code:bg-gray-800 prose-code:px-1 prose-code:rounded
                              prose-pre:bg-gray-900 prose-pre:border prose-pre:border-gray-700
                              prose-blockquote:border-l-purple-500 prose-blockquote:bg-dark-950/25 prose-blockquote:px-10 prose-blockquote:py-5 prose-blockquote:text-xl
                              prose-blockquote:text-white prose-blockquote:italic
                              prose-ul:text-gray-300 prose-ol:text-gray-300
                              prose-li:text-gray-300 prose-li:marker:text-purple-400
                              prose-img:rounded-xl prose-img:shadow-lg
                              prose-hr:border-gray-700">
                      <ReactMarkdown 
                          components={{
                              // Convert h1 to h2 to avoid duplicate h1 (SEO best practice)
                              h1: ({ children, ...props }) => (
                                  <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4 first:mt-0" {...props}>
                                  {children}
                                  </h2>
                              ),
                              // Ensure h2 elements have proper styling
                              h2: ({ children, ...props }) => (
                                  <h2 className="text-xl md:text-2xl font-bold text-white mt-6 mb-3" {...props}>
                                  {children}
                                  </h2>
                              ),
                              // Ensure h3 elements have proper styling
                              h3: ({ children, ...props }) => (
                                  <h3 className="text-lg md:text-xl font-semibold text-white mt-5 mb-2" {...props}>
                                  {children}
                                  </h3>
                              ),
                          }}
                      >
                          {content}
                      </ReactMarkdown>
                      {blog.tags && (
                      <div className="flex flex-wrap gap-2 mb-6">
                          {blog.tags.map((tag, index) => (
                          <span
                              key={index}
                              className="bg-green text-white text-xs md:text-base tracking-wider font-normal px-4 py-2 rounded-full"
                          >
                              {tag}
                          </span>
                          ))}
                      </div>
                      )}
                  </div>

                  {/* Back to Blog Link */}
                  <div className="mt-12 pt-8 border-t border-gray-800">
                      <Link 
                          to="/blog"
                          className="inline-flex items-center gap-2 tracking-wider text-primary hover:text-green transition-colors"
                      >
                          ← Back to All Blogs
                      </Link>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default BlogPage;