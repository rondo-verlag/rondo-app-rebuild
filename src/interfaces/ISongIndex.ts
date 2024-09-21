import ISong from "./ISong";

export default interface ISongIndex {
    list: ISong[];
    slidesFree: number[];
    slidesPaid: number[];
}
