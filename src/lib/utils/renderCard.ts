import { html } from 'satori-html'
import satori from 'satori'
import { Resvg, initWasm } from '@resvg/resvg-wasm'
import Literata from '$lib/Literata.ttf'
import card from '$lib/OgCard.js'
import { writeFileSync } from 'fs'

await initWasm(fetch('https://unpkg.com/@resvg/resvg-wasm/index_bg.wasm'))

export const renderCard = async (title = '', path = '') => {
	const markup = html(card(title))
	const svg = await satori(markup, {
		width: 1200,
		height: 600,
		fonts: [
			{
				name: 'Literata',
				data: Buffer.from(Literata),
				style: 'italic'
			}
		]
	})

	const image = new Resvg(svg, {
		logLevel: 'trace'
	}).render()

	try {
		writeFileSync(path, image.asPng())
	} catch (e) {
		console.error(e)
	}
} 