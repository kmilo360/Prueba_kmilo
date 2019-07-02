/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"com/perceptio/training/ZSALES_ORDER_KMILO/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});