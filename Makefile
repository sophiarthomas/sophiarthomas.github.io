gen: $(HTML_FILES)
	@mkdir -p public 
	cp -r assets dst/
	cp -r public/* dst/
	tree -H https://sophiarthomas.com \
		--dirsfirst \
		-L 1 \
		-T 'sophiarthomas' \
		-I 'assets/|img/' \
		-o dst/listall.html \
		./dst