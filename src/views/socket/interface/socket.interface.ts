export namespace ISocket {
    export interface TableInfo {
        columns: Array<{
            prop: string,
            label: string,
        }>,
        data: Array<{
            msg: string,
            date: string,
        }>,
    }
}