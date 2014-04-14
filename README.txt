For the carousels:
* Save images as: 1440x600
* Tidy them up iwth imagemagick:
 convert -strip -interlace Plane -gaussian-blur 0.05 -quality 85% slide.jpg result.jpg
