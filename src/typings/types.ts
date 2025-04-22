import type { loadImage } from '@napi-rs/canvas';

/**
 * Options for the "Classic" card
 */
export type ClassicOption = {
	/** Thumbnail URL or local path */
	thumbnailImage?: string;
	/** Background color in hexadecimal, e.g., "#ffffff" */
	backgroundColor?: string;
	/** Background image (URL or local path) */
	backgroundImage?: string;
	/** Image opacity, ranging from 0 (transparent) to 1 (opaque) */
	imageDarkness?: number;
	/** Progress of the reading, from 0 to 1 */
	progress?: number;
	/** Color of the progress text */
	progressColor?: string;
	/** Color of the progress bar */
	progressBarColor?: string;
	/** Displayed title */
	title?: string;
	/** Color of the title */
	titleColor?: string;
	/** Author/artist name */
	author?: string;
	/** Color of the author text */
	authorColor?: string;
	/** Start time (free format, e.g., "00:30") */
	startTime?: string;
	/** End time (free format, e.g., "03:45") */
	endTime?: string;
	/** Color of the time text */
	timeColor?: string;
};

/**
 * Options for the "ClassicPro" card
 */
export type ClassicProOption = {
	/** Thumbnail URL or local path */
	thumbnailImage?: string;
	/** Background color in hexadecimal, e.g., "#ffffff" */
	backgroundColor?: string;
	/** Background image (URL or local path) */
	backgroundImage?: string;
	/** Image opacity, ranging from 0 (transparent) to 1 (opaque) */
	imageDarkness?: number;
	/** Progress of the reading, from 0 to 1 */
	progress?: number;
	/** Color of the progress text */
	progressColor?: string;
	/** Color of the progress bar */
	progressBarColor?: string;
	/** Displayed title */
	title?: string;
	/** Color of the title */
	titleColor?: string;
	/** Author/artist name */
	author?: string;
	/** Color of the author text */
	authorColor?: string;
	/** Start time (free format, e.g., "00:30") */
	startTime?: string;
	/** End time (free format, e.g., "03:45") */
	endTime?: string;
	/** Color of the time text */
	timeColor?: string;
};

/**
 * Options for the "Dynamic" card
 */
export type DynamicOption = {
	/** Thumbnail URL or local path */
	thumbnailImage?: string;
	/** Background color in hexadecimal, e.g., "#ffffff" */
	backgroundColor?: string;
	/** Background image (URL or local path) */
	backgroundImage?: string;
	/** Image opacity, ranging from 0 (transparent) to 1 (opaque) */
	imageDarkness?: number;
	/** Progress of the reading, from 0 to 1 */
	progress?: number;
	/** Color of the progress text */
	progressColor?: string;
	/** Color of the progress bar */
	progressBarColor?: string;
	/** Displayed title */
	title?: string;
	/** Color of the title */
	titleColor?: string;
	/** Author/artist name */
	author?: string;
	/** Color of the author text */
	authorColor?: string;
};

/**
 * Options for the "Card" card
 */
export type CardOption = {
	/** Title of the card */
	title: string;
	/** Color of the title text */
	titleColor?: string;
	/** Author of the content */
	author: string;
	/** Color of the author text */
	authorColor?: string;
	/** Accepts the same input as loadImage (path, URL, Buffer, etc.) */
	thumbnailImage?: Parameters<typeof loadImage>[0];
	/** Position of the item in the list */
	trackIndex?: number;
	/** Color of the index text */
	trackIndexTextColor?: string;
	/** Background color of the index */
	trackIndexBackgroundColor?: string;
	/** Border radii (e.g., 5, or [5, 10] for specific rounded corners) */
	trackIndexBackgroundRadii?: number | number[];
	/** Background color of the card */
	backgroundColor?: string;
	/** Background image of the card */
	backgroundImage?: Parameters<typeof loadImage>[0];
	/** Opacity of the background image, ranging from 0 (transparent) to 1 (opaque) */
	imageDarkness?: number;
};
