export interface IData {
    number:number 
    title:string
    id?:number
};
export interface IDataParent {
    data: IData[]
    dateEnd:number
    dateStart:number
    subTitle:string
    title:string
};
export interface IDataChunk {
    items:IDataChunk[] | IDataParent[]
    title:string
}
export type IRandomData = IDataChunk[]