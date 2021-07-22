function showImage(){
	var image = document.getElementById("image")

	image.setAttribute("src","https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg")

	image.style.borderRadius = "30px"
}

	var colors = ["red","green","white","black","blue","yellow","gold"]
	var box = document.getElementById("box")

function changeColor(i){
	setTimeout( function(){
			box.style.backgroundColor = colors[i]
		} , i *500)
}

function changeColorLoop(){
	for(var i=0;i<colors.length; i++){
		changeColor(i)
	}
}

//API HTTP REQUESTS

async function fetchCat(){
	var response = await fetch("https://thatcopy.pw/catapi/rest/")
	var data = await response.json()

	var catpic = document.getElementById("catpic")
	catpic.setAttribute("src", data.url)
}