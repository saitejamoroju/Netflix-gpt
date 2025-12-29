import { auth } from "./utils/firebase";

const AUTH_TOKEN="eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDNkNDM5Yzg0MWE1ZjkxYTkwODdmZTZkNDU3ZmE0NCIsIm5iZiI6MTc2NzAyNTczOC4yOTUsInN1YiI6IjY5NTJhYzRhMTQyZmQ0OGE5NjcwZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRODfYfV6xVtdMcFiYhUWE9tVnQyQQAZ9q89ghEaiuQ"

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkZDNkNDM5Yzg0MWE1ZjkxYTkwODdmZTZkNDU3ZmE0NCIsIm5iZiI6MTc2NzAyNTczOC4yOTUsInN1YiI6IjY5NTJhYzRhMTQyZmQ0OGE5NjcwZmE2NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.oRODfYfV6xVtdMcFiYhUWE9tVnQyQQAZ9q89ghEaiuQ'
  }
};
