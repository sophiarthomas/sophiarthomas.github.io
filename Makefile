MD_FILES=$(wildcard src/*.md)
HTML_FILES=$(patsubst src/%.md,dst/%.html,$(MD_FILES))

gen: $(HTML_FILES)
	@mkdir -p dst
	cp -r assets/* dst/
	tree -H https://sophiarthomas.com \
		--dirsfirst \
		-L 1 \
		-T 'sophiarthomas' \
		-I 'assets/|img/' \
		-o dst/listall.html \
		./dst