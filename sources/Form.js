export function formHTML(default_color = "", style = "", key_color = "", key_theme = "") {
    return `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1">
            <title>Color Picker</title>
            <meta name="author" content="santran686@gmail.com">
            <meta name="author" content="chainplatform.net">
            <style>
              * {
                    box-sizing: border-box;
              }
              body {
                    font-family: system-ui, sans-serif;
                    font-size: 14px;
                    -webkit-font-smoothing: antialiased;
                    margin: 0px;
              }
            #color {
                -webkit-appearance: none;
                padding: 0;
            }
            #color::-webkit-color-swatch {
                border-radius: 50%;
                padding: 0;
            }
            #color::-webkit-color-swatch-wrapper {
                border-radius: 50%;
                padding: 0;
            }
            </style>
            </head>
            <body>
                <input type="color" id="color" name="color" style='${style}' value='${default_color}' onchange="getColor(this)" />
                <script>
                    function getColor(input) {
                        var color = input.value;
                        if ('${default_color}' != color) {
                            let result = { datas: { color: color, key_color: '${key_color}', key_theme: '${key_theme}' } };
                            (window.ReactNativeWebView || window.parent || window).postMessage(JSON.stringify(result), '*');
                        }
                    }
                </script>
            </body>
        </html>`
}