import axios from "axios";
const BASE_URL = "http://localhost:5000/api/";
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYzdjZDU4NTJkMmM0MTM1YmZhNTA0MyIsImlzQWRtaW4iOmZhbHNlLCJpYXQiOjE2NDA0ODQyMzUsImV4cCI6MTY0MDc0MzQzNX0.a0cgHJzwU4sVTGVseJEOkTPE9I7Bth1XAYlif5DN9WY";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

export const userRequest = axios.create({
  baseURL: BASE_URL,
  header: { token: `Bearer ${TOKEN}` },
});
