const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/', createProxyMiddleware({
	target: '[REMOTE_URL_HERE]',
	changeOrigin: true,
	headers: {
		'Cookie': '[COOKIE_CONTENT_HERE]'
	},
	secure: false,
	logLevel: 'debug'
}));
app.listen(3000);