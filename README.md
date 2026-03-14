
## Especificações para codar:

Vou implementar um QRCode Version 2, que é 25x25 e pode guardar até 114 caracteres alfanuméricos ou 175 inteiros

Mostly based on this video: https://www.youtube.com/watch?v=w5ebcowAJD8

# Defining data type

the last 4x4 square at the bottom defines the data format:

- 0001: Numeric
- 0010: Alphanumeric
- 0100: Binary
- 1000: Janapenese Kanji

# The data

Each byte is represented in a 2x4 rectangle:
| 2^0 | 2^1 |
|---|---|
| 2^2 | 2^3 |
| 2^4 | 2^5 |
| 2^6 | 2^7 |

Then we begin in the bottom-right corner and go up and left in a zig zag fashion