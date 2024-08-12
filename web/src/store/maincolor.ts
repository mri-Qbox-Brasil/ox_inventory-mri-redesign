export let maincolor = 'green';

export function setMainColor(color: string) {
  if (color && color !== '') maincolor = color;
}