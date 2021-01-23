// ****************************************************************
// plugin load entry point
// ****************************************************************
function Load() {
	Echo(`ma-tools-template-plugin has been loaded...`);
	if (ma) {
		Echo(`MA Tools is avaliable to the plugin!`)
	} else {
		Echo(`MA Tools is not avaliable - it has to be on a plugin slot before this plugin!`)
	}
}

Load();

// ****************************************************************
// plugin main entry point
// ****************************************************************
function Main(display_handle: number, argument: any) {
	Printf(`ma-tools-template-plugin has been called...`);
	if (ma) {
		Printf(ma.version())
	} else {
		Printf(`MA Tools is not avaliable - it has to be imported in the pool!`)
	}
}

// ****************************************************************
// plugin exit cleanup entry point
// ****************************************************************
function Cleanup() {
	Echo(`ma-tools-template-plugin has been cleaning up...`);
}

// ****************************************************************
// plugin execute entry point
// ****************************************************************
function Execute(Type: string, ...args: any[]) {
	Echo(`ma-tools-template-plugin has been executed...`);
}

export = [Main, Cleanup, Execute];