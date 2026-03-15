const data = 2

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


// Check bit 2 in the first byte (0-based, so this is the 3rd bit from the right of the first byte)
// 101011*0*0 -> bit is 0
let bitStr = ''
for(let i=0;i<8; i++){
    bitStr += getBitFromData(data, i).toString()
}
console.log(bitStr);