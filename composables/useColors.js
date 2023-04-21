export function hexToRgb(hex) {
  const sanitizedHex = hex.replaceAll("##", "#")
  const colorParts = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    sanitizedHex
  );

  if (!colorParts) {
    return null
  }

  const [, r, g, b] = colorParts

  return {
    r: parseInt(r, 16),
    g: parseInt(g, 16),
    b: parseInt(b, 16)
  }
}

export function hextToRgbString(hex) {
  const rgbObject = hexToRgb(hex)
  const r = rgbObject.r
  const g = rgbObject.g
  const b = rgbObject.b

  return `${r} ${g} ${b}`
}

function lighten(hex, intensity) {
  const color = hexToRgb(`#${hex}`)

  if (!color) {
    return ""
  }

  const r = Math.round(color.r + (255 - color.r) * intensity)
  const g = Math.round(color.g + (255 - color.g) * intensity)
  const b = Math.round(color.b + (255 - color.b) * intensity)

  return `${r} ${g} ${b}`
}

function darken(hex, intensity) {
  const color = hexToRgb(hex)

  if (!color) {
    return ""
  }

  const r = Math.round(color.r * intensity)
  const g = Math.round(color.g * intensity)
  const b = Math.round(color.b * intensity)

  return `${r} ${g} ${b}`
}

// https://github.com/javisperez/tailwindcolorshades/blob/master/src/composables/colors.ts
export function generatePalette(baseColor) {
  const response = {
    500: hextToRgbString(baseColor)
  }

  const intensityMap = {
    50: 0.95,
    100: 0.9,
    200: 0.75,
    300: 0.6,
    400: 0.3,
    600: 0.9,
    700: 0.75,
    800: 0.6,
    900: 0.49
  }

  const lightShades = [50, 100, 200, 300, 400]
  const darkShades = [600, 700, 800, 900]

  lightShades.forEach(level => {
    response[level] = lighten(baseColor, intensityMap[level]);
  })

  darkShades.forEach(level => {
    response[level] = darken(baseColor, intensityMap[level]);
  })

  return response
}