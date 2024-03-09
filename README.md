# WebSocket Chat Application

This is a simple chat web application that utilizes WebSockets for real-time communication between clients and a server.

## WebSockets Overview

WebSockets are a communication protocol providing full-duplex communication channels over a single TCP connection. They facilitate bidirectional communication between clients (such as web browsers) and servers, enabling real-time data transfer. Unlike HTTP, which follows a request-response model, where the client sends a request and the server responds, WebSockets allow continuous communication between the client and server after an initial handshake.

### How WebSockets Work

1. **Handshake**: The client initiates a WebSocket connection by sending a special HTTP request to the server, called a WebSocket handshake request. This request contains specific headers, including an `Upgrade` header, indicating the intention to upgrade the connection to a WebSocket connection.

2. **Server Response**: Upon receiving the handshake request, if the server supports WebSocket protocol, it responds with a handshake response, confirming the upgrade. This response includes the `Upgrade` header and a `Connection` header indicating the protocol change.

3. **Bi-directional Communication**: Once the handshake is complete, both the client and server can send data to each other at any time, without waiting for a request from the other party. This allows for real-time data exchange, making WebSockets suitable for applications requiring frequent updates or instant messaging.

## Getting Started

To run this WebSocket chat application, follow these steps:

1. **Setup**: Make sure you have Node.js installed on your system.

2. **Installation**: Install the `ws` library using npm:
   
3. **Running the Server**: Save the server-side code in a file named `server.js`. Run the server using Node.js:

4. **Accessing the Client**: Save the client-side code in an HTML file. Open the HTML file in a web browser (you can open multiple instances for multiple clients).

5. **Start Chatting**: Type a message in the input field, click send, and see the message appear in all connected clients in real-time.

## Files

- `server.js`: Server-side code written in Node.js using the `ws` library.
- `index.html`: Client-side code written in HTML and JavaScript for the chat interface.

## License

This project is licensed under the [MIT License](LICENSE).

