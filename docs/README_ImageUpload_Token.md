# Token Header beim Image Upload

Beim Upload eines Bildes wird der Token als HTTP-Header mitgesendet. Der Client setzt die Header `token` und `X-API-Key` (beide enthalten denselben Wert).

## Backend-Handling (Beispiel)

- **Header auslesen:** `token` oder `X-API-Key`.
- **Validierung:** Token wie gewohnt prüfen (z. B. gegen API-Key-Store oder JWT-Verify).

### Express.js (Node)

```ts
const token = req.header('token') ?? req.header('X-API-Key');
if (!token) {
  return res.status(401).send('Missing token');
}
// validateToken(token)
```

### Spring Boot (Java)

```java
String token = request.getHeader("token");
if (token == null) {
    token = request.getHeader("X-API-Key");
}
// validateToken(token)
```
