# Changelog

## Unreleased template

[Summary]

💥 Breaking changes:

- Breaking change description x

  Breaking change description x

  ([PR #123456](https://github.com/hmcts/hmcts-frontend/pull/123456)))

🆕 New features:

- Feature description x

  Longer feature description x

  ([PR #123456](https://github.com/hmcts/hmcts-frontend/pull/123456)))

🔧 Fixes:

- Fix description x

  Longer fix description x

  ([PR #123456](https://github.com/hmcts/hmcts-frontend/pull/123456)))

🏠 Internal:

- Intenral change description x
  ([PR #123456](https://github.com/hmcts/hmcts-frontend/pull/123456))

## 0.0.26-alpha

🔧 Fixes:

- Menu items that are links when laid out in a row (not as a toggle menu)

## 0.0.26-alpha

🔧 Fixes:

- Menu items that are links were inheriting styles from the base link style.
- An open menu stayed open even if the user clicks somewhere else on the page.

## 0.0.25-alpha

🆕 New features:

- The red warning banner now uses standard red colour instead of ‘bright-red’
- The Identity Bar now takes multiple menus which accomodates the ability to have some primary actions and other actions tucked inside a toggle menu.
- Now using latest GOV.UK Frontend v2.5.0

## 0.0.24-alpha

🆕 New features:

- The banner (formely alert) now styles custom html without too much whitespace

💥 Breaking changes:

- Rename alert to banner

🔧 Fixes:

- Toggle search z index added so that it appears on top of page.

## 0.0.23-alpha

🆕 New features:

- Changed name of Details Bar to Identity Bar
- Simplified params of Identity Bar so that it's just `title` and `items`

🏠 Internal:

- Upgrade to latest GOV.UK Frontend 2.4.0

## 0.0.22-alpha

🆕 New features:

- Added pagination
- Minification for images for publication

🏠 Internal:

- Changed sub navigation active state to explicitly state aria-current="page
- Autoprefixer added for local development
- Cleared readme from package/ folder

## 0.0.21-alpha

🆕 New features:

- Added search component
- Added ability for primary navigation to encapsulate the search component in two ways (inline and toggle)

## 0.0.20-alpha

🆕 New features:

- hmcts-hidden class and mixin
- hmcts-scrollable-pane class

## 0.0.19-alpha

🆕 New features:

- Filter toggle button
- Filter layout
- Action bar (for filters)

## 0.0.18-alpha

🏠 Internal:

- Page Header With Actions now uses Menu component
- Details Bar now uses Menu component

🆕 New features:

- Collapsible filter styling/html added

🔧 Fixes:

- Filter without selected filters doesn't show extra grey space anymore.

## 0.0.17-alpha

🆕 New features:

- Filter

## 0.0.16-alpha

- Test out publish with travis

## 0.0.15-alpha

🆕 New features:

- Page Heading With Actions
- Menu

## 0.0.14-alpha

🆕 New features:

- Details bar component to include action buttons when required

## 0.0.13-alpha

🆕 New features:

- Details bar component (also known as case bar or entity bar)

## 0.0.12-alpha

🆕 New features:

- Footer component

🔧 Fixes:

- Removed crest from global header
- Added colour variables that were not part of GDS colours

## 0.0.11-alpha

🆕 New features:

- Alert component

## 0.0.10-alpha

🔧 Fixes:

- Improved macro template for global header, sub navigation and primary navigation
- Removed container from sub navigation component
- Removed white space from crest and service name
- Adjusted focus state style for sub navigation

## 0.0.9-alpha

🔧 Fixes:

- Primary nav and sub nav aria fixes for active state

## 0.0.8-alpha

🆕 New features:

- Header component
- Primary navigation component
- HMCTS container style

🔧 Fixes:

- Sub navigation now 19px font size

## 0.0.7-alpha

🆕 New features:

- Progress bar component
- Style adjustments to sub navigation

🔧 Fixes:

- Added HTML Shiv for IE8 support
- Fixed button alignment for add another component
- Fixed secondary button hover style for ie8 due to lack of support for RGBA
- Updates made to timeline when documents shown
- Added ie8 fixes for timeline component

## 0.0.6-alpha

🆕 New features:

- Sub navigation component

## 0.0.5-alpha

🆕 New features:

- Timeline now has documents
- Frontend now exposes its assets

🔧 Fixes:

- Add another local JavaScript wasn't running
- No longer copying src/assets into public folder

## 0.0.4-alpha

🆕 New features:

- Secondary button styles

🔧 Fixes:

- Add another remove float styles from legend
- Add another uses secondary button style

🏠 Internal:

- Remove version from internal package.json

## 0.0.3-alpha

🆕 New features:

- Add another (still needs work regarding secondary button styles)

🏠 Internal:

- Now creates all.js and relevant JS for inclusion in other projects

## 0.0.2-alpha

🏠 Internal:

- Now deploys to hmcts-frontend.herokuapp.com
- Prepared some JS stuff
- Began add another component

## 0.0.1-alpha

This is the first release.

🆕 New features:

- Timeline

🏠 Internal:

- Testing release process
