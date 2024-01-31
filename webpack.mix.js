let mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');


mix.setPublicPath('dist')
    .options({
        postCss: [ tailwindcss('./tailwind.config.js') ],
        processCssUrls: true,
        terser: {
        terserOptions: {
            compress: {
                drop_console: true // Remove Console Code
            }
        }
    }
    })
   .sass('src/css/app.scss', 'dist/css')
    .js('src/js/app.js', 'dist/js')
    .browserSync({
        files: ["dist/css/*.css", "dist/js/*.js", "dist/*.html"],
        server: {
            baseDir: "dist",
            index: "index.html"
        },
        ghostMode: {
            clicks: true,
            forms: true,
            scroll: true
        },
        logLevel: "debug",
        browser: ["chrome", "firefox", "microsoft-edge:http://localhost:3000"]
    });


