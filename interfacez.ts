//interface tell you what to do. Not how to do it
export interface todo
{
    manager: string;
    trophies:number;
    successful: boolean;

    tactics():void;

    preseason?:string; //optional arguments
}