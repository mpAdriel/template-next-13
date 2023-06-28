import { StaticImageData } from 'next/image'

interface ILocalAssets {
	[key: string]: StaticImageData
}

export const localAssets: ILocalAssets = {
	iconError: require('./icon-error.png'),
	iconSuccess: require('./icon-success.png'),
}
