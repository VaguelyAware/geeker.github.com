// JavaScript Document
var tl = gsap.timeline(),
    count = 2,
    loop = 1;


function $(e)
{
	return document.querySelector(e)
}

function adVisibilityHandler()
{
	// clickthrough
	$('#bg_clickthrough').addEventListener('click', hit);
    // roll over/out
	$('#bg_clickthrough').addEventListener('mouseover', over);
	$('#bg_clickthrough').addEventListener('mouseout', out);
    
	// show ad
	$('#container').style.display = 'block';
//    gsap.set([$('#shimmer1')],  {x:-200});
    
	// animation
	beginAnimation();
}


// ANIMATION
function beginAnimation()
{
	tl
//	.from('#roundelOuterWhite', {duration:0.5, scale:0, ease:"back.out"}, "f1+=0.8")
//	.from('#roundelInnerRed',{duration:0.5, scale:0, ease:"back.out"}, "f1+=0.9")
//	.from('#roundelCopy1', {duration:0.5, scale:0, ease:"back.out"}, "f1+=1.1")
    .add('f1')

    .from('#egg2', {duration:1, x:100, rotationZ:150, ease:"back.out"}, "f1+=0.5")
    .from('#egg5', {duration:1.5, x:-300, rotationZ:-360, ease:"back.out(0.5)"}, "f1+=0.5")
    .from('#egg1', {duration:1.5, x:300, rotationZ:350, ease:"back.out(0.5)"}, "f1+=0.25")
    .from('#text1a', {duration:0.5, x:100, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=0.5")
    .from('#text1b', {duration:0.5, x:-100, autoAlpha:0,  rotationZ:0.001, ease:"power2.out"}, "f1+=1")
    .from('#starburst', {duration:1, scale:0, autoAlpha:0, ease:"back.out(0.8)"}, "f1")
    .from('#starburst', {duration:1, rotationZ:-30, ease:"none"}, "f1")

.call(() => { gsap.to("#starburst", {duration: 15,rotation: "+=45", ease: "power2.out"});}, null, "f1+=0.5")		

.add("img", "f1+=4")

// fade IN at img
.to("#image", { duration: 0.6, autoAlpha: 1, ease: "power2.out" }, "img")
.from('#tc', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "img")

// slow zoom while visible (doesn't affect main timeline duration)
.add(() => {
  gsap.fromTo("#image",
    { scale: 1.1 },
    { duration: 4.5, scale: 1, ease: "none" }
  );
}, "img")

// when to start fading OUT
.add("imgOut", "img+=3")
.to("#image", { duration: 0.6, autoAlpha: 0, ease: "power2.in" }, "imgOut")
.to('#tc', {duration:0.6, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "imgOut")

// frame 2 label starts after imgOut
.add("f2", "imgOut+=0.6")



//   .to($('#shimmer1'), 1, {x:500, rotationZ:0.001, ease:Power2.easeOut}, "f1+=2.8")


    //.addPause()
    .add('f2', 'imgOut')

    .to('#frame1', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "img-=0.25")
    .to('#egg2', {duration:1.5, x:150, y:-9, scale:1.17,rotationZ:90, ease:"back.inOut(0.7)"}, "img-=0.75")
    .to('#egg5', {duration:1.5, x:-250, scale:1.4, rotationZ:-330, ease:"back.inOut"}, "img-=0.75")
    .to('#egg1', {duration:1.5, x:-300, rotationZ:-200, ease:"back.in(0.7)"}, "img-=0.75")
    .from('#pack1', {duration:1.5, x: () => -document.getElementById('container').offsetWidth, ease:"back.out(0.7)"}, "f2")
    .from('#pack1', {duration:1,rotationZ:0.001, ease:"power2.out"}, "f2+=0.75")
    .from('#pack2', {duration:1.5, x: () => -document.getElementById('container').offsetWidth, ease:"back.out(0.7)"}, "f2+=0.25")
    .from('#pack2', {duration:1,rotationZ:0.001, ease:"power2.out"}, "f2+=1")
	.to('#egg2', {duration:1.5, x:-225, y:5,rotationZ:-410, ease:"back.inOut(0.7)"}, "f2+=0.75")
    .from('#egg3', {duration:1, x:-300, rotationZ:-150, ease:"back.out"}, "f2+=1")
    .from('#text2a', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=1.7")
    .from('#text2b', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=2")
    .from('#text2c', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=2.3")
    .from('#text2d', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=2.6")
    .fromTo('#cta', {scale:0}, {duration:0.3, scale:1.1, ease:"back.out"}, "f2+=2.8")
	.to('#cta', {duration:0.1, scale:1, ease:"back.out"}, "f2+=3.1")
	.to('#cta', {duration:0.3, width:'84px', ease:"back.out"}, "f2+=3.2")	
	.from('#label_wrap', {duration:0.5, opacity:0}, "f2+=3.2")	


	tl.eventCallback("onComplete", restartAnimation);
    console.log( "Total Animation Time is: "+ tl.duration() );
}


function restartAnimation()
{	
	if (count > loop) {
		count++;
		setTimeout(function()
		{
//            gsap.set([$('#shimmer1')],  {x:-200});
			tl.restart();
		}, 2000);
	}
}


// CLICKTHROUGH
function hit(e)
{
	switch (e.target.id)
	{		
		case 'bg_clickthrough' :
            //console.log("BG CLICK")
			window.open(clickTag, '_blank');
		break;
	}
}

function over(e)
{
	switch (e.target.id)
	{		
		case 'bg_clickthrough' :
           gsap.to('#btn_cta_redFill', {duration:0.25, y:-36, ease:"none"});
           gsap.to('#btn_cta_label', {duration:0.01, opacity:0, ease:"power1.out"}); 
           gsap.to('#btn_cta_label_hover', {duration:0.01, opacity:1, ease:"power1.out"}); 
		break;
            
	}
}

function out(e)
{
	switch (e.target.id)
	{		
		case 'bg_clickthrough' :
           gsap.to('#btn_cta_redFill', {duration:0.25, y:0, ease:"none"});
           gsap.to('#btn_cta_label', {duration:0.01, opacity:1, ease:"power1.out"}); 
           gsap.to('#btn_cta_label_hover', {duration:0.01, opacity:0, ease:"power1.out"}); 
		break;

	}
}
///////////////////////
window.onload = adVisibilityHandler;