import { io } from "socket.io-client";
const host = process.env.NODE_ENV === "development" ? 'localhost:80' : window.location.host;
const socket = io('ws://' + host, { path: '/app/socket.io', query: { name: 'zs' } })

export default socket