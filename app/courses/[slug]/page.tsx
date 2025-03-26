"use client"
import React, { useState } from 'react';
import { useParams, notFound } from 'next/navigation';
import { Globe, BookOpen, Timer, CheckCircle2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { mockTestData } from '@/app/data/types/mockTestData';

type UserAnswers = Record<string, string>;

export function CourseMockTest() {
  const params = useParams();
  const slug = params.slug as string;
  const test = mockTestData[slug];

  const [userAnswers, setUserAnswers] = useState<UserAnswers>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [openResultModal, setOpenResultModal] = useState(false);

  if (!test) return notFound();

  const IconMap = {
    'Globe': Globe,
    'BookOpen': BookOpen
  };
  const TestIcon = IconMap[test.icon as keyof typeof IconMap] || Globe;

  const handleAnswerChange = (questionId: string, answer: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const calculatedScore = test.questions.reduce((total, question) => {
      return userAnswers[question.id] === question.answer 
        ? total + 1 
        : total;
    }, 0);

    setScore(calculatedScore);
    setIsSubmitted(true);
    setOpenResultModal(true);
  };

  const resetTest = () => {
    setUserAnswers({});
    setIsSubmitted(false);
    setOpenResultModal(false);
  };

  return (
    <main className="p-10 max-w-4xl mx-auto">
      <Card>
        <CardHeader className="flex flex-row items-center gap-4">
          <TestIcon className="w-12 h-12 text-primary" />
          <div>
            <h2 className='text-4xl font-semibold text-green-700 '>{test.title}</h2>
            <p className="text-muted-foreground">{test.description}</p>
          </div>
          <div className="ml-auto flex items-center gap-2">
            <Timer className="w-5 h-5" />
            <span>{test.duration} Questions</span>
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
                      ${isSubmitted && opt === q.answer 
                        ? 'bg-green-100' 
                        : isSubmitted && userAnswers[q.id] === opt && opt !== q.answer 
                          ? 'bg-red-100' 
                          : 'hover:bg-gray-100'
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
                disabled={test.questions.some(q => !userAnswers[q.id])}
              >
                Submit Test
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
            <p className="text-muted-foreground mb-6">
              {score === test.questions.length 
                ? "Perfect score! Excellent job!" 
                : score > test.questions.length / 2 
                  ? "Good performance. Keep practicing!" 
                  : "You might want to review the material again."}
            </p>
            <Button onClick={resetTest}>Retake Test</Button>
          </div>
        </DialogContent>
      </Dialog>
    </main>
  );
}

export default CourseMockTest;