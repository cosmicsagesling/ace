import Link from "next/link";
import React from "react";

const blogs = [
  {
    title: "IELTS",
    content: [
      {
        title: "IELTS Writing Task 2: Everything You Need to Know",
        url: "https://www.ieltsadvantage.com/writing-task-2/",
        description: "Master Task 2 with structure, planning, and real strategies.",
      },
      {
        title: "10 Tips to Improve Your IELTS Speaking Band Score",
        url: "https://ielts.co.nz/newzealand/prepare/article-10-tips-improve-your-ielts-speaking-band-score",
        description: "Expert tips to enhance your IELTS Speaking performance.",
      },
      {
        title: "8 Steps to Help You Reach a Band 8 in IELTS Writing Task 2",
        url: "https://www.youtube.com/watch?v=ljF6Yu59K_g",
        description: "Step-by-step guide to achieving a Band 8 in Writing Task 2.",
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
    ],
  },
  {
    title: "PTE",
    content: [
      {
        title: "PTE Academic: Complete Preparation Guide",
        url: "https://www.pearsonpte.com/pte-academic/preparation",
        description: "Official guide to understanding PTE Academic exam structure.",
      },
      {
        title: "PTE Speaking Easy Tricks & Techniques - Score 90 Guaranteed",
        url: "https://www.youtube.com/watch?v=bdDcFdhqZeM",
        description: "Unlock the secrets to ace your PTE Speaking!",
      },
      {
        title: "Mastering PTE Writing: Write Essay",
        url: "https://medium.com/@heyaman/2-mastering-pte-writing-write-essay-add51240918a",
        description: "In-depth strategies for excelling in PTE essay writing.",
      },
      {
        title: "10 Magic Tricks to Score 60 to 90 in PTE Listening",
        url: "https://www.youtube.com/watch?v=9rH_5Ek1vNc",
        description: "Expert tricks to boost your PTE Listening score.",
      },
      {
        title: "Practice for PTE Academic with This Mock-Test Plan",
        url: "https://www.pearsonpte.com/articles/practice-for-pte-with-this-mock-test-plan",
        description: "Effective strategies for utilizing mock tests in PTE prep.",
      },
    ],
  },
  {
    title: "OET",
    content: [
      {
        title: "How to Pass the OET Speaking Sub-Test",
        url: "https://oet.com/en-us/ready/speaking",
        description: "Learn about the linguistic criteria and speaking skills needed.",
      },
      {
        title: "6 OET Writing Case Notes Resources to Help You Score High",
        url: "https://oet.com/en-us/post/blog-6-oet-writing-case-notes-resources-to-help-you-score-high",
        description: "Resources for effectively approaching OET Writing case notes.",
      },
      {
        title: "OET Reading: Seven Tips to Improve Your Score",
        url: "https://oet.com/en-us/post/improve-your-reading-score",
        description: "Strategies to enhance your OET Reading performance.",
      },
      {
        title: "Your Guide to Acing the OET Test: Free Resources",
        url: "https://oet.com/en-us/post/free-study-resources-oet-preparation",
        description: "Comprehensive preparation guide for OET candidates.",
      },
    ],
  },
  {
    title: "TOEFL",
    content: [
      {
        title: "TOEFL iBT: Complete Preparation Strategy",
        url: "https://www.ets.org/toefl/preparation",
        description: "Official ETS guide to TOEFL preparation.",
      },
      {
        title: "Mastering TOEFL Writing Section",
        url: "https://www.toeflresources.com/writing-tips",
        description: "Advanced techniques for integrated and independent writing.",
      },
      {
        title: "TOEFL Speaking: Pronunciation and Fluency",
        url: "https://www.toeflprep.com/speaking-strategies",
        description: "Improve your spoken English for academic contexts.",
      },
      {
        title: "TOEFL Listening: Effective Comprehension Techniques",
        url: "https://www.toeflacademy.com/listening-skills",
        description: "Strategies to enhance academic listening skills.",
      },
      {
        title: "TOEFL Reading: Academic Comprehension Guide",
        url: "https://www.toeflresources.com/reading-strategies",
        description: "Techniques to tackle complex academic reading passages.",
      },
    ],
  },
];


const BlogLinksSection = ({title}:{title:string}) => {
  // Find the blog content for the specific title
  const blogContent = blogs.find((blog) => 
    blog.title.toLowerCase() === title.toLowerCase()
  );

  // If no matching content is found, return null
  if (!blogContent) {
    return null;
  }

  return (
    <section className="py-12 bg-white">
      <div className="mx-auto md:px-10 p-4">
        <h2 className="max-md:text-3xl text-5xl font-bold md:mb-6 max-md:mb-3 text-gray-800">
          Helpful {title} Resources & <br className="md:hidden" /> Blogs
        </h2>
        <p className="max-md:text-sm mb-10 text-gray-600">
          Stay ahead with expert {title} insights and <br className="md:hidden" /> preparation guides.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogContent.content.map((blog, index) => (
            <Link
              key={index}
              href={blog.url}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-200 p-6 rounded-2xl hover:shadow-lg transition"
            >
              <h3 className="text-lg font-semibold text-green-700 mb-2">{blog.title}</h3>
              <p className="text-sm text-gray-500">{blog.description}</p>
              <span className="block mt-3 text-sm text-green-600 font-medium">Read More →</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogLinksSection;