MD_FILES=$(wildcard src/*.md)
HTML_FILES=$(patsubst src/%.md,dst/%.html,$(MD_FILES))

dst/%.html: src/%.md
	@mkdir -p dst
	pandoc \
		--standalone \
		--katex \
		--css=assets/pandoc.css \
		--from gfm$(MD_EXTENSIONS) \
		--metadata pagetitle=$< \
		$< -o $@
		
gen: $(HTML_FILES)
	@mkdir -p dst
	cp -r src/* dst/
	tree \
		-H https://sophiarthomas.github.io/dst \
		--dirsfirst \
		-L 1 \
		-T 'sophiarthomas' \
		-o dst/listall.html \
		-o dst/*.md
		dst

clean: 
	rm -rf dst

push: clean
	git add --all
	git commit -m "Makefile deploy at $$(date)" || true
	git push 