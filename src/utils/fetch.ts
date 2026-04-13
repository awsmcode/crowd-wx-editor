import type { TReport } from "../types/report";
import { baseUrl } from "../configs";


export const sendReport = (
    token: string,
    report: TReport,
    onSuccess: () => void,
    onError: () => void
) => {
    return fetch(`${baseUrl}/reports/add`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'token': String(token),
            'X-API-Key': String(token)
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
            ...(report.name ? { name: report.name } : {}),
            ...(report.description ? { description: report.description } : {}),
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
