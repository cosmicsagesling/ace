"use client";
import React, { FormEvent, useState, useEffect } from "react";
import { useParams, notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Figtree } from "next/font/google";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Authorize from "@/app/Components/authorize";
import { mockTestData, MockTest, IconMap } from "@/app/data/types/mockTestData";


type UserAnswers = Record<string, string | undefined>;


const figtree = Figtree({
  subsets:['latin']
})

type FormData = {
  name: string;
  email: string;
  mobile: string;
};

type AuthStorageData = {
  date: string;
  name: string;
  email: string;
  authenticated: boolean;
};

const CourseMockTest = () => {
  const params = useParams();
  const slug = params.slug as string;
  const test: MockTest | undefined = mockTestData[slug];
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [loginOpen, setIsLoginOpen] = useState<boolean>(true);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [authBox, setAuthBox] = useState<boolean>(true);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    mobile: ""
  });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);

  useEffect(() => {
    if (!test) return;
    const globalAuthKey = 'global-mocktest-auth';
    const storedAuth = localStorage.getItem(globalAuthKey);
    if (storedAuth) {
      try {
        const authData: AuthStorageData = JSON.parse(storedAuth);
        const currentDate = new Date().toDateString();

        if (authData.date === currentDate && authData.authenticated) {
          setIsLoginOpen(false);
          setAuthBox(false);
        }
      } catch (error) {
        console.error("Error parsing stored auth data:", error);
      }
    }
  }, [slug, test]);

  if (!test) return notFound();


  const TestIcon =
    IconMap[test.icon as keyof typeof IconMap] || IconMap["Globe"];


  const handleAnswerChange = (questionId: string, answer: string): void => {
    if (!loginOpen && !authBox) {
      setUserAnswers((prev) => ({
        ...prev,
        [questionId]: answer,
      }));
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(formData);
    
  };


  async function handleDetails(event: FormEvent<HTMLFormElement>) {
    try {
      event.preventDefault();
      setIsLoading(true);

      const globalAuthKey = 'global-mocktest-auth';
      localStorage.setItem(globalAuthKey, JSON.stringify({
        date: new Date().toDateString(),
        name: formData.name,
        email: formData.email,
        authenticated: true
      }));
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 2000);
      });
      setIsLoginOpen(false);
      setAuthBox(false);
    }
    catch (e) {
      console.error(e);
    }
    finally {
      await new Promise<void>((resolve) => {
        setTimeout(resolve, 500);
      });
      setIsLoading(false);
    }
  }

  const handleSubmit = (e: React.FormEvent): void => {
    if (loginOpen || authBox) {
      e.preventDefault();
      return;
    }
    e.preventDefault();

    const calculatedScore = test.questions.reduce((total, question) => {
      return userAnswers[question.id] === question.answer ? total + 1 : total;
    }, 0);

    setScore(calculatedScore);
    setIsSubmitted(true);
    setOpenResultModal(true);
  };

  const resetTest = (): void => {
    setUserAnswers({});
    setIsSubmitted(false);
    setOpenResultModal(false);
  };


  const areAllQuestionsAnswered = (): boolean => {

  if (loginOpen || authBox) return false;
  return test.questions.every((q) => userAnswers[q.id] !== undefined);
  };

  const getResultMessage = (): string => {
    const totalQuestions = test.questions.length;
    const passThreshold = totalQuestions / 2;

    if (score === totalQuestions) return "Perfect score! Excellent job!";
    if (score > passThreshold) return "Good performance. Keep practicing!";
    return "You might want to review the material again.";
  };

  return (
    <main className="relative flex items-center justify-center min-h-screen">

      {authBox && (
        <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/30">
          <Card className="md:w-1/2 w-full mx-4 md:p-10 py-8">
            {loginOpen ? (
              <>
                <CardHeader>
                  <h2 className={`${figtree.className} text-2xl font-semibold`}>Enter your details to proceed the test</h2>
                  <p className="text-slate-500">Please fill all necessary details to get in touch with you.</p>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleDetails} className="flex flex-col gap-4">
                    <div>
                      <label htmlFor="name" className="block mb-2">Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        required 
                        name="name" 
                        onChange={handleInputChange} 
                        placeholder="Enter your Name" 
                        value={formData.name} 
                        className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-300" 
                      />
                    </div>
                    <div>
                      <label htmlFor="mobile" className="block mb-2">Mobile Number</label>
                      <input 
                        type="number" 
                        id="mobile" 
                        required 
                        name="mobile" 
                        onChange={handleInputChange} 
                        value={formData.mobile} 
                        placeholder="Enter your Mobile Number" 
                        className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-300" 
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block mb-2">Email Id</label>
                      <input 
                        type="email" 
                        id="email" 
                        required 
                        name="email" 
                        onChange={handleInputChange} 
                        value={formData.email} 
                        placeholder="Enter your Email ID" 
                        className="w-full px-4 py-3 rounded-lg ring-1 ring-slate-300" 
                      />
                    </div>
                    <button 
                      type="submit" 
                      className="cursor-pointer bg-gradient-to-b to-green-800 from-lime-600 text-white rounded-lg py-3 mt-4"
                    >
                      {isLoading ? 'Starting..' : 'Start Test'}
                    </button>
                  </form>
                </CardContent>
              </>
            ) : (
              <>
                <CardHeader>
<Authorize/>           </CardHeader>
                <CardContent className="text-center">
                  <h1 className="font-semibold text-3xl">Successfully Authenticated</h1>
                  <p className="text-slate-500 mt-3">You may now proceed with the test!</p>
                </CardContent>
              </>
            )}
          </Card>
        </section>
      )}
      
       <section 
        className={`
          md:p-10 w-full mx-auto 
          ${authBox ? 'blur-xs pointer-events-none ' : ''}
          bg-[url('https://cdn.svgator.com/images/2022/06/animated-svg-background-css.svg')]
        `}
      >
        <Card className="z-10 mx-auto max-w-full">
          <CardHeader className="relative flex flex-row items-center gap-4 bg-[url('/oriental-tiles.png')] bg-[auto_350px] md:py-20 py-10">
            <TestIcon className="w-20 h-20 text-white max-md:hidden" />
            <div>
              <h2 className={`${figtree.className} text-4xl max-md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-green-300 to-white`}>
                {test.title}
              </h2>
              <p className="text-slate-300 max-md:text-sm">{test.description}</p>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              {test.questions.map((q, idx) => (
                <div key={q.id} className="mb-6 p-4 border rounded-lg">
                  <p className="font-semibold text-lg mb-3">
                    {idx + 1}. {q.question}
                  </p>
                  {q.options.map((opt) => (
                    <div
                      key={opt}
                      className={`
                      flex items-center gap-2 p-2 rounded-md cursor-pointer 
                      ${isSubmitted && opt === q.answer
                          ? "bg-green-100"
                          : isSubmitted &&
                            userAnswers[q.id] === opt &&
                            opt !== q.answer
                            ? "bg-red-100"
                            : "hover:bg-gray-100"
                        }
                    `}
                    >
                      <input
                      required
                        type="radio"
                        id={`${q.id}-${opt}`}
                        name={q.id}
                        value={opt}
                        checked={userAnswers[q.id] === opt}
                        onChange={() => handleAnswerChange(q.id, opt)}
                        disabled={isSubmitted || loginOpen || authBox}
                        className="mr-2"
                      />
                      <label
                        htmlFor={`${q.id}-${opt}`}
                        className="flex-1 cursor-pointer"
                      >
                        {opt}
                      </label>
                      {isSubmitted && opt === q.answer && (
                        <CheckCircle2 className="w-5 h-5 text-green-500" />
                      )}
                    </div>
                  ))}
                  {isSubmitted && userAnswers[q.id] !== q.answer && (
                    <div className="mt-2 text-sm text-muted-foreground">
                      <strong>Correct Answer:</strong> {q.answer}
                      {q.explanation && (
                        <p className="text-xs italic">{q.explanation}</p>
                      )}
                    </div>
                  )}
                </div>
              ))}
              {!isSubmitted && (
                <button
                  type="submit"
                  className="w-full cursor-pointer bg-green-700 text-white rounded-xl py-3"
                  disabled={!areAllQuestionsAnswered() || loginOpen || authBox}
                >
                  See the Score
                </button>
              )}
            </form>
          </CardContent>
        </Card>

        <Dialog open={openResultModal} onOpenChange={setOpenResultModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Test Results</DialogTitle>
            </DialogHeader>
            <div className="text-center">
              <p className="text-xl font-bold mb-4">
                Your Score: {score} / {test.questions.length}
              </p>
              <p className="text-muted-foreground mb-6">{getResultMessage()}</p>
              <Button onClick={resetTest}>Retake Test</Button>
            </div>
          </DialogContent>
        </Dialog>
      </section>

    </main>
  );
};

export default CourseMockTest;