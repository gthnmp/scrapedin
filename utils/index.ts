import { Location } from "../types";

export function sanitizeText(input: string): string {
  const trimmedText = input.trim();
  const sanitizedText = trimmedText.replace(/[\n\b\r\t\v]/g, '');
  return sanitizedText;
}

export function extractLocation(locationString: string): Location {
  const components = locationString.split(',').map((component) => component.trim());

  if (components.length === 3) {
    return {
      city: components[0] || null,
      province: components[1] || null,
      country: components[2] || null,
    };
  } else if (components.length === 2) {
    return {
      city: components[0] || null,
      province: null,
      country: components[1] || null,
    };
  } else if (components.length === 1) {
    return {
      city: components[0] || null,
      province: null,
      country: null,
    };
  } else {
    return {
      city: null,
      province: null,
      country: null,
    };
  }
}

