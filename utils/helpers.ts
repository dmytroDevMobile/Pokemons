export function capitalizeFirstLetter(str: string): string {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export function splitAndCapitalizeWords(str: string): string {
  if (!str) return str;

  const symbolsToSplit = ['-', '_'];
  const splitedArrs = symbolsToSplit.map(symbol => str.split(symbol));
  return splitedArrs[splitedArrs?.[0]?.length > 1 ? 0 : 1].map(w => capitalizeFirstLetter(w)).join(' ');
}