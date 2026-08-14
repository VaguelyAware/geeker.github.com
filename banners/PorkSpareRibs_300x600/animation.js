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
// 	$('#bg_clickthrough').addEventListener('click', hit);
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
    .add('f1')
	tl.add(() => {gsap.fromTo('#image1',{ scale: 1 },{ duration: 10, scale: 0.9, ease: "none" });}, "f1")
	tl.add(() => {gsap.fromTo('#image2',{ scale: 1 },{ duration: 10, scale: 0.9, ease: "none" });}, "f1")
    .from('#tc1', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1")

    .from('#rect1a', {duration:0.5, width:0, ease:"power2.out"}, "f1+=0.5")
    .from('#text1a', {duration:0.5, y:20, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=0.75")
    .from('#rect1b', {duration:0.5, width:0, ease:"power2.out"}, "f1+=1")
    .from('#text1b', {duration:0.5, y:20, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=1.25")

    .from('#image2', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=3")
    .from('#rect2a', {duration:0.5, width:0, ease:"power2.out"}, "f1+=3.5")
    .from('#text2a', {duration:0.5, y:20, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=3.75")
    .from('#rect2b', {duration:0.5, width:0, ease:"power2.out"}, "f1+=4")
    .from('#text2b', {duration:0.5, y:20, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f1+=4.25")

    //.addPause()
    .add('f2', '+=2')
    .to('#frame1', {duration:0.5, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2-=0.25")
	.from('#roundelOuterWhite', {duration:0.5, scale:0, ease:"back.out"}, "f2+=0.3")
	.from('#roundelInnerRed',{duration:0.5, scale:0, ease:"back.out"}, "f2+=0.4")
	.from('#roundelCopy1', {duration:0.5, scale:0, ease:"back.out"}, "f2+=0.6")
	.from('#strip', {duration:0.5, scale:0, ease:"back.out"}, "f2+=0.8")
    .from('#dinkus1', {duration:1, scale:0, autoAlpha:0, ease:"back.out(3)"}, "f2+=1")
    .from('#dinkus2', {duration:1, scale:0, autoAlpha:0, ease:"back.out(3)"}, "f2+=1.25")
    .from('#packshot', {duration:1.5, x:-300, rotationZ:0.001, ease:"back.out(0.7)"}, "f2-=0.25")
    .from('#text3a', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=1.2")
    .from('#text3b', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=1.5")
    .from('#text3c', {duration:0.5, y:10, autoAlpha:0, rotationZ:0.001, ease:"power2.out"}, "f2+=1.8")

    //CTA
    .fromTo('#cta', {scale:0}, {duration:0.3, scale:1.1, ease:"back.out"}, "f2+=2.3")
	.to('#cta', {duration:0.1, scale:1, ease:"back.out"}, "f2+=2.6")
	.to('#cta', {duration:0.3, width:'98px', ease:"back.out"}, "f2+=2.7")	
	.from('#label_wrap', {duration:0.5, opacity:0}, "f2+=2.7")	


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
// function hit(e)
// {
// 	switch (e.target.id)
// 	{		
// 		case 'bg_clickthrough' :
//             //console.log("BG CLICK")
// 			window.open(clickTag, '_blank');
// 		break;
// 	}
// }

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