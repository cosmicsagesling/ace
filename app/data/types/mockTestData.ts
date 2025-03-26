// types/mockTest.ts
import { Globe, BookOpen } from 'lucide-react';

export interface MockTestQuestion {
  id: string;
  question: string;
  options: string[];
  answer: string;
  explanation?: string;
}

export interface MockTest {
  id: string;
  title: string;
  description: string;
  icon: string;
  duration: number;
  questions: MockTestQuestion[];
}

export const IconMap = {
  'Globe': Globe,
  'BookOpen': BookOpen
} as const;

export interface MockTestQuestion {
    id: string;
    question: string;
    options: string[];
    answer: string;
    explanation?: string;
  }
  
  export interface MockTest {
    id: string;
    title: string;
    description: string;
    icon: string;
    duration: number; // in minutes
    questions: MockTestQuestion[];
  }
  

  export const mockTestData: Record<string, MockTest> = {
    "ielts-mocktest": {
    id: "ielts-mocktest",
    title: "IELTS Practice Test",
    description: "Test your English language proficiency with our comprehensive IELTS mock exam",
    icon: "Globe",
    duration: 2,
    questions: [
      {
        id: "ielts-q1",
        question: "What does IELTS stand for?",
        options: [
          "International English Language Testing System",
          "Indian English Language Training System",
          "International English Learning Test Service"
        ],
        answer: "International English Language Testing System",
        explanation: "IELTS is a standardized test for measuring English language proficiency."
      },
      {
        id: "ielts-q2",
        question: "Which of the following is not a section in the IELTS exam?",
        options: ["Listening", "Reading", "Speaking", "Coding"],
        answer: "Coding",
        explanation: "The IELTS exam consists of Listening, Reading, Writing, and Speaking sections."
      },
      {
        id: "ielts-q3",
        question: "How long is the IELTS Speaking test?",
        options: ["11-14 minutes", "20 minutes", "30 minutes"],
        answer: "11-14 minutes",
        explanation: "The IELTS Speaking test is a face-to-face interview lasting 11-14 minutes."
      },
      {
        id: "ielts-q4",
        question: "What is the highest band score in IELTS?",
        options: ["7.5", "8.5", "9"],
        answer: "9",
        explanation: "The IELTS exam is scored on a scale of 1 to 9."
      },
      {
        id: "ielts-q5",
        question: "Which section of IELTS includes multiple-choice questions, matching, and sentence completion?",
        options: ["Listening", "Writing", "Speaking"],
        answer: "Listening",
        explanation: "The Listening section includes various question types."
      },
      {
        id: "ielts-q6",
        question: "Which IELTS module is required for immigration purposes?",
        options: ["Academic", "General Training"],
        answer: "General Training",
        explanation: "General Training is for immigration, while Academic is for study abroad."
      },
      {
        id: "ielts-q7",
        question: "How many tasks are there in the IELTS Writing section?",
        options: ["1", "2", "3"],
        answer: "2",
        explanation: "There are two writing tasks in IELTS."
      },
      {
        id: "ielts-q8",
        question: "Which country primarily uses IELTS scores for university admissions?",
        options: ["USA", "UK", "India"],
        answer: "UK",
        explanation: "IELTS is widely accepted in the UK for higher education."
      },
      {
        id: "ielts-q9",
        question: "How long is an IELTS score valid?",
        options: ["1 year", "2 years", "5 years"],
        answer: "2 years",
        explanation: "IELTS scores are valid for two years."
      },
      {
        id: "ielts-q10",
        question: "What is the format of the IELTS Listening test?",
        options: ["Computer-based", "Paper-based", "Both"],
        answer: "Both",
        explanation: "IELTS Listening can be taken in both formats."
      }
    ]
  },

  "pte-mocktest": {
    id: "pte-mocktest",
    title: "PTE Practice Test",
    description: "Prepare for your Pearson Test of English with our comprehensive mock exam",
    icon: "BookOpen",
    duration: 2,
    questions: [
      {
        id: "pte-q1",
        question: "PTE is primarily accepted in which of the following countries?",
        options: ["USA", "India", "Australia", "Canada"],
        answer: "Australia",
        explanation: "PTE is widely accepted for immigration and academic purposes in Australia."
      },
      {
        id: "pte-q2",
        question: "What does PTE stand for?",
        options: ["Pearson Test of English", "Professional Test of English", "Practical Test of English"],
        answer: "Pearson Test of English",
        explanation: "PTE stands for Pearson Test of English, a computer-based English language test."
      },
      {
        id: "pte-q3",
        question: "How is the PTE test delivered?",
        options: ["Paper-based", "Computer-based", "Oral"],
        answer: "Computer-based",
        explanation: "PTE is a fully computer-based test."
      },
      {
        id: "pte-q4",
        question: "How many sections are in the PTE Academic test?",
        options: ["2", "3", "4"],
        answer: "3",
        explanation: "PTE Academic consists of Speaking & Writing, Reading, and Listening."
      },
      {
        id: "pte-q5",
        question: "What is the highest possible score in PTE?",
        options: ["90", "100", "120"],
        answer: "90",
        explanation: "The PTE Academic is scored between 10 and 90."
      },
      {
        id: "pte-q6",
        question: "How long does it take to get PTE results?",
        options: ["24 hours", "5 days", "2 weeks"],
        answer: "24 hours",
        explanation: "PTE test results are usually available within 24 hours."
      },
      {
        id: "pte-q7",
        question: "Which section of PTE includes essay writing?",
        options: ["Listening", "Speaking & Writing", "Reading"],
        answer: "Speaking & Writing",
        explanation: "Essay writing is part of the Speaking & Writing section."
      },
      {
        id: "pte-q8",
        question: "What type of tasks are in the PTE Listening section?",
        options: ["Multiple choice", "Fill in the blanks", "Both"],
        answer: "Both",
        explanation: "The PTE Listening section includes various tasks like multiple choice and fill in the blanks."
      },
      {
        id: "pte-q9",
        question: "What skill does the 'Retell Lecture' task test?",
        options: ["Listening", "Reading", "Speaking"],
        answer: "Listening",
        explanation: "The 'Retell Lecture' task assesses listening comprehension."
      },
      {
        id: "pte-q10",
        question: "How long is a PTE score valid?",
        options: ["1 year", "2 years", "5 years"],
        answer: "2 years",
        explanation: "PTE scores remain valid for two years."
      }
    ]
  },
  "oet-mocktest":{
    id: "oet-mocktest",
    title: "OET Practice Test",
    description: "Prepare for your Occupational English Test with our comprehensive mock exam",
    icon: "Globe",
    duration: 2,
    questions: [
      {
        id: "oet-q1",
        question: "What does OET stand for?",
        options: ["Occupational English Test", "Official English Test", "Overseas English Test"],
        answer: "Occupational English Test",
        explanation: "OET is designed for healthcare professionals."
      },
      {
        id: "oet-q2",
        question: "Which profession is NOT covered under OET?",
        options: ["Nursing", "Dentistry", "Engineering"],
        answer: "Engineering",
        explanation: "OET is intended for healthcare professionals only."
      },
      {
        id: "oet-q3",
        question: "How many sub-tests does the OET exam have?",
        options: ["2", "3", "4"],
        answer: "4",
        explanation: "OET consists of Listening, Reading, Writing, and Speaking sub-tests."
      },
      {
        id: "oet-q4",
        question: "Which OET sub-test requires role-play with an examiner?",
        options: ["Listening", "Reading", "Speaking"],
        answer: "Speaking",
        explanation: "The Speaking sub-test involves role-play scenarios with an examiner."
      },
      {
        id: "oet-q5",
        question: "How long is the OET Listening section?",
        options: ["20 minutes", "30 minutes", "50 minutes"],
        answer: "50 minutes",
        explanation: "The Listening section is approximately 50 minutes long."
      },
      {
        id: "oet-q6",
        question: "What is the highest possible OET score per section?",
        options: ["300", "500", "700"],
        answer: "500",
        explanation: "Each OET section is scored on a scale of 0-500."
      },
      {
        id: "oet-q7",
        question: "Which OET section requires candidates to write a referral letter?",
        options: ["Listening", "Reading", "Writing"],
        answer: "Writing",
        explanation: "The Writing section involves composing a referral, discharge, or transfer letter."
      },
      {
        id: "oet-q8",
        question: "What is the validity period of an OET score?",
        options: ["1 year", "2 years", "5 years"],
        answer: "2 years",
        explanation: "OET scores are valid for two years."
      },
      {
        id: "oet-q9",
        question: "Which country primarily accepts OET for healthcare professionals?",
        options: ["USA", "Australia", "Germany"],
        answer: "Australia",
        explanation: "OET is widely accepted in Australia for healthcare professionals."
      },
      {
        id: "oet-q10",
        question: "What is the format of the OET exam?",
        options: ["Paper-based only", "Computer-based only", "Both"],
        answer: "Both",
        explanation: "OET can be taken in either paper-based or computer-based formats."
      }
    ]
  },
  "toefl-mocktest":{
    id: "toefl-mocktest",
  title: "TOEFL Practice Test",
  description: "Prepare for your Test of English as a Foreign Language with our comprehensive mock exam",
  icon: "BookOpen",
  duration: 2,
  questions: [
    {
      id: "toefl-q1",
      question: "What does TOEFL stand for?",
      options: ["Test of English as a Foreign Language", "Teaching of English as a Foreign Language", "Technical English Official Language"],
      answer: "Test of English as a Foreign Language",
      explanation: "TOEFL is a standardized test for non-native English speakers."
    },
    {
      id: "toefl-q2",
      question: "Which section of TOEFL evaluates note-taking skills?",
      options: ["Reading", "Listening", "Speaking"],
      answer: "Listening",
      explanation: "The Listening section requires note-taking to answer questions."
    },
    {
      id: "toefl-q3",
      question: "What is the highest possible TOEFL iBT score?",
      options: ["90", "100", "120"],
      answer: "120",
      explanation: "TOEFL iBT is scored out of 120, with each section worth 30 points."
    },
    {
      id: "toefl-q4",
      question: "How many sections are there in the TOEFL iBT test?",
      options: ["3", "4", "5"],
      answer: "4",
      explanation: "TOEFL iBT consists of Reading, Listening, Speaking, and Writing sections."
    },
    {
      id: "toefl-q5",
      question: "Which section of TOEFL includes integrated tasks?",
      options: ["Reading", "Writing", "Speaking"],
      answer: "Speaking",
      explanation: "The Speaking section includes integrated tasks requiring responses based on listening and reading materials."
    },
    {
      id: "toefl-q6",
      question: "How long is the TOEFL iBT test?",
      options: ["2 hours", "3 hours", "4 hours"],
      answer: "3 hours",
      explanation: "The TOEFL iBT test takes around 3 hours to complete."
    },
    {
      id: "toefl-q7",
      question: "Which of the following skills is NOT directly tested in TOEFL?",
      options: ["Reading", "Speaking", "Grammar"],
      answer: "Grammar",
      explanation: "Grammar is assessed indirectly through Writing and Speaking tasks."
    },
    {
      id: "toefl-q8",
      question: "What type of writing task is included in TOEFL Writing section?",
      options: ["Essay Writing", "Letter Writing", "Summary Writing"],
      answer: "Essay Writing",
      explanation: "The TOEFL Writing section requires writing essays based on prompts."
    },
    {
      id: "toefl-q9",
      question: "How long is a TOEFL score valid?",
      options: ["1 year", "2 years", "5 years"],
      answer: "2 years",
      explanation: "TOEFL scores are valid for two years."
    },
    {
      id: "toefl-q10",
      question: "Which organization administers the TOEFL test?",
      options: ["ETS", "Pearson", "Cambridge"],
      answer: "ETS",
      explanation: "TOEFL is administered by the Educational Testing Service (ETS)."
    }
  ]
  }
  
  };