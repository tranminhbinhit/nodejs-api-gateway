
const ROUTES = [
    {
        url: '/free',
        auth: false,
        creditCheck: false,
        // rateLimit: {
        //     windowMs: 15 * 60 * 1000,
        //     max: 5
        // },
        proxy: {
            target: "https://api-main.byn.vn",
            changeOrigin: true,
            pathRewrite: {
                [`^/free`]: '',
            },
        }
    },
    {
        url: '/premium',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "https://www.google.com",
            changeOrigin: true,
            pathRewrite: {
                [`^/premium`]: '',
            },
        }
    },
]

exports.ROUTES = ROUTES;
