export default {
	colors: {
		'activityBar.background': '#101010',
		'activityBar.foreground': '#A0A0A0',
		'activityBarBadge.background': '#FFC799',
		'activityBarBadge.foreground': '#000',
		'badge.background': '#FFC799',
		'badge.foreground': '#000',
		'button.background': '#FFC799',
		'button.foreground': '#000',
		'button.hoverBackground': '#FFCFA8',
		'diffEditor.insertedLineBackground': '#99FFE415',
		'diffEditor.insertedTextBackground': '#99FFE415',
		'diffEditor.removedLineBackground': '#FF808015',
		'diffEditor.removedTextBackground': '#FF808015',
		'editor.background': '#101010',
		'editor.foreground': '#FFF',
		'editor.selectionBackground': '#FFFFFF25',
		'editor.selectionHighlightBackground': '#FFFFFF25',
		'editorBracketHighlight.foreground1': '#A0A0A0',
		'editorBracketHighlight.foreground2': '#A0A0A0',
		'editorBracketHighlight.foreground3': '#A0A0A0',
		'editorBracketHighlight.foreground4': '#A0A0A0',
		'editorBracketHighlight.foreground5': '#A0A0A0',
		'editorBracketHighlight.foreground6': '#A0A0A0',
		'editorBracketHighlight.unexpectedBracket.foreground': '#FF8080',
		'editorError.foreground': '#FF8080',
		'editorGroupHeader.tabsBackground': '#101010',
		'editorGutter.addedBackground': '#99FFE4',
		'editorGutter.deletedBackground': '#FF8080',
		'editorGutter.modifiedBackground': '#FFC799',
		'editorHoverWidget.background': '#161616',
		'editorHoverWidget.border': '#282828',
		'editorInlayHint.background': '#1C1C1C',
		'editorInlayHint.foreground': '#A0A0A0',
		'editorLineNumber.foreground': '#505050',
		'editorOverviewRuler.border': '#101010',
		'editorWarning.foreground': '#FFC799',
		'editorWidget.background': '#101010',
		focusBorder: '#FFC799',
		'icon.foreground': '#A0A0A0',
		'input.background': '#1C1C1C',
		'list.activeSelectionBackground': '#232323',
		'list.activeSelectionForeground': '#FFC799',
		'list.errorForeground': '#FF8080',
		'list.highlightForeground': '#FFC799',
		'list.hoverBackground': '#282828',
		'list.inactiveSelectionBackground': '#232323',
		'scrollbarSlider.background': '#34343480',
		'scrollbarSlider.hoverBackground': '#343434',
		'selection.background': '#666',
		'settings.modifiedItemIndicator': '#FFC799',
		'sideBar.background': '#101010',
		'sideBarSectionHeader.background': '#101010',
		'sideBarSectionHeader.foreground': '#A0A0A0',
		'sideBarTitle.foreground': '#A0A0A0',
		'statusBar.background': '#101010',
		'statusBar.debuggingBackground': '#FF7300',
		'statusBar.debuggingForeground': '#FFF',
		'statusBar.foreground': '#A0A0A0',
		'statusBarItem.remoteBackground': '#FFC799',
		'statusBarItem.remoteForeground': '#000',
		'tab.activeBackground': '#161616',
		'tab.border': '#101010',
		'tab.inactiveBackground': '#101010',
		'textLink.activeForeground': '#FFCFA8',
		'textLink.foreground': '#FFC799',
		'titleBar.activeBackground': '#101010',
		'titleBar.activeForeground': '#7E7E7E',
		'titleBar.inactiveBackground': '#101010',
		'titleBar.inactiveForeground': '#707070'
	},
	displayName: 'Vesper',
	name: 'vesper',
	tokenColors: [
		{
			scope: ['comment', 'punctuation.definition.comment'],
			settings: {
				foreground: '#8b8b8b94'
			}
		},
		{
			scope: [
				'variable',
				'string constant.other.placeholder',
				'entity.name.tag'
			],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['constant.other.color'],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['invalid', 'invalid.illegal'],
			settings: {
				foreground: '#FF8080'
			}
		},
		{
			scope: ['keyword', 'storage.type', 'storage.modifier'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: [
				'keyword.control',
				'constant.other.color',
				'punctuation.definition.tag',
				'punctuation.separator.inheritance.php',
				'punctuation.definition.tag.html',
				'punctuation.definition.tag.begin.html',
				'punctuation.definition.tag.end.html',
				'punctuation.section.embedded',
				'keyword.other.template',
				'keyword.other.substitution'
			],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['entity.name.tag', 'meta.tag.sgml', 'markup.deleted.git_gutter'],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'entity.name.function',
				'variable.function',
				'support.function',
				'keyword.other.special-method'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: ['meta.block variable.other'],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['support.other.variable', 'string.other.link'],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: [
				'constant.numeric',
				'support.constant',
				'constant.character',
				'constant.escape',
				'keyword.other.unit',
				'keyword.other',
				'constant.language.boolean'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'string',
				'constant.other.symbol',
				'constant.other.key',
				'meta.group.braces.curly constant.other.object.key.js string.unquoted.label.js'
			],
			settings: {
				foreground: '#99FFE4'
			}
		},
		{
			scope: [
				'entity.name',
				'support.type',
				'support.class',
				'support.other.namespace.use.php',
				'meta.use.php',
				'support.other.namespace.php',
				'markup.changed.git_gutter',
				'support.type.sys-types'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.css support.type.property-name',
				'source.sass support.type.property-name',
				'source.scss support.type.property-name',
				'source.less support.type.property-name',
				'source.stylus support.type.property-name',
				'source.postcss support.type.property-name',
				'source.postcss support.type.property-name',
				'support.type.vendored.property-name.css',
				'source.css.scss entity.name.tag',
				'variable.parameter.keyframe-list.css',
				'meta.property-name.css',
				'variable.parameter.url.scss',
				'meta.property-value.scss',
				'meta.property-value.css'
			],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: [
				'entity.name.module.js',
				'variable.import.parameter.js',
				'variable.other.class.js'
			],
			settings: {
				foreground: '#FF8080'
			}
		},
		{
			scope: ['variable.language'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['entity.name.method.js'],
			settings: {
				foreground: '#FFFF'
			}
		},
		{
			scope: [
				'meta.class-method.js entity.name.function.js',
				'variable.function.constructor'
			],
			settings: {
				foreground: '#FFFF'
			}
		},
		{
			scope: [
				'entity.other.attribute-name',
				'meta.property-list.scss',
				'meta.attribute-selector.scss',
				'meta.property-value.css',
				'entity.other.keyframe-offset.css',
				'meta.selector.css',
				'entity.name.tag.reference.scss',
				'entity.name.tag.nesting.css',
				'punctuation.separator.key-value.css'
			],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: [
				'text.html.basic entity.other.attribute-name.html',
				'text.html.basic entity.other.attribute-name'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'entity.other.attribute-name.class',
				'entity.other.attribute-name.id',
				'meta.attribute-selector.scss',
				'variable.parameter.misc.css'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: ['source.sass keyword.control', 'meta.attribute-selector.scss'],
			settings: {
				foreground: '#99FFE4'
			}
		},
		{
			scope: ['markup.inserted'],
			settings: {
				foreground: '#99FFE4'
			}
		},
		{
			scope: ['markup.deleted'],
			settings: {
				foreground: '#FF8080'
			}
		},
		{
			scope: ['markup.changed'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['string.regexp'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['constant.character.escape'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['*url*', '*link*', '*uri*'],
			settings: {
				fontStyle: 'underline'
			}
		},
		{
			scope: [
				'tag.decorator.js entity.name.tag.js',
				'tag.decorator.js punctuation.definition.tag.js'
			],
			settings: {
				foreground: '#FFFF'
			}
		},
		{
			scope: [
				'source.js constant.other.object.key.js string.unquoted.label.js'
			],
			settings: {
				fontStyle: 'italic',
				foreground: '#FF8080'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: [
				'text.html.markdown',
				'punctuation.definition.list_item.markdown'
			],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['text.html.markdown markup.inline.raw.markdown'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: [
				'text.html.markdown markup.inline.raw.markdown punctuation.definition.raw.markdown'
			],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: [
				'markdown.heading',
				'markup.heading | markup.heading entity.name',
				'markup.heading.markdown punctuation.definition.heading.markdown',
				'markup.heading',
				'markup.inserted.git_gutter'
			],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: ['markup.italic'],
			settings: {
				fontStyle: 'italic',
				foreground: '#FFF'
			}
		},
		{
			scope: ['markup.bold', 'markup.bold string'],
			settings: {
				fontStyle: 'bold',
				foreground: '#FFF'
			}
		},
		{
			scope: [
				'markup.bold markup.italic',
				'markup.italic markup.bold',
				'markup.quote markup.bold',
				'markup.bold markup.italic string',
				'markup.italic markup.bold string',
				'markup.quote markup.bold string'
			],
			settings: {
				fontStyle: 'bold',
				foreground: '#FFF'
			}
		},
		{
			scope: ['markup.underline'],
			settings: {
				fontStyle: 'underline',
				foreground: '#FFC799'
			}
		},
		{
			scope: ['markup.quote punctuation.definition.blockquote.markdown'],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['markup.quote']
		},
		{
			scope: ['string.other.link.title.markdown'],
			settings: {
				foreground: '#FFFF'
			}
		},
		{
			scope: ['string.other.link.description.title.markdown'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['constant.other.reference.link.markdown'],
			settings: {
				foreground: '#FFC799'
			}
		},
		{
			scope: ['markup.raw.block'],
			settings: {
				foreground: '#A0A0A0'
			}
		},
		{
			scope: ['markup.raw.block.fenced.markdown'],
			settings: {
				foreground: '#00000050'
			}
		},
		{
			scope: ['punctuation.definition.fenced.markdown'],
			settings: {
				foreground: '#00000050'
			}
		},
		{
			scope: [
				'markup.raw.block.fenced.markdown',
				'variable.language.fenced.markdown',
				'punctuation.section.class.end'
			],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['variable.language.fenced.markdown'],
			settings: {
				foreground: '#FFF'
			}
		},
		{
			scope: ['meta.separator'],
			settings: {
				fontStyle: 'bold',
				foreground: '#65737E'
			}
		},
		{
			scope: ['markup.table'],
			settings: {
				foreground: '#FFF'
			}
		}
	],
	type: 'dark'
}
