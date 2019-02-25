#!/bin/bash
for filename in ./dist/portfolio/*.ttf; do
  [ -e "$filename" ] || continue
  one=${filename#*./dist/portfolio/}
  two=${one%.*.ttf}
  three=${two%-*}
  salt=${one#*.}
  salt=${salt%.*}

  printf "Font:\n"
  printf 'assets/fonts/'"$three"'/'"$two"'.ttf\n'
  printf "was replaced with:\n"
  printf "$three"'.'"$salt"'.ttf\n'

  sed -i -e 's/assets\/fonts\/'"$three"'\/'"$two"'.ttf/'"$two"'.'"$salt"'.ttf/g' ./dist/portfolio/index.html
  printf "===SUCCESS===\n"

done
