// Write your ES6 module here

function toggle() {

	var toggles = document.querySelectorAll('[data-toggle-target]');

	[].forEach.call(toggles, function (toggleCtrl) {

		toggleCtrl.addEventListener('click', function (e) {
			e.preventDefault();
			_handleCLick(toggleCtrl);
		});
	});
}

function _handleCLick(toggleCtrl) {

	var targets = toggleCtrl.dataset.toggleTarget.split(/\s*,\s*/);
	var action = toggleCtrl.dataset.toggleAction ? toggleCtrl.dataset.toggleAction : null;

	[].forEach.call(targets, function (target) {
		var toggleTarget = document.querySelectorAll('[data-toggle-name=' + target + ']');

		if (toggleTarget.length > 1) {
			[].forEach.call(toggleTarget, function (target) {
				_toggleSwitch(target, action);
			});
		} else {
			window.requestAnimationFrame(function () {
				_toggleSwitch(toggleTarget[0], action);
			});
		}
	});
}

function _toggleSwitch(el, action) {

	switch (action) {
		case 'on':
			el.classList.add('is-toggled');
			break;
		case 'off':
			el.classList.remove('is-toggled');
			break;
		default:
			el.classList.toggle('is-toggled');
			break;
	}
}

export default toggle;
module.exports = exports['default'];

