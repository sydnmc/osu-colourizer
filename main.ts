//original implementation on ppy's osu-web by Purplegaze and mcendu~
//thank u very much for this magic code >_<
import { scaleLinear } from "d3-scale";
import { interpolateRgb } from "d3-interpolate";
import { color } from "d3-color";

const difficultyColourSpectrum = scaleLinear<string>()
  .domain([0.1, 1.25, 2, 2.5, 3.3, 4.2, 4.9, 5.8, 6.7, 7.7, 9])
  .clamp(true)
  .range(['#4290FB', '#4FC0FF', '#4FFFD5', '#7CFF4F', '#F6F05C', '#FF8068', '#FF4E6F', '#C645B8', '#6563DE', '#18158E', '#000000'])
  .interpolate(interpolateRgb.gamma(2.2));

exports.colourize = function (difficulty: number) {
  return difficultyColourSpectrum(difficulty);
}

exports.colourizeHex = function (difficulty: number) {
  return color(difficultyColourSpectrum(difficulty))!.formatHex(); //should always get something because of clamp(true), so it's fine to supress this
}

exports.colourizeRawRgb = function (difficulty: number) {
  //the other exports are rather self explanitory, but this should return an array of numbers in case it's more beneficial to work with that~
  let colour = difficultyColourSpectrum(difficulty); //because d3 colours return back as rgb(RRR, GGG, BBB), we need to remove the extra fluff ^-^
  let colourArray: number[] = [];

  colour = colour.split('(')[1];
  colour.substring(0, colour.length); //leaves us with just the numbers

  for (let i = 0; i < 3; i++) {
    colourArray.push(parseInt(colour.split(',')[i]));
  }
  return colourArray;
}
