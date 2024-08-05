export const _ = (array: any[]) => [...array].sort(() => Math.random() - 0.7)

export enum Difficulty {
    EASY = "easy",
    MEDIUM = "medium",
    HARD = "hard"
}

export enum Category {
    SCIENCE_COMPUTERS = "science: computers",
    SCIENCE_MATHEMATICS = "science: mathematics",
    SPORTS = "sports",
    MYTHOLOGY = "mythology",
    CELEBRITIES = "celebrities"
}

export type Question = {
    category: string;
    correct_answer: string;
    difficult: string;
    incorrect_answers: string[];
    question: string;
    type: string;
}

export type QuestionState = Question & {answers: string[]}

export const getQuizQuestions = async (amount: number, difficulty:Difficulty) => {
    const endpoint = `https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}`
    const data = await (await fetch(endpoint)).json()
    return data.results.map((question: Question) => ({
        ...question,
        answers: _([...question.incorrect_answers, question.correct_answer])
    }))
}