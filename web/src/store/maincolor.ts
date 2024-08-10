export let maincolor = 'red-600';

export function setMainColor(color: string) {
  if (color && color !== '') maincolor = color;
}