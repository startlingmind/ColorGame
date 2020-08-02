
var numsquares = 6;
var colors = generateRandomColors(numsquares);
var squares = document.querySelectorAll(".square")    
var pickedcolor = colors[pickColor()];
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var messagedisplay = document.querySelector("#message");
var h1= document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easy");
var hardbtn = document.querySelector("#hard");



easybtn.addEventListener("click",function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numsquares = 3;
	colors = generateRandomColors(numsquares);
	pickedcolor = colors[pickColor()];
    colordisplay.textContent = pickedcolor;
	for(var i = 0; i<squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.background = colors[i];
		}
		else
		{
			squares[i].style.display = "none";

		}

	}
	messagedisplay.textContent=" ";
});

hardbtn.addEventListener("click",function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numsquares = 6;
	colors = generateRandomColors(numsquares);
	pickedcolor = colors[pickColor()];
    colordisplay.textContent = pickedcolor;
	for(var i = 0; i<squares.length; i++)
	{
		
			squares[i].style.background = colors[i];
	
			squares[i].style.display = "block";

		

	}
	messagedisplay.textContent=" ";


});


resetbutton.addEventListener("click", function(){
	// generate new colors , and change colors
	colors = generateRandomColors(numsquares);
	pickedcolor = colors[pickColor()];
	colordisplay.textContent = pickedcolor;
	for(var i=0; i<squares.length;i++)
	{
		squares[i].style.background = colors[i];
	}
	h1.style.background="steelblue";
	messagedisplay.textContent = " ";
	this.textContent = "New Colors";
})

for(var i=0;i<squares.length;i++)
{
	squares[i].style.background = colors[i];

	squares[i].addEventListener("click",function(){
		var clickedcolor=this.style.background;
		if(clickedcolor === pickedcolor)
			{
				messagedisplay.textContent="Correct";
				changeColor(clickedcolor);
				h1.style.background = clickedcolor;
				resetbutton.textContent = "Play Again ";
			}
			else
			{
				this.style.background = "#232323";
				messagedisplay.textContent = "Try Again";

			}
		
	});
}    

function changeColor(color)
{
	for(var i=0; i<squares.length ; i++)
	{
       squares[i].style.background = color;
	}
}
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return random;
}
function generateRandomColors(num)
{
	var arr=[]
	for(var i=0;i<num;i++)
	{
      arr.push(randomColor());
	}
   return arr;
}

function randomColor(){
// pick RGB from 0 - 255
	var r=Math.floor(Math.random() * 256);

	var g=Math.floor(Math.random() * 256);

	var b=Math.floor(Math.random() * 256);
     
	return "rgb(" + r + ", " + g + ", " + b + ")";


}