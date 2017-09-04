### transforms

## buildFile(file,transform)
  - file
    - specify the file to apply changes to
    - must be file type .bmp
  - transform
    - specify the type of transform to run
      - 'invert': inverts the color palette
      - 'greyify': changes color table to greyscale
      - 'colorify': increases green value in color table
      - any other values here will return undefined
