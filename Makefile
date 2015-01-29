all:
	-pkill -f myth
	myth static/bowery.myth.css static/out.css
	myth --watch static/bowery.myth.css static/out.css &
	jekyll serve -H 0.0.0.0 -P 80

.PHONY: all
