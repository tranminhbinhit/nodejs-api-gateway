const ROUTES = [
    {
        url: '/mantine',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "https://mantine.dev",
            changeOrigin: true,
            pathRewrite: {
                [`^/mantine`]: '',
            },
        }
    },
    {
        url: '/soppi',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "https://vnexpress.net",
            changeOrigin: true,
            pathRewrite: {
                [`^/soppi`]: '',
            },
        }
    },
    {
        url: '/api-lucky',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "https://api-main.byn.vn",
            changeOrigin: true,
            pathRewrite: {
                [`^/api-lucky`]: '',
            },
        }
    },
    // {
    //     url: '/free',
    //     auth: false,
    //     creditCheck: false,
    //     // rateLimit: {
    //     //     windowMs: 15 * 60 * 1000,
    //     //     max: 5
    //     // },
    //     proxy: {
    //         target: "https://api-main.byn.vn",
    //         changeOrigin: true,
    //         pathRewrite: {
    //             [`^/free`]: '',
    //         },
    //     }
    // },
    // {
    //     url: '/free',
    //     auth: false,
    //     creditCheck: false,
    //     rateLimit: {
    //         windowMs: 15 * 60 * 1000,
    //         max: 5
    //     },
    //     proxy: {
    //         target: "https://vnexpress.net",
    //         changeOrigin: true,
    //         pathRewrite: {
    //             [`^/free`]: '',
    //         },
    //     }
    // },
    // {
    //     url: '/premium',
    //     auth: true,
    //     creditCheck: true,
    //     proxy: {
    //         target: "https://www.google.com",
    //         changeOrigin: true,
    //         pathRewrite: {
    //             [`^/premium`]: '',
    //         },
    //     }
    // },
]

exports.ROUTES = ROUTES;
