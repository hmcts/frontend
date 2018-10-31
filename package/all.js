var HMCTSFrontend = {};
HMCTSFrontend.AddAnother = function(container) {
	this.container = $(container);
	this.container.on('click', '.hmcts-add-another__remove-button', $.proxy(this, 'onRemoveButtonClick'));
	this.container.on('click', '.hmcts-add-another__add-button', $.proxy(this, 'onAddButtonClick'));
	this.container.find('.hmcts-add-another__add-button, hmcts-add-another__remove-button').prop('type', 'button');
};

HMCTSFrontend.AddAnother.prototype.onAddButtonClick = function(e) {
	var item = this.getNewItem();
	this.updateAttributes(this.getItems().length, item);
	this.resetItem(item);
	var firstItem = this.getItems().first();
	if(!this.hasRemoveButton(firstItem)) {
		this.createRemoveButton(firstItem);
	}
	this.getItems().last().after(item);
	item.find('input, textarea, select').first().focus();
};

HMCTSFrontend.AddAnother.prototype.hasRemoveButton = function(item) {
	return item.find('.hmcts-add-another__remove-button').length;
};

HMCTSFrontend.AddAnother.prototype.getItems = function() {
	return this.container.find('.hmcts-add-another__item');
};

HMCTSFrontend.AddAnother.prototype.getNewItem = function() {
	var item = this.getItems().first().clone();
	if(!this.hasRemoveButton(item)) {
		this.createRemoveButton(item);
	}
	return item;
};

HMCTSFrontend.AddAnother.prototype.updateAttributes = function(index, item) {
	item.find('[data-name]').each(function(i, el) {
		el.name = $(el).attr('data-name').replace(/%index%/, index);
		el.id = $(el).attr('data-id').replace(/%index%/, index);
		($(el).prev('label')[0] || $(el).parents('label')[0]).htmlFor = el.id;
	});
};

HMCTSFrontend.AddAnother.prototype.createRemoveButton = function(item) {
	item.append('<button type="button" class="govuk-button hmcts-button--secondary hmcts-add-another__remove-button">Remove</button>');
};

HMCTSFrontend.AddAnother.prototype.resetItem = function(item) {
	item.find('[data-name], [data-id]').each(function(index, el) {
		if(el.type == 'checkbox' || el.type == 'radio') {
			el.checked = false;
		} else {
			el.value = '';
		}
	});
};

HMCTSFrontend.AddAnother.prototype.onRemoveButtonClick = function(e) {
	$(e.currentTarget).parents('.hmcts-add-another__item').remove();
	var items = this.getItems();
	if(items.length === 1) {
		items.find('.hmcts-add-another__remove-button').remove();
	}
	items.each($.proxy(function(index, el) {
		this.updateAttributes(index, $(el));
	}, this));
	this.focusHeading();
};

HMCTSFrontend.AddAnother.prototype.focusHeading = function() {
	this.container.find('.hmcts-add-another__heading').focus();
};
HMCTSFrontend.Menu = function(params) {
	this.container = params.container;
	this.menu = this.container.find('.hmcts-menu__wrapper');
	if(params.menuClasses) {
		this.menu.addClass(params.menuClasses);
	}
	this.menu.attr('role', 'menu');
	this.mq = params.mq;
	this.buttonText = params.buttonText;
	this.buttonClasses = params.buttonClasses || '';
	this.keys = { esc: 27, up: 38, down: 40, tab: 9 };
	this.menu.on('keydown', '[role=menuitem]', $.proxy(this, 'onButtonKeydown'));
	this.createToggleButton();
	this.setupResponsiveChecks();
};

HMCTSFrontend.Menu.prototype.createToggleButton = function() {
	this.menuButton = $('<button class="govuk-button hmcts-menu__toggle-button ' + this.buttonClasses + '" type="button" aria-haspopup="true" aria-expanded="false">'+this.buttonText+'</button>');
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
	this.removeButtonClasses();
	this.menu.attr('role', 'menu');
	this.container.find('.hmcts-menu__item').attr('role', 'menuitem');
};

HMCTSFrontend.Menu.prototype.enableBigMode = function() {
	this.menuButton.detach();
	this.showMenu();
	this.addButtonClasses();
	this.menu.removeAttr('role');
	this.container.find('.hmcts-menu__item').removeAttr('role');
};

HMCTSFrontend.Menu.prototype.removeButtonClasses = function() {
	this.menu.find('.hmcts-menu__item').each(function(index, el) {
		if($(el).hasClass('hmcts-button--secondary')) {
			$(el).attr('data-secondary', 'true');
			$(el).removeClass('hmcts-button--secondary');
		}
		$(el).removeClass('govuk-button');
	});
};

HMCTSFrontend.Menu.prototype.addButtonClasses = function() {
	this.menu.find('.hmcts-menu__item').each(function(index, el) {
		if($(el).attr('data-secondary') == 'true') {
			$(el).addClass('hmcts-button--secondary');
		}
		$(el).addClass('govuk-button');
	});
};

HMCTSFrontend.Menu.prototype.hideMenu = function() {
	this.menuButton.attr('aria-expanded', 'false');
};

HMCTSFrontend.Menu.prototype.showMenu = function() {
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
		this.container.find('[role=menutiem]').first().focus();
	}
};

HMCTSFrontend.Menu.prototype.focusPrevious = function(currentButton) {
	var prev = $(currentButton).prev();
	if(prev[0]) {
		prev.focus();
	} else {
		this.container.find('[role=menutiem]').last().focus();
	}
};