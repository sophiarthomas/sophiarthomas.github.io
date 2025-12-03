MD_FILES=$(wildcard src/*.md)
HTML_FILES=$(patsubst src/%.md,dst/%.html,$(MD_FILES))

# targets: dependencies (file names)
# 	command
#	command

dst/%.html: src/%.md
	@mkdir -p dst
	pandoc \
		--standalone \
		--katex \
		--css=assets/css/style.css \
		--from gfm$(MD_EXTENSIONS) \
		--metadata pagetitle=$< \
		$< -o $@
		
gen: $(HTML_FILES)
	@mkdir -p dst
	cp -r assets dst/
	cp -r scripts dst/
	cp -r src/*.html dst/
	tree \
		-H https://sophiarthomas.github.io/ \
		--dirsfirst \
		-L 1 \
		-I 'assets/|css/' \
		-T 'sophiarthomas' \
		-o dst/listall.html \
		dst

clean: 
	rm -rf dst

push: clean
	git add --all
	git commit -m "Makefile deploy at $$(date)" || true
	git push 