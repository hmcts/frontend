HMCTSFrontend.Menu = function(params) {
	this.container = params.container;
	this.menu = this.container.find('.hmcts-menu__wrapper');
	this.menu.attr('role', 'menu');
	this.container.find('.hmcts-menu__item').attr('role', 'menuitem');
	this.mq = params.mq;
	this.buttonText = params.buttonText;
	this.keys = { esc: 27, up: 38, down: 40, tab: 9 };
	this.menu.on('keydown', '[role=menuitem]', $.proxy(this, 'onButtonKeydown'));
	this.createToggleButton();
	this.setupResponsiveChecks();
};

HMCTSFrontend.Menu.prototype.createToggleButton = function() {
	this.menuButton = $('<button class="govuk-button hmcts-menu__toggle-button" type="button" aria-haspopup="true" aria-expanded="false">'+this.buttonText+'</button>');
	this.menuButton.on('click', $.proxy(this, 'onMenuButtonClick'));
	this.menuButton.on('keydown', $.proxy(this, 'onMenuKeyDown'));
};

HMCTSFrontend.Menu.prototype.setupResponsiveChecks = function() {
	this.mql = window.matchMedia(this.mq);
	this.mql.addListener($.proxy(this, 'checkMode'));
	this.checkMode(this.mql);
};

HMCTSFrontend.Menu.prototype.checkMode = function(mql) {
	if(mql.matches) {
		this.enableBigMode();
	} else {
		this.enableSmallMode();
	}
};

HMCTSFrontend.Menu.prototype.enableSmallMode = function() {
	this.container.prepend(this.menuButton);
	this.hideMenu();
};

HMCTSFrontend.Menu.prototype.enableBigMode = function() {
	this.menuButton.detach();
	this.showMenu();
};

HMCTSFrontend.Menu.prototype.hideMenu = function() {
	this.menuButton.attr('aria-expanded', 'false');
};

HMCTSFrontend.Menu.prototype.showMenu = function(first_argument) {
	this.menuButton.attr('aria-expanded', 'true');
};

HMCTSFrontend.Menu.prototype.onMenuButtonClick = function() {
	this.toggle();
};

HMCTSFrontend.Menu.prototype.toggle = function() {
	if(this.menuButton.attr('aria-expanded') == 'false') {
		this.showMenu();
		this.menu.find('[role=menuitem]').first().focus();
	} else {
		this.hideMenu();
		this.menuButton.focus();
	}
};

HMCTSFrontend.Menu.prototype.onMenuKeyDown = function(e) {
	switch (e.keyCode) {
		case this.keys.down:
			this.toggle();
			break;
	}
};

HMCTSFrontend.Menu.prototype.onButtonKeydown = function(e) {
	switch (e.keyCode) {
		case this.keys.up:
			e.preventDefault();
			this.focusPrevious(e.currentTarget);
			break;
		case this.keys.down:
			e.preventDefault();
			this.focusNext(e.currentTarget);
			break;
		case this.keys.esc:
			if(!this.mq.matches) {
				this.menuButton.focus();
				this.hideMenu();
			}
			break;
		case this.keys.tab:
			if(!this.mq.matches) {
				this.hideMenu();
			}
	}
};

HMCTSFrontend.Menu.prototype.focusNext = function(currentButton) {
	var next = $(currentButton).next();
	if(next[0]) {
		next.focus();
	} else {
		this.container.find('input').first().focus();
	}
};

HMCTSFrontend.Menu.prototype.focusPrevious = function(currentButton) {
	var prev = $(currentButton).prev();
	if(prev[0]) {
		prev.focus();
	} else {
		this.container.find('input').last().focus();
	}
};