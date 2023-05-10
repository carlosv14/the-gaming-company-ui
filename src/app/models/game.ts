import { Category } from "./category";

export interface Game{
    name : string;
    publishedOn: Date;
    author: string;
    mode: Category;
    copies: number;
}