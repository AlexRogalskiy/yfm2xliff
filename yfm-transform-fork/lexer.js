const {bold} = require('chalk');
const MarkdownIt = require('markdown-it');
const attrs = require('markdown-it-attrs');

const log = require('./log');
const makeHighlight = require('./highlight');
const liquid = require('./liquid');

const notes = require('./plugins/notes');
const anchors = require('./plugins/anchors');
const code = require('./plugins/code');
const cut = require('./plugins/cut');
const deflist = require('./plugins/deflist');
const meta = require('./plugins/meta');
const sup = require('./plugins/sup');
const tabs = require('./plugins/tabs');
const video = require('./plugins/video');
const monospace = require('./plugins/monospace');
const yfmTable = require('./plugins/table');

function filterTokens(params, type, handler) {
	params.tokens.forEach(function forToken(token) {
		if (token.children) {
			filterTokens({tokens: token.children}, type, handler)
		}

		if (token.type === type) {
			handler(token);
		}
	});
}

// ADDED: support lexer function
function lexer(originInput, opts = {}) {
    const {
        vars = {}, path, extractTitle: extractTitleOption,
        allowHTML = false, linkify = false, breaks = true, conditionsInCode = false, disableLiquid = false,
        leftDelimiter = '{', rightDelimiter = '}',
        isLiquided = false,
        plugins = [meta, deflist, cut, notes, anchors, tabs, code, sup, video, monospace, yfmTable],
        highlightLangs = {},
        ...customOptions
    } = opts;
    const pluginOptions = {
        ...customOptions,
        vars,
        path,
        extractTitle: extractTitleOption,
        disableLiquid,
        log,
    };

    const input = disableLiquid || isLiquided
        ? originInput
        : liquid(originInput, vars, path, {conditionsInCode});

    const highlight = makeHighlight(highlightLangs);
    const md = new MarkdownIt({html: allowHTML, linkify, highlight, breaks});
    // Need for ids of headers
    md.use(attrs, {leftDelimiter, rightDelimiter});
    plugins.forEach((plugin) => md.use(plugin, pluginOptions));

    try {
        const env = {};
        const tokens = md.parse(input, env);

		const preparedTokens = [];
		preparedTokens.links = {};

		filterTokens({tokens}, 'text', (token) => {
			preparedTokens.push({
				text: token.content,
				type: 'text'
			})
		});

        return preparedTokens;
    } catch (err) {
        log.error(`Error occurred${path ? ` in ${bold(path)}` : ''}`);
        throw err;
    }
}

module.exports = lexer;
