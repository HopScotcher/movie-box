export default function truncate(number: string) {
  const toNumber = parseFloat(number);
  const truncatedValue = toNumber.toFixed(1);
  return truncatedValue;
}
