"use client";
import React, { useState } from "react";
import { useParams, notFound } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { mockTestData, MockTest, IconMap } from "@/app/data/types/mockTestData";

// Type for user answers with more precise typing
type UserAnswers = Record<string, string | undefined>;

const CourseMockTest = () => {
  const params = useParams();
  const slug = params.slug as string;
  const test: MockTest | undefined = mockTestData[slug];

  // Explicitly type state variables
  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [openResultModal, setOpenResultModal] = useState<boolean>(false);

  // Early return with type-safe check
  if (!test) return notFound();

  // Type-safe icon selection with fallback
  const TestIcon =
    IconMap[test.icon as keyof typeof IconMap] || IconMap["Globe"];

  // Type-annotated event handler
  const handleAnswerChange = (questionId: string, answer: string): void => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  // Type-annotated submit handler
  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    // Type-safe score calculation
    const calculatedScore = test.questions.reduce((total, question) => {
      return userAnswers[question.id] === question.answer ? total + 1 : total;
    }, 0);

    setScore(calculatedScore);
    setIsSubmitted(true);
    setOpenResultModal(true);
  };

  // Type-annotated reset function
  const resetTest = (): void => {
    setUserAnswers({});
    setIsSubmitted(false);
    setOpenResultModal(false);
  };

  // Type-safe function to check if all questions are answered
  const areAllQuestionsAnswered = (): boolean => {
    return test.questions.every((q) => userAnswers[q.id] !== undefined);
  };

  // Determine result message with type safety
  const getResultMessage = (): string => {
    const totalQuestions = test.questions.length;
    if (score === totalQuestions) return "Perfect score! Excellent job!";
    if (score > totalQuestions / 2) return "Good performance. Keep practicing!";
    return "You might want to review the material again.";
  };

  return (
    <main className="md:p-10 max-w-full mx-auto bg-[url('https://cdn.svgator.com/images/2022/06/animated-svg-background-css.svg')]">
      <Card className="mx-auto max-w-6xl" >
        <CardHeader className="relative flex flex-row items-center gap-4 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnq7GKOPvZXT_57kDL8jeLAhVTzIbrnARPnQ&s')] py-20">
          <TestIcon className="w-20 h-20 text-primary max-md:hidden" />
          <div>
            <h2 className="text-4xl max-md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-b from-green-700 to-green-800">
              {test.title}
            </h2>
            <p className="text-muted-foreground max-md:text-sm">{test.description}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
          </div>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            {test.questions.map((q, idx) => (
              <div key={q.id} className="mb-6 p-4 border rounded-lg">
                <p className="font-semibold mb-3">
                  {idx + 1}. {q.question}
                </p>
                {q.options.map((opt) => (
                  <div
                    key={opt}
                    className={`
                      flex items-center gap-2 p-2 rounded-md cursor-pointer 
                      ${
                        isSubmitted && opt === q.answer
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
                      type="radio"
                      id={`${q.id}-${opt}`}
                      name={q.id}
                      value={opt}
                      checked={userAnswers[q.id] === opt}
                      onChange={() => handleAnswerChange(q.id, opt)}
                      disabled={isSubmitted}
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
                disabled={!areAllQuestionsAnswered()}
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
    </main>
  );
};

export default CourseMockTest;
