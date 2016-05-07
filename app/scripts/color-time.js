import $ from 'jquery'
import Color from './Color'

class ColorTime {
    constructor(transform = 'none') {
        this.transform = transform;

        setInterval(() => this.updateColors(), 500);
    }

    updateColors() {
        let backgroundColor = Color.getRBGFromTime();

        Color.executeTransform(this.transform, backgroundColor);

        let fontColor = Color.adjustBrightness(backgroundColor);

        $('body').css({
            'background-color': Color.getCSSFromRGB(backgroundColor),
            'color': Color.getCSSFromRGB(fontColor)
        });

        $('#bg-color').text(Color.getHexFromRGB(backgroundColor));
        $('#text-color').text(Color.getHexFromRGB(fontColor));
    }
}

export default ColorTime;