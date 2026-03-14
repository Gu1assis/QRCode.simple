const canvas = document.getElementById("QrcodeCanvas");
const ctx = canvas.getContext("2d");

const numberOfSquares = 25
const smallSquareSize = 10
const size = numberOfSquares*smallSquareSize;
canvas.width = size;
canvas.height = size;

const squareSize = size;
const xCanvas = (size - squareSize) / 2;
const yCanvas = (size - squareSize) / 2;

ctx.fillStyle = 'white';
ctx.fillRect(xCanvas, yCanvas, squareSize, squareSize);

const qrcodeMininumTEXTStruct = [
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],//1
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,1],//2
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1],//3
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1],//4
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,1,1,1,0,1],//5
    [1,0,0,0,0,0,1,0,1,0,1,0,1,0,1,0,1,0,1,0,0,0,0,0,1],//6
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1],//7
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//8
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//9
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//10
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//11
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//12
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//13
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//14
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//15
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//16
    [0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],//17
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],//18
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,1,0,1,0,1,0,0,0,0],//19
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0],//20
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0],//21
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//22
    [1,0,1,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//23
    [1,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],//24
    [1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0],//25
]

function toPixelPosition(n){
    return (n-1)*smallSquareSize
}

function drawSmallBlackSquare(nx,ny) {
    const x = toPixelPosition(nx)
    const y = toPixelPosition(ny)
    ctx.fillStyle = 'black'
    ctx.fillRect(x, y ,smallSquareSize, smallSquareSize)
}

function stringToBytes(str){

}

// Será que faco uma matriz nova para definir onde é permitido guardar dados?
function putDataOnArray(){

}

function putDataSizeOnArray(){
    // um Byte nas duas colunas da direita, acima do formato

}

function drawMinStruct(struct) {
    for(let i=0; i<numberOfSquares; i++){
        for(let j=0; j<numberOfSquares; j++){
            if(struct[i][j]== 1){
                drawSmallBlackSquare(i+1,j+1)
            }
        }
    }
}


drawMinStruct(qrcodeMininumTEXTStruct)
