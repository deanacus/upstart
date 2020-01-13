/**
 * @module ColorFunctions
 *
 * This module provides an interface to color values in order to be able to convert
 * between formats, manipulate within those formats and return new colors or formats
 */

const formatHexString = (input) => {
  const matches = input.toString(16).match(/^#*[a-f0-9]{6}$|^#*[a-f0-9]{3}$/i);

  if (!matches) {
    return '000000';
  }

  const match = matches[0].replace('#', '');

  return match.length === 6 ? match : match.split('').map(x => x + x).join('');

}

/**
 * @function hexToRGB
 *
 * Returns the RBG value of a valid hexadecimal color string
 *
 * @param {String} input The hexadecimal value to be converted
 *
 * @returns {String} The RGB value
 */

const hexToRGB = (input) => {

  const hex = formatHexString(input)
  const rgb = hex.split(/(.{2})(.{2})(.{2})/).splice(1,3); // split the returned string, then slice out the values from the resulting array.
  return rgb.map( x => parseInt(x, 16)).join(',')
}

/**
 * @function hexToHSL
 *
 * Returns the HSL value of a valid hexadecimal color string
 *
 * @param {String} input The hexadecimal value to be converted
 *
 * @returns {String} The HSL value
 */

const hexToHSL = (input) => {

  const hex = input.replace('#', ''); // assumes an input sting like '#ffffff'

  return rbgToHSL(hexToRGB(hex));
}

/**
 * @function rbgToHex
 *
 * Returns the hexadecimal value of a valid RGB color string
 *
 * @param {String} input The RGB value to be converted
 *
 * @returns {String}
 */

const rbgToHex = (input) => {
  let output;
  return output;
}

/**
 * @function rbgToHSL
 *
 * Returns the HSL value of a valid RGB color string
 *
 * @param {String} input The RGB value to be converted
 *
 * @returns {String}
 */

const rbgToHSL = (input) => {

  const rgb = input.split(','); // Assumues a string like '255,255,255'

	const r = rgb[0] / 255;
	const g = rgb[1] / 255;
	const b = rgb[2] / 255;
	const min = Math.min(r, g, b);
	const max = Math.max(r, g, b);
	const delta = max - min;
	let h;
	let s;

	if (max === min) {
		h = 0;
	} else if (r === max) {
		h = (g - b) / delta;
	} else if (g === max) {
		h = 2 + (b - r) / delta;
	} else if (b === max) {
		h = 4 + (r - g) / delta;
	}

	h = Math.min(h * 60, 360);

	if (h < 0) {
		h += 360;
	}

	const l = (min + max) / 2;

	if (max === min) {
		s = 0;
	} else if (l <= 0.5) {
		s = delta / (max + min);
	} else {
		s = delta / (2 - max - min);
	}

	return [h, s * 100, l * 100];
};


// {
//   let output;
//   return output;
// }

/**
 * @function hslToHex
 *
 * Returns the hexadecimal value of a valid HSL color string
 *
 * @param {String} input The HSL value to be converted
 *
 * @returns {String}
 */

const hslToHex = (input) => {
  let output;
  return output;
}



/**
 * @function hslToRGB
 *
 * Returns the RGB value of a valid HSL color string
 *
 * @param {String} input The HSL value to be converted
 *
 * @returns {String}
 */

const hslToRGB = (input) => {
  let output;
  return output;
}