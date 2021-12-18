function getText() {
    let output = ""; //the final output of all calculations
    var lines = document.getElementById('textareabox').value.split('\n'); //Divide value of textarea into individual lines
    let x = 0;
    let tracker = lines.length;
    while (x < tracker){ //loop runs for number of lines
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent); //test if user is using a popular phone
        var lineLimit = 18; //Limit of characters before program starts new line.
        var lineRedux = 4; //how much to cut off of each line that is too long
        if (isMobile) { lineLimit = 9; lineRedux = 3;}
        let zester = lines[x]; //zester is a variable used for testing
        if (zester.length > lineLimit) {
          if (zester.charAt(lineLimit-lineRedux)==' '){
            lines.splice(x,1,setCharAt(zester,lineLimit-lineRedux+1," "));
            lines.splice(x+1,0,getCharAt(zester,lineLimit-lineRedux+1));}
          else{
            if(zester.charAt(lineLimit-lineRedux-1)==' '){
              lines.splice(x,1,setCharAt(zester,lineLimit-lineRedux," "));
              lines.splice(x+1,0,getCharAt(zester,lineLimit-lineRedux));
            }
            else {
            lines.splice(x,1,setCharAt(zester,lineLimit-lineRedux+1,"-"));
            lines.splice(x+1,0,getCharAt(zester,lineLimit-lineRedux+1));
            }
          }
          tracker++;
        }
        let input= ""; //initialize
        input += lines[x];  //input is all characters in the given line
        //Turn letters in input String into arrays that are used for printing
		    let word = [Array(1),Array(7)]; //initialize array. First array is the string of block letters (eg mBlock) and 2ndary arrays are their seven rows (eg [m1,m2,m3,m4,m1,m1,m1])
        word[0].length = input.length; //changes 1st array in word to be able to contain as many letters are in the input.
		    for (let i = 0; i < input.length; i++) { //for the number of letters in the input
            word[i] = blockAlpha[charAlpha.indexOf(input.toLowerCase().charAt(i))];//looks at the given character, sets one of the elements in word's 1st array dimension to an array stored in blockAlpha. inherits that array's array of strings.
		    }
        //Print out word
        for (let i = 0; i < 7; i++) { //run for 7 loops. constructing a string of block letter one row at a time.
          for (let j = 0; j < input.length; j++) {output += word[j][i]+sp[3];} //for the length of a string of characters, add one row from each character to output. i is the row we're on. j is the letter.
          output += "<br>"; //adds line break after constructing one row of a string of block letters
        }
        output += "<br>"; //adds an additional line break after constructing the bottom row of the string of block letters
        x++;
    }
		document.getElementById('test').innerHTML= output;
}

function setCharAt(str,index,chr) {
    return str.substring(0,index) + chr;// + str.substring(index);
}
function getCharAt(str,index) {
    return str.substring(index);
}

//Define Block Letters
const sp = Array(8);
for (let i = 0; i < 8; i++){let temp ="";for (let j = 0; j < i; j++){temp += "&ensp;";}sp[i]=temp;} //Generate strings of empty html spaces of various lengths
const blockAlpha = [Array(27),Array(7)];
const a1 = `${sp[1]}AAAAA${sp[1]}`;
const a2 = `A${sp[5]}A`;
const a3 = "AAAAAAA";
const aBlock = [a1,a2,a2,a3,a2,a2,a2];
blockAlpha[0] = aBlock;
const b1 = `BBBBBB${sp[1]}`;
const b2 = `B${sp[5]}B`;
const bBlock = [b1,b2,b2,b1,b2,b2,b1];
blockAlpha[1] = bBlock;
const c1 = `${sp[1]}CCCCC${sp[1]}`;
const c2 = `C${sp[5]}C`;
const c3 = `C${sp[6]}`;
const cBlock = [c1,c2,c3,c3,c3,c2,c1];
blockAlpha[2] = cBlock;
const d1 = `DDDDDD${sp[1]}`;
const d2 = `D${sp[5]}D`;
const dBlock = [d1,d2,d2,d2,d2,d2,d1];
blockAlpha[3] = dBlock;
const e1 = "EEEEEEE";
const e2 = `E${sp[6]}`;
const eBlock = [e1,e2,e2,e1,e2,e2,e1];
blockAlpha[4] = eBlock;
const f1 = "FFFFFFF";
const f2 = `F${sp[6]}`;
const fBlock = [f1,f2,f2,f1,f2,f2,f2];
blockAlpha[5] = fBlock;
const g1 = "GGGGGGG";
const g2 = `G${sp[5]}G`;
const g3 = `G${sp[6]}`;
const g4 = `G${sp[3]}GGG`;
const gBlock = [g1,g2,g3,g4,g2,g2,g1];
blockAlpha[6] = gBlock;
const h1 = `H${sp[5]}H`;
const h2 = "HHHHHHH";
const hBlock = [h1,h1,h1,h2,h1,h1,h1];
blockAlpha[7] = hBlock;
const i1 = "IIIIIII";
const i2 = `${sp[3]}I${sp[3]}`;
const iBlock = [i1,i2,i2,i2,i2,i2,i1];
blockAlpha[8] = iBlock;
const j1 = "JJJJJJJ";
const j2 = `${sp[3]}J${sp[3]}`;
const j3 = `J${sp[2]}J${sp[3]}`;
const j4 = `JJJJ${sp[3]}`;
const jBlock = [j1,j2,j2,j2,j3,j3,j4];
blockAlpha[9] = jBlock;
const k1 = `K${sp[5]}K`;
const k2 = `K${sp[4]}K${sp[1]}`;
const k3 = `K${sp[3]}K${sp[2]}`;
const k4 = `KKKK${sp[3]}`;
const kBlock = [k1,k2,k3,k4,k3,k2,k1];
blockAlpha[10] = kBlock;
const l1 = `L${sp[6]}`;
const l2 = "LLLLLLL";
const lBlock = [l1,l1,l1,l1,l1,l1,l2];
blockAlpha[11] = lBlock;
const m1 = `M${sp[5]}M`;
const m2 = `MM${sp[3]}MM`;
const m3 = `M${sp[1]}M${sp[1]}M${sp[1]}M`;
const m4 = `M${sp[2]}M${sp[2]}M`;
const mBlock = [m1,m2,m3,m4,m1,m1,m1];
blockAlpha[12] = mBlock;
const n1 = `N${sp[5]}N`;
const n2 = `NN${sp[4]}N`;
const n3 = `N${sp[1]}N${sp[3]}N`;
const n4 = `N${sp[2]}N${sp[2]}N`;
const n5 = `N${sp[3]}N${sp[1]}N`;
const n6 = `N${sp[4]}NN`;
const nBlock = [n1,n2,n3,n4,n5,n6,n1];
blockAlpha[13] = nBlock;
const o1 = `${sp[1]}OOOOO${sp[1]}`;
const o2 = `O${sp[5]}O`;
const oBlock = [o1,o2,o2,o2,o2,o2,o1];
blockAlpha[14] = oBlock;
const p1 = "PPPPPPP";
const p2 = `p${sp[5]}p`;
const p3 = `p${sp[6]}`;
const pBlock = [p1,p2,p2,p1,p3,p3,p3];
blockAlpha[15] = pBlock;
const q1 = `${sp[1]}QQQQ${sp[2]}`;
const q2 = `Q${sp[4]}Q${sp[1]}`;
const q3 = `${sp[1]}QQQQQQ`;
const qBlock = [q1,q2,q2,q2,q2,q2,q3];
blockAlpha[16] = qBlock;
const r1 = `RRRRRR${sp[1]}`;
const r2 = `R${sp[5]}R`;
const rBlock = [r1,r2,r2,r1,r2,r2,r2];
blockAlpha[17] = rBlock;
const s1 = `${sp[1]}SSSSS${sp[1]}`;
const s2 = `S${sp[5]}S`;
const s3 = `S${sp[6]}`;
const s4 = `${sp[6]}S`;
const sBlock = [s1,s2,s3,s1,s4,s2,s1];
blockAlpha[18] = sBlock;
const t1 = "TTTTTTT";
const t2 = `${sp[3]}T${sp[3]}`;
const tBlock = [t1,t2,t2,t2,t2,t2,t2];
blockAlpha[19] = tBlock;
const u1 = `U${sp[5]}U`;
const u2 = `${sp[1]}UUUUU${sp[1]}`;
const uBlock = [u1,u1,u1,u1,u1,u1,u2];
blockAlpha[20] = uBlock;
const v1 = `V${sp[5]}V`;
const v2 = `${sp[1]}V${sp[3]}V${sp[1]}`;
const v3 = `${sp[2]}V${sp[1]}V${sp[2]}`;
const v4 = `${sp[3]}V${sp[3]}`;
const vBlock = [v1,v1,v1,v1,v2,v3,v4];
blockAlpha[21] = vBlock;
const w1 = `W${sp[5]}W`;
const w2 = `WW${sp[3]}WW`;
const w3 = `W${sp[1]}W${sp[1]}W${sp[1]}W`;
const w4 = `W${sp[2]}W${sp[2]}W`;
const wBlock = [w1,w1,w1,w4,w3,w2,w1];
blockAlpha[22] = wBlock;
const x1 = `X${sp[5]}X`;
const x2 = `${sp[1]}X${sp[3]}X${sp[1]}`;
const x3 = `${sp[2]}X${sp[1]}X${sp[2]}`;
const x4 = `${sp[3]}X${sp[3]}`;
const xBlock = [x1,x2,x3,x4,x3,x2,x1];
blockAlpha[23] = xBlock;
const y1 = `Y${sp[5]}Y`;
const y2 = `${sp[1]}Y${sp[3]}Y${sp[1]}`;
const y3 = `${sp[2]}Y${sp[1]}Y${sp[2]}`;
const y4 = `${sp[3]}Y${sp[3]}`;
const y5 = `${sp[2]}Y${sp[4]}`;
const y6 = `${sp[1]}Y${sp[5]}`;
const y7 = `Y${sp[6]}`;
const yBlock = [y1,y2,y3,y4,y5,y6,y7];
blockAlpha[24] = yBlock;
const z1 = `ZZZZZZZ`;
const z2 = `${sp[5]}Z${sp[1]}`;
const z3 = `${sp[4]}Z${sp[2]}`;
const z4 = `${sp[1]}ZZZZZ${sp[1]}`;
const z5 = `${sp[2]}Z${sp[4]}`;
const z6 = `${sp[1]}Z${sp[5]}`;
const zBlock = [z1,z2,z3,z4,z5,z6,z1];
blockAlpha[25] = zBlock;
const space1 = `${sp[3]}`;
const spaceBlock = Array(7); for (let i = 0; i < 7; i++) {spaceBlock[i]=space1;}
blockAlpha[26] = spaceBlock;
const dash1 = `${sp[7]}`;
const dash2 = `-------`;
const dashBlock = [dash1,dash1,dash1,dash2,dash1,dash1,dash1];
blockAlpha[27] = dashBlock;
const new1 = "\n\n\n\n\n\n\n";
const newBlock = Array(7); for (let i = 0; i < 7; i++) {newBlock[i]=new1;}
blockAlpha[28] = newBlock;
//Array of lowercase characters and space and the dash and new line
let charAlpha = [];
for (var i = 97; i < 123; i++) {
  charAlpha.push(String.fromCharCode(i).charAt(0));}
charAlpha.push(' ', '-','\n');
/*
1. Create array of characters. We know its going to be 26 then 27
    initialize empty array
    for loop
    start at 97 (the ASCII value of 'a'). run 26 times
    Push onto array character of String.fromCharCode(i).charAt(0).
    Now we have toLowerCase alphabet
2. add onto the end, a space character
3. get next character from word
4. Find word character in array of characters
                  Array.indexOf(input.toLowerCase().charAt(i))
                  gives us a number
5. set word[i] to the blockAlpha[that number]
*/
//Going forward, it needs to adjust better to window resizing and I need to determine a width value for each letter because right now the lineLimit is dictated by the widest characters.
//if I could calculate the width value of each line, it wouldn't have to have such a short lineLimit
