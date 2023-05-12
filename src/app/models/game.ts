import { Category } from "./category";

export interface Game{
    id : number;
    name : string;
    publishedOn: Date;
    author: string;
    gamingModeId: Category;
    copies: number;
    categoryId: number
}