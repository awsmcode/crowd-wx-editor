export type THostCallback = (payload: unknown) => void;
export declare const callHostCallback: (payload: unknown, callback?: THostCallback | null) => void;
