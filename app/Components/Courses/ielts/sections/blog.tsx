import React from "react";

const blogs = [
  {
    title: "IELTS Writing Task 2: Everything You Need to Know",
    url: "https://www.ieltsadvantage.com/writing-task-2/",
    description: "Master Task 2 with structure, planning, and real strategies.",
  },
  {
    title: "10 Tips to Ace Your IELTS Speaking Test",
    url: "https://ielts.idp.com/prepare/article-10-tips-ielts-speaking",
    description: "Simple tips from IDP experts to boost your speaking band.",
  },
  {
    title: "8 Steps to a Band 8 in Writing Task 2",
    url: "https://ielts.idp.com/prepare/article-ielts-writing-task-2-8-steps-to-band-8",
    description: "Step-by-step writing tips to hit your desired band.",
  },
  {
    title: "How to Ace Your IELTS Speaking Test",
    url: "https://ielts.org/news-and-insights/dont-overdo-it-how-to-ace-your-ielts-speaking-test",
    description: "Speak naturally and confidently with these insights.",
  },
  {
    title: "IELTS Speaking: Free Lessons & Essential Tips",
    url: "https://ieltsliz.com/ielts-speaking-free-lessons-essential-tips/",
    description: "Comprehensive guide with lessons, tips & sample answers.",
  },
];

const BlogLinksSection = () => {
  return (
    <section className="py-12 bg-white">
      <div className=" mx-auto md:px-10 p-4">
        <h2 className="max-md:text-3xl text-5xl font-bold md:mb-6 max-md:mb-3 text-gray-800">Helpful Resources & <br className="md:hidden" /> Blogs</h2>
        <p className="max-md:text-sm mb-10 text-gray-600">
          Stay ahead with expert insights and <br className="md:hidden" /> preparation guides.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogs.map((blog, index) => (
            <a
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.description}</p>
              <span className="block mt-3 text-sm text-green-600 font-medium">Read More →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogLinksSection;
