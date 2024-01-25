export function xPrint(
  text: any,
  options?: { error?: boolean; warning?: boolean }
) {
  const { error = false, warning = false } = options ?? {}; // Destructure options with defaults

  if (error) {
    console.error(text);
  } else if (warning) {
    console.warn(text);
  } else {
    console.log(text);
  }
}
