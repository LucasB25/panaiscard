// This function generates an SVG image encoded in base64
const generateSvg = (svgContent: string): string => {
	return `data:image/svg+xml;base64,${Buffer.from(svgContent).toString('base64')}`;
};

export { generateSvg };
