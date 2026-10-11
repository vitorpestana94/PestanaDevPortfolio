export interface BoardParams {
   boardId: string;
}

export interface TaskParams extends BoardParams {
   taskId: string;
}

export interface ColumnParams extends BoardParams {
   columnId: string;
}

export interface MemberParams extends BoardParams {
   userId: string;
}

export interface BoardRequestParams<T> extends BoardParams {
   request: T;
}
