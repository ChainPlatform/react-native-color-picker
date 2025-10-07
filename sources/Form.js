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
            </style>
            </head>
            <body>
                <input type="color" id="color" rgba cmyk hsla alpha name="color" style='${style}' value='' onchange="getColor(this)" />
                <script>
                    const parseRGBA = (color) => {
                        if (!color) return null;
                        const normalized = color
                            .replace(/,/g, ' ')
                            .replace(/\//, ' ')
                            .replace(/rgba?|\(|\)|%/g, '')
                            .trim();
                        const parts = normalized.split(/\s+/).map(Number);
                        const [r, g, b, a = 1] = parts;
                        return { r, g, b, a };
                    };
                    const { r, g, b, a } = parseRGBA(default_color);
                    default_color = 'rgb(${r}, ${g}, ${b})';
                    const alpha = a;
                    input.value = default_color;
                    console.log(default_color, alpha);

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