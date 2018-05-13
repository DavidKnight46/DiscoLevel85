//
var galleryArrayAnthem = ["https://i.ytimg.com/vi/wi0Uq7QmKm4/maxresdefault.jpg",
						  "https://ksassets.timeincuk.net/wp/uploads/sites/54/2017/08/Anthem.jpg",
                    	  "http://i.imgur.com/yJm29S9.jpg"
                    	 ];

//
var galleryArrayMassEffect=["https://i.ytimg.com/vi/PnbDrjpEZEQ/maxresdefault.jpg",
							"https://animetree.files.wordpress.com/2012/05/mass-effect-2-the-team.jpg",
							"https://data2.origin.com/content/dam/originx/web/app/games/mass-effect/mass-effect-3/mass-effect-3-standard-edition_pdp_3840x2160_en_WW.jpg",
							"https://cdn.mos.cms.futurecdn.net/3UCqmEsqu9BM2SL93BkueW.jpg",
							"https://img00.deviantart.net/c276/i/2014/179/8/e/mass_effect_tali_wallpaper_by_zecardo-d6u2wlz.jpg",
							"https://img00.deviantart.net/504c/i/2013/029/3/0/femshep_liara_wip_2_by_fishbone76-d5t6flf.png",
							"https://pre00.deviantart.net/4b43/th/pre/f/2011/103/f/6/mass_effect_3___kasumi_goto_by_patryk_garrett-d3dwo5y.jpg",
							"https://i.ytimg.com/vi/cbPP1daLkLA/maxresdefault.jpg",
							"https://img00.deviantart.net/59a5/i/2013/020/f/4/mass_effect_wallpaper___urdnot_wrex_by_razor_rebus-d5s3utt.jpg"];

index = 1;
var imgSrc = document.querySelector("#gallery");
var useArray;
var forward = true;

//Move through Anthem gallery
function setHeaderInfo(array){

	//Mass Effect
	if(array == 2){
		if(index === 1){
			setHeader("Mass Effect 2",'gameTitleME');
			setHeader("Release: 2010",'gameReleaseME');
			setHeader("Platform: PS3/XBox360",'gamePlatformME');
		}else if(index === 2){
			setHeader("Mass Effect 3",'gameTitleME');
			setHeader("Release: 2012",'gameReleaseME');
			setHeader("Platform: PS3/XBox360",'gamePlatformME');
		}
		else if(index === 3){
			setHeader("Mass Effect:Androdema",'gameTitleME');
			setHeader("Release: 2017",'gameReleaseME');
			setHeader("Platform: PS4/XBox1",'gamePlatformME');
		}
	}	
	else
	{
		imgSrc.setAttribute("src",useArray[0]);	
		index = 0;

		setHeader("Mass Effect 1",'gameTitleME');
		setHeader("Release: 2010",'gameReleaseME');
		setHeader("Platform: PS3/XBox360",'gamePlatformME');		
	}

	index++;
	
};

//Set image
function moveImageGallery(array, direction){

	//
	if(array == 1){
		useArray = galleryArrayAnthem;
	}
	else if(array == 2){
		useArray = galleryArrayMassEffect;
	}

	//
	if(index <= useArray.length-1)
	{
		imgSrc.setAttribute("src",useArray[index]);
	}
	else
	{
		imgSrc.setAttribute("src",useArray[0]);	
		index = 0;
	
	}

	index++;

};

//
function moveImageGalleryBackward(array){
	//
	if(array == 1){
		useArray = galleryArrayAnthem;
	}
	else if(array == 2){
		useArray = galleryArrayMassEffect;
	}

	if(index <= useArray.length-1)
	{
		imgSrc.setAttribute("src",useArray[index]);
	}
	else
	{
		imgSrc.setAttribute("src",useArray[0]);	
		index = 0;
	
	}

	index--;


};


//
function setHeader(title, id){

	var value = document.getElementById(id);
		value.textContent;
		value.textContent = title;

};

