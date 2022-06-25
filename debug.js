const c = {
	reset: "\x1b[0m",
	bright: "\x1b[1m",
	dim: "\x1b[2m",
	underscore: "\x1b[4m",
	blink: "\x1b[5m",
	reverse: "\x1b[7m",
	hidden: "\x1b[8m",
	fg: {
		black: "\x1b[30m",
		red: "\x1b[31m",
		green: "\x1b[32m",
		yellow: "\x1b[33m",
		blue: "\x1b[34m",
		magenta: "\x1b[35m",
		cyan: "\x1b[36m",
		white: "\x1b[37m"
	},
	bg: {
		black: "\x1b[40m",
		red: "\x1b[41m",
		green: "\x1b[42m",
		yellow: "\x1b[43m",
		blue: "\x1b[44m",
		magenta: "\x1b[45m",
		cyan: "\x1b[46m",
		white: "\x1b[47m"
	}
};

const debug = (color, param, name = "") => console.log(c.bright + c.reverse + c.fg[color] + "%s" + c.reset, "　" + (name ? name : "DEBUG") + "　", param);

// usage example: debug.red("ctx.params");
module.exports =  {
		black: (param, name) => debug("cyan", param, name),
		red: (param, name) => debug("red", param, name),
		green: (param, name) => debug("green", param, name),
		yellow: (param, name) => debug("yellow", param, name),
		blue: (param, name) => debug("blue", param, name),
		magenta: (param, name) => debug("magenta", param, name),
		cyan: (param, name) => debug("cyan", param, name),
		white: (param, name) => debug("white", param, name)
	};
