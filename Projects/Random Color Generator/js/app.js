
const btn = document.getElementById('btn');
const color = document.getElementById("copy");
const RgbaSelect = document.getElementById('Rgba');
const HexSelect = document.getElementById('Hex');

var dick = false;
var color_return = '#F1f5f8';
HexSelect.style.color  = '#34d4f5';
RgbaSelect.style.color = 'hsl(205, 86%, 17%)';
const copyClip = '<span class="tooltiptext" id="myTooltip">Copy to clipboard</span>';


RgbaSelect.addEventListener('click', () => {
    dick = true;
    if (color_return[0] === '#') {
        let rgb_color = hexToRgb(color_return);
        color.innerHTML = copyClip+'rgb(' + rgb_color['r'] +',' +rgb_color['g'] +',' +rgb_color['b'] + ')';
        color_return = [rgb_color['r'],rgb_color['g'],rgb_color['b']];
        }
        RgbaSelect.style.color = '#34d4f5';
        HexSelect.style.color = 'hsl(205, 86%, 17%)';
})

HexSelect.addEventListener('click', () =>{
    dick = false;
    if (color_return[0] !== '#'){
        let hex_color = rgbToHex (color_return[0], color_return[1], color_return[2])
        color.innerHTML = copyClip+hex_color;
        color_return = hex_color;
        HexSelect.style.color  = '#34d4f5';
        RgbaSelect.style.color = 'hsl(205, 86%, 17%)';
    }
    

})

btn.addEventListener('click', () => {
    let randomColor = RandomColor();
    let HexColor = rgbToHex(randomColor[0],randomColor[1],randomColor[2]);

    if (dick){
        color_to_use = 'rgb(' + randomColor + ')';
        color_return = randomColor;
        }
    else {
        color_to_use = HexColor;
        color_return = HexColor;
    }

    document.body.style.backgroundColor = color_to_use;
    color.innerHTML = copyClip+color_to_use;
    return color_return;
})

function RandomColor(){
    var randomColor = [Math.floor(Math.random() * 255 + 1),Math.floor(Math.random() * 255 + 1),Math.floor(Math.random() * 255 + 1)];
    return randomColor;
    
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
  }
  
  function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
  }
  
  function hexToRgb(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }


  function copyToClip() {

    let textToCopy = color.innerText.slice(('Copy to clipboard').length) 
    console.log('textToCopy', textToCopy)
    /* Select the text field */

  
     /* Copy the text inside the text field */
    navigator.clipboard.writeText(textToCopy);
  


    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied" ;

  }


  function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
  }