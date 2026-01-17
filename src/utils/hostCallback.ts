const root = document.getElementById('cw-root');
const callbackName = root?.getAttribute('data-callback') || root?.dataset.callback;

export type THostCallback = (payload: unknown) => void;

export const callHostCallback = (payload: unknown, callback?: THostCallback | null) => {
    if (typeof callback === 'function') {
        callback(payload);
        return;
    }

    if (!callbackName) {
        return;
    }

    const fn = (window as typeof window & { [key: string]: THostCallback | undefined })[callbackName];

    if (typeof fn !== 'function') {
        console.warn('Host callback nicht gefunden:', callbackName);
        return;
    }

    fn(payload);
};
