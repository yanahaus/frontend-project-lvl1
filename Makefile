install:
	npm install

start:
	node bin/brain-games.js

start2:
	node bin/brain-even.js

start3:
	node bin/brain-calc.js

publish:
	npm publish --dry-run

lint:
	npx eslint .
