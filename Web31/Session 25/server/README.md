# Todo API — Express + SQLite

A complete multi-user Todo REST API. Each account can only read, create, update, and delete its own todos.

## Requirements

- Node.js 20 or newer
- npm

## Setup

```bash
npm install
```

Copy `.env.example` to `.env`, then set a private `JWT_SECRET` (at least 32 characters).

```bash
# macOS / Linux
cp .env.example .env

# Windows PowerShell
Copy-Item .env.example .env
```

Start the API:

```bash
npm run dev
```

The API runs at `http://localhost:4000`. SQLite creates `data/todos.sqlite` automatically.

## Client configuration

Set the client origin in `.env`:

```env
CLIENT_ORIGIN=http://localhost:3000
```

For a browser client using the HTTP-only authentication cookie, send requests with credentials enabled:

```js
fetch("http://localhost:4000/api/todos", {
  credentials: "include"
});
```

With Axios:

```js
const api = axios.create({
  baseURL: "http://localhost:4000/api",
  withCredentials: true
});
```

The API uses an HTTP-only cookie named `access_token`; client JavaScript cannot read the token. The `/api/auth/me` endpoint can be used when the app starts to check whether the user is logged in.

## API endpoints

All responses are JSON. Protected routes require a valid login cookie. You may also send `Authorization: Bearer <token>` when using a non-browser client.

| Method | Endpoint | Auth | Purpose |
|---|---|---:|---|
| POST | `/api/auth/signup` | No | Register |
| POST | `/api/auth/login` | No | Log in |
| POST | `/api/auth/logout` | No | Clear login cookie |
| GET | `/api/auth/me` | Yes | Current user |
| GET | `/api/todos` | Yes | List current user's todos |
| POST | `/api/todos` | Yes | Create a todo |
| GET | `/api/todos/:id` | Yes | Get one of current user's todos |
| PATCH | `/api/todos/:id` | Yes | Update title, description, and/or completed |
| DELETE | `/api/todos/:id` | Yes | Delete a todo |

### Signup body

```json
{
  "name": "Alex",
  "email": "alex@example.com",
  "password": "password123"
}
```

### Login body

```json
{
  "email": "alex@example.com",
  "password": "password123"
}
```

### Create todo body

```json
{
  "title": "Learn Express",
  "description": "Build the Todo API",
  "completed": false
}
```

### Update todo body

Send only the fields to change:

```json
{
  "title": "Finish Express project",
  "completed": true
}
```

`title` is required on creation and must be 1–160 characters. `description` is optional and has a 5000-character maximum. `completed` must be a boolean.

## Mapping to your client pages

Your frontend routes can stay as you described:

- `/` → call `GET /api/todos`
- `/create` → submit to `POST /api/todos`
- `/:id` → call `GET /api/todos/:id`; update/delete with `PATCH` / `DELETE`
- `/login` → submit to `POST /api/auth/login`
- `/signup` → submit to `POST /api/auth/signup`

After signup or login, the server sets the authentication cookie. Redirect to `/`. On logout, call `POST /api/auth/logout`.

## Security notes

- Passwords are hashed with bcrypt; plaintext passwords are never stored.
- Authentication uses a signed JWT in an HTTP-only cookie.
- Every todo query is scoped to the authenticated user's ID, including update and delete. A user cannot access another user's todo by changing the URL ID.
- Helmet, CORS credentials, JSON body limits, and authentication rate limiting are enabled.
- Use HTTPS in production. Set `NODE_ENV=production`, use a strong secret, and set `CLIENT_ORIGIN` to the exact deployed frontend origin.
- If frontend and API are on different sites (not just different subdomains), cookie `sameSite` policy may need to be changed to `none` with `secure: true`, alongside appropriate CSRF protection.

## Example quick test with curl

```bash
curl -i -c cookies.txt -H "Content-Type: application/json" \
  -d '{"name":"Alex","email":"alex@example.com","password":"password123"}' \
  http://localhost:4000/api/auth/signup

curl -b cookies.txt http://localhost:4000/api/todos
```
