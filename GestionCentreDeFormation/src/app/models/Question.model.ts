import { Quiz } from "./Quiz.model"
import { Reponse } from "./Reponse.model"

export class Question {

    idQuestion!:number
    question!:string
    nbBonnesReponses!:number

    reponses!:Reponse[]

    Quiz!:Quiz
}