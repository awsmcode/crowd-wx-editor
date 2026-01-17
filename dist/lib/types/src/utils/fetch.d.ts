import type { TReport } from "../types/report";
export declare const sendReport: (token: string, report: TReport, onSuccess: () => void, onError: () => void) => Promise<void>;
