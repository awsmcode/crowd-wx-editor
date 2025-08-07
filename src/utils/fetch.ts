import type { TReport } from "../types/report";

const baseUrl = 'http://localhost:3001/data';

export const sendReport = (
    token: string,
    report: TReport,
    onSuccess: () => void,
    onError: () => void
) => {console.log(report);

    return fetch(`${baseUrl}/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'token': String(token)
        },
        body: JSON.stringify({
            category: report.category,
            auspraegung: report.auspraegung,
            lat: report.lat,
            lon: report.lon,
            place: report.place,
            timestamp: report.timestamp * 1000,
            source: report.source,
            imageUrl: report.imageUrl,
            isPublic: report.isPublic,
        }),
    })
    .then(async (response) => {
        if (!response.ok) {
            // const err = await response.json();
            // console.log(err);
            // alert("Fehler: " + JSON.stringify(err));
            onError();
        } else {
            onSuccess();
        }
    })
    .catch(() => {
        onError();
    });
}
