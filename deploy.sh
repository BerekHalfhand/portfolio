ng build --prod && ./preload-fonts.sh && rm -rf dist/portfolio/assets/ && aws s3 cp dist/portfolio s3://yuri-portfolio --recursive
