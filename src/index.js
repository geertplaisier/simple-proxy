const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const http = require('http');

const app = express();
const server = http.createServer(app);


const cookie = '[COOKIE_CONTENT_HERE]';
const target = '[REMOTE_URL_HERE]';

app.use('/signalr', createProxyMiddleware({
	target: target,
	ws: true,
	changeOrigin: true,
	headers: {
		'Cookie': cookie.replace('Cookie: ', '')
	},
	secure: false,
	logLevel: 'debug'
}));

app.use('/', createProxyMiddleware({
	target: target,
	changeOrigin: true,
	headers: {
		'Cookie': cookie.replace('Cookie: ', '')
	},
	secure: false,
	logLevel: 'debug'
}));

app.listen(3000);
