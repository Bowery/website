all:
	-pkill -f myth
	myth --watch static/bowery.myth.css static/out.css &> debug.log &
	jekyll serve -H 0.0.0.0 -P 80

.PHONY: all