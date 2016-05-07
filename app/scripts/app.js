"use strict";

import ColorTime from './color-time'
import $ from 'jquery';

new ColorTime();

$('#menu-trigger, #overlay').on('click', () => {
    $('#container').toggleClass('menu-open');
});

