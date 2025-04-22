import type { loadImage } from '@napi-rs/canvas';

export type ClassicOption = {
	thumbnailImage?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	imageDarkness?: number;
	progress?: number;
	progressColor?: string;
	progressBarColor?: string;
	title?: string;
	titleColor?: string;
	author?: string;
	authorColor?: string;
	startTime?: string;
	endTime?: string;
	timeColor?: string;
};

export type ClassicProOption = {
	thumbnailImage?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	imageDarkness?: number;
	progress?: number;
	progressColor?: string;
	progressBarColor?: string;
	title?: string;
	titleColor?: string;
	author?: string;
	authorColor?: string;
	startTime?: string;
	endTime?: string;
	timeColor?: string;
};

export type DynamicOption = {
	thumbnailImage?: string;
	backgroundColor?: string;
	backgroundImage?: string;
	imageDarkness?: number;
	progress?: number;
	progressColor?: string;
	progressBarColor?: string;
	title?: string;
	titleColor?: string;
	author?: string;
	authorColor?: string;
};

export type CardOption = {
	title: string;
	titleColor?: string;
	author: string;
	authorColor?: string;
	thumbnailImage?: Parameters<typeof loadImage>[0];
	trackIndex?: number;
	trackIndexTextColor?: string;
	trackIndexBackgroundColor?: string;
	trackIndexBackgroundRadii?: number | number[];
	backgroundColor?: string;
	backgroundImage?: Parameters<typeof loadImage>[0];
	imageDarkness?: number;
};