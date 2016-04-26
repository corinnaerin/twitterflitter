class Color {
    /*
     * Helper functions
     */

    static executeTransform(transform, color) {
        const transformFunctions = {
            'redShift': Color.redShift,
            'blueShift': Color.blueShift,
            'greenShift': Color.greenShift,
            'invert': Color.invert
        };

        if (transformFunctions[transform]) {
            transformFunctions[transform](color);
        }
    }

    /*
     * Conversion functions
     */

    static getHexFromTime() {
        let timestamp = (new Date()).getTime();
        let hexTimestamp = timestamp.toString(16);
        return hexTimestamp.substr(hexTimestamp.length - 6, 6)
    }

    static getCSSFromRGB(color) {
        return `rgb(${color.r}, ${color.g}, ${color.b})`
    }

    static getRBGFromTime() {
        return Color.splitHexColor(Color.getHexFromTime()).base10;
    }

    static splitHexColor(hex) {
        return {
            base10: {
                r: parseInt(hex.substr(0, 2), 16),
                g: parseInt(hex.substr(2, 2), 16),
                b: parseInt(hex.substr(4, 2), 16)
            },
            base16: {
                r: hex.substr(0, 2),
                g: hex.substr(0, 2),
                b: hex.substr(0, 2)
            }
        }
    }

    /*
     * Transform functions
     */

    static adjustBrightness(color) {
        //TODO: make this adjustment more intelligent?
        var darker = color.r > 128 && color.g > 128 && color.b > 128;

        if (darker) {
            return {
                r: color.r - 100,
                g: color.g - 100,
                b: color.b - 100
            }
        } else {
            return {
                r: color.r + 100,
                g: color.g + 100,
                b: color.b + 100
            }
        }
    }

    static shift(data) {
        data *= 3;
        if (data > 255) {
            data = 255
        }
        return data;
    }

    static redShift(color) {
        color.r = Color.shift(color.r);
    }

    static blueShift(color) {
        color.b = Color.shift(color.b);
    }

    static greenShift(color) {
        color.g = Color.shift(color.g);
    }

    static invert(color) {
        return {
            r: 255 - color.r,
            g: 255 - color.g,
            b: 255 - color.b
        }
    }
}

export default Color;