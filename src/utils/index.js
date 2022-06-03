export function hexToRGB(hex, alpha) {
  var r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return "rgba(" + r + ", " + g + ", " + b + ", " + alpha + ")";
  } else {
    return "rgb(" + r + ", " + g + ", " + b + ")";
  }
}

export function changeGradient(color) {
  return (
    "linear-gradient(90deg, rgba(255,255,255,1) 50%," +
    hexToRGB(color, 0.1) +
    "100%)"
  );
}
