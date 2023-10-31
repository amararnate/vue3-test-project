export interface ProfessionList {
    id: number,
    profession: string,
}

export interface DeleteContexRecord {
    id: number
}

export interface ContextData {
    id?: number,
    firstName: string,
    lastName: string,
    profession: number,
    professionName?: string,
    description: string,
}

export interface DeleteContexRecordMetaData {
    showDelete: boolean
    deleteContexRecordData: DeleteContexRecord[]
}

export interface CustomElement extends HTMLElement {
    opened: boolean
}

export interface ElementTarget {
    target: {
        value: any,
        checked: any
    }
}