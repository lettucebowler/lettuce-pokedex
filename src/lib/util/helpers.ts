export const modulo = (a: number, n: number) => ((a % n) + n) % n;

export const leftPad = (width: number, number: number): string => {
	const padding = Array(width).fill(0).join('');
	return `${(padding + number).slice(-width)}`;
};
