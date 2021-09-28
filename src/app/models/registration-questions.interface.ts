import { QuestionBase } from "./question-base";

export interface IRegistrationQuestions {
    personalInfo: QuestionBase<string>[],
    address: QuestionBase<string>[],
    paymentInfo: QuestionBase<string>[]
}