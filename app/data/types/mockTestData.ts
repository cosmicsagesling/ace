// types/mockTest.ts
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
          options: [
            "Pearson Test of English", 
            "Professional Test of English", 
            "Practical Test of English"
          ],
          answer: "Pearson Test of English",
          explanation: "PTE stands for Pearson Test of English, a computer-based English language test."
        }
      ]
    }
  };