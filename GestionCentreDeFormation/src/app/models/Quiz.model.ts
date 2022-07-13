import { Formation } from "./Formation"
import { Question } from "./Question.model"

export class Quiz {

    idQuiz!:number
    nbQuestion!:number
    pourcentage!:number

    questions!:Question[]

    formation!:Formation
}

