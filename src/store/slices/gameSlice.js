import { createSlice} from "@reduxjs/toolkit";

const initialState = {
    questions: [],
    error:null,
    score:null,
    currentQuestionIndex:null,
    answers:[]
};

const quizSlice = createSlice({
    name:'quiz',
    initialState,
    reducers:{
        fetchQuestionSuccess(state,actions){
            state.questions = actions.payload;
            state.score = 0;
            state.currentQuestionIndex = 0;
            state.answers = [];
        },
        fetchQuestionFail(state,actions){
            state.error = actions.payload;
        },
        answerQuestion(state,action){
            const currentQuestion = state.questions[state.currentQuestionIndex];
            state.score += action.payload.answer === currentQuestion.correct_answer ?  1:0;
            state.answers.push({
                questions:currentQuestion.question,
                answer:action.payload.answer,
                correctAnswer : currentQuestion.correct_answer,
                isCorrect : action.payload.answer === currentQuestion.correct_answer
            })
        },
        nextQuestion(state,action){
            state.currentQuestionIndex += 1;
        }
    }
});

export const {fetchQuestionSuccess,fetchQuestionFail,answerQuestion,nextQuestion} = quizSlice.actions;
export default quizSlice.reducer;