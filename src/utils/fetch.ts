import type { TReport } from "../types/report";

const baseUrl = 'http://localhost:8080/v3';

export const sendReport = (token: string, report: TReport, onSuccess: () => void, onError: () => void) => {
    return fetch(`${baseUrl}/report`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            'token': String(token)
        },
        body: JSON.stringify({
            category: report.category,
            auspraegung: report.auspraegung,
            location: report.location, // @todo 
            timestamp: report.timestamp
        }),
        })
        .then(async () => {
            onSuccess();

        /*
        if (!response.ok) {
            // Fehler anzeigen (z.B. Validierungsfehler von zod)
            const err = await response.json();
            alert("Fehler: " + JSON.stringify(err));
        } else {

            refreshList();

            alert("Erfolgreich gespeichert!");
        }
        */
        })
        .catch(() => {
            onError();
        });
}
