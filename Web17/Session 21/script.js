window.addEventListener('load', () => {

    // Selection element by Class name
    var wrapper = document.getElementsByClassName('wrapper');
    console.log(wrapper);
    var bannerTitle = document.getElementsByClassName('banner-title');
    console.log(bannerTitle);

    // Selection element by Tag name
    var div = document.getElementsByTagName('div');
    console.log(div);
    console.log(div[1]);

    // Selection element by ID
    var leadBanner = document.getElementById('lead-banner');
    console.log(leadBanner);

    var a = document.getElementsByTagName('a');
    console.log(a);

    // Selection element by query selectors (CSS selectors)

    var myA = document.querySelector('#lead-banner .banner-overlay .wrapper a');
    console.log(myA);

    var map = document.querySelector('[alt="map"]');
    console.log(map);

    var myDiv = document.querySelector('div');
    console.log(myDiv);

    var myDivs = document.querySelectorAll('div');
    console.log(myDivs);


    var about = document.querySelector('nav ul li:nth-child(2) a');
    console.log(about);

})