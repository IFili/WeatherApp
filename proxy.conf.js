const proxy = require('http-proxy-middleware');

module.exports = {
    '/api': {
        target: 'https://localhost:7144',
        secure: false,
        changeOrigin: true
    }
};
