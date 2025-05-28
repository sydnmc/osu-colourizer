# osu-colourizer
npm package to turn any osu difficulty number into its respective colour, exactly as rendered on [osu-web](https://github.com/ppy/osu-web/)! as such, this contains the colour generation implementation from [beatmap-helper.ts](https://github.com/ppy/osu-web/blob/master/resources/js/utils/beatmap-helper.ts), written by [Purplegaze](https://github.com/Purplegaze) and [mcendu](https://github.com/mcendu)~ much love to them <3

in order to install, simply type `npm i osu-colourizer` and import with either:

 > import  *  as  osuColourize  from  'osu-colourizer';
 >
 > const osuColourize = require('osu-colourizer');

depending on if your project uses CommonJS or ESM.

## usage
osu-colourizer has 3 ways of returning colour data, `colourize`, `colourizeHex`, and `colourizeRawRgb`.

`colourize()` returns a string containing the rgb values of the colour in a css-like syntax (eg. `rgb(255, 255, 255)`).

`colourizeHex()` returns a string with the hex colour (eg. `#FFFFFF`) instead of rgb values.

`colourizeRawRgb()` returns an array with 3 rgb values as integers, rather than being in a string (eg. `[255, 255, 255])`.
