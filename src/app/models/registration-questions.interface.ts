import { TextboxQuestion } from "./question-textbox";

export interface IRegistrationQuestions {
    personalInfo: TextboxQuestion[],
    address: TextboxQuestion[],
    paymentInfo: TextboxQuestion[]
}