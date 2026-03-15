const canvas = document.getElementById("QrcodeCanvas");
const ctx = canvas.getContext("2d");

const numberOfSquares = 25
const smallSquareSize = 10
const size = numberOfSquares * smallSquareSize;
canvas.width = size;
canvas.height = size;

const squareSize = size;
const xCanvas = (size - squareSize) / 2;
const yCanvas = (size - squareSize) / 2;

ctx.fillStyle = 'white';
ctx.fillRect(xCanvas, yCanvas, squareSize, squareSize);

/** 0 and 1 represents a Fixed bit and 
2 represents the available space for data
3 represents the available space for format and error correction data
4 represents the available space for data size
5 represents the available space for data type
*/
const qrcodeMininumTEXTStruct = [
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1],//1
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 0, 0, 0, 0, 1],//2
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 1, 0, 1],//3
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 1, 0, 1],//4
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 0, 1, 1, 1, 0, 1],//5
    [1, 0, 0, 0, 0, 0, 1, 0, 1, 2, 1, 2, 1, 2, 1, 2, 1, 0, 1, 0, 0, 0, 0, 0, 1],//6
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 0, 0, 1, 1, 1, 1, 1, 1, 1],//7
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//8
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//9
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//10
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//11
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//12
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//13
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//14
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//15
    [2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],//16
    [2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2],//17
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 2, 2],//18
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 1, 0, 1, 2, 2, 2, 2],//19
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 0, 0, 0, 1, 2, 2, 4, 4],//20
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 4, 4],//21
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],//22
    [1, 0, 1, 1, 1, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 4, 4],//23
    [1, 0, 0, 0, 0, 0, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5],//24
    [1, 1, 1, 1, 1, 1, 1, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 5, 5],//25
]

function toPixelPosition(n) {
    return (n - 1) * smallSquareSize
}

function drawSmallBlackSquare(line, column) {
    const x = toPixelPosition(column)
    const y = toPixelPosition(line)
    ctx.fillStyle = 'black'
    ctx.fillRect(x, y, smallSquareSize, smallSquareSize)
}

// UTF-8 Enconding or Integer
function getBitFromData(data, n) {
    let byteArr = new Uint8Array()
    if (typeof data === 'string') {
        const encoder = new TextEncoder()
        byteArr = encoder.encode(data)
    } else if (typeof data === 'number') {
        const buffer = new ArrayBuffer(4)
        const view = new DataView(buffer)
        view.setInt32(0, data, true)
        byteArr = new Uint8Array(buffer)
    } else {
        throw new Error("Unsupported data type")
    }

    // identify the correct byte:
    const byteIndex = Math.floor(n / 8)
    // Get the bit position inside that byte:
    const bitInByteIndex = n % 8

    // Check if the byte index is within the bounds of the array
    if (byteIndex >= byteArr.length || byteIndex < 0) {
        throw new Error("Bit index out of bounds")
    }

    // Big-Endian / Left-to-Right style
    const mask = 1 << (7 - bitInByteIndex)

    // Perform bitwise AND operation
    // The result will be non-zero if the bit is set
    return (byteArr[byteIndex] & mask) !== 0 ? 1 : 0
}

function drawQRCode(struct, data) {

    //(25,25),(24,25), (25,24), (24,24)
    // let i = numberOfSquares
    // let j = numberOfSquares
    // let movDirection = 'left'
    // while (i > 0 && j > 0) {
    //     switch (struct[i - 1][j - 1]) {
    //         case 5:

    //             break;
    //         case 4:

    //             break;
    //         case 3:

    //             break;
    //         case 2:

    //             break;
    //         case 1:
    //             drawSmallBlackSquare(i, j)
    //             break;
    //         default:
    //             break;
    //     }

    //     if (j === 1 && i != 1) {
    //         i--
    //         j = numberOfSquares
    //     }
    //     if (movDirection === 'left') {
    //         i--
    //         movDirection = 'diagonal'
    //     } else if (movDirection === 'diagonal') {
    //         i++
    //         j--
    //         movDirection = 'left'
    //     }
    // }

    const dataType = typeof data
    const bitsForNumber = [1,0,0,0]
    const bitsForAlphaNumeric = [0,1,0,0]

    let dataTypeCounter = 4

    const dataSize = typeof data === 'string' ? new TextEncoder().encode(data).length : 8

    for (let i = numberOfSquares; i > 0; i--) {
        for (let j = numberOfSquares; j > 0; j--) {
            switch (struct[i - 1][j - 1]) {
                case 5:
                    if(dataType == 'number' && bitsForNumber[--dataTypeCounter]===1){
                        drawSmallBlackSquare(i,j)
                    }
                    if(dataType == 'string' && bitsForAlphaNumeric[--dataTypeCounter]===1){
                        drawSmallBlackSquare(i,j)
                    }
                    break;
                case 4:

                    break;
                case 3:

                    break;
                case 2:

                    break;
                case 1:
                    drawSmallBlackSquare(i, j)
                    break;
                default:
                    break;
            }
        }
    }
}


drawQRCode(qrcodeMininumTEXTStruct, 1123)
