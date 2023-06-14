export const parseCodeHTMLToString = (codeHTML: string) => {
	let dataParsed = codeHTML

	dataParsed = dataParsed?.replace(/&quot;/gm, `''`)
	dataParsed =
		new DOMParser().parseFromString(
			decodeURIComponent(encodeURIComponent(dataParsed)),
			'text/html'
		)?.body?.textContent || ''
	dataParsed = dataParsed?.replace(/\\/gm, `/`)

	return dataParsed
}
