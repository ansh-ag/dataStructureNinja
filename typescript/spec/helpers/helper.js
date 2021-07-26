// tslint:disable-next-line:no-var-requires

const TSConsoleReporter = require("jasmine-ts-console-reporter");
jasmine.getEnv().clearReporter(); //Clear default console reporter
jasmine.getEnv().addReporter(new TSConsoleReporter());