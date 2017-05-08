/*jshint esnext: true */
//let buttonLoadRelated = document.getElementById("button-load-related");
let loadContainer = document.getElementById("load-container");
let loadSlideshowContainer = document.getElementById("load-slideshow-container");
if(!loadContainer){
    loadContainer = document.getElementById("load-container-small");  
}
let loadBack = document.getElementById("load-back");
let loadForward = document.getElementById("load-forward");
//let loadForward = document.getElementById("load-some");
let categories = document.querySelectorAll(".sidebar-categories");
let adress = window.location.href;
let ourRequest;
let bodyClass = document.querySelector("body");
let landingUrl = main_url.siteurl + '/wp-json/wp/v2/posts';
let currentPage = main_url.siteurl + '/wp-json/wp/v2/pages';
let relatedContainer = document.querySelector('.checkout');
let request = new XMLHttpRequest();-

    document.addEventListener('DOMContentLoaded', function() {

    if (!window.XMLHttpRequest) {

        // code for IE6, IE5
        request = new ActiveXObject("Microsoft.XMLHTTP");
        console.log("some activestuff "+request);
    }

    if(bodyClass.classList.contains('single')){

        request.open('GET', landingUrl + '?exclude=' + current_id.id + '&per_page=4');

    }else{
        request.open('GET', landingUrl);
    }
    sendRequest( request, true, false);

});

categories.forEach( cat => cat.addEventListener('click', function(e){

    let currentCategory = e.target.dataset.type;
    let currentUrl = main_url.siteurl + '/wp-json/wp/v2/posts?categories=' + currentCategory;
    let ourRequest = new XMLHttpRequest();

    if(bodyClass.classList.contains('single')){

        ourRequest.open('GET', currentUrl + '&exclude=' + current_id.id + '&per_page=4'  ); 

    }else{
        ourRequest.open('GET', currentUrl);
    }

    sendRequest(ourRequest);

}));

function createHtml(parseData){

    var output = '';
    var it = 0;

    if(document.querySelector('.load-more')){
        console.log("two "+document.querySelector('.load-more'));
        //  output += '<div class="rowdy">';


    }
    
    output += '<div class="rowdy">';
    for(var i = 0; i < parseData.length; i++){

        /* if(adress != main_url.siteurl + '/' ){} */
        if(bodyClass.classList.contains('single') && i === 3){
            //output += '<button class="load-more"></button>';

        }

        if(it === 0){

        }
        it++;

        output += '<div class="col-sm-12 col-sm-6 col-lg-3">'; 
        output += '<article class="post" id=' + parseData[i].categories[0] + '>';
        output += '<div class="boxedFeature shadow">';
        output += '<h2 style="color: #ffad26;">';
        output += '<a href=' + parseData[i].link + ' style="color:#ffad26;">' + parseData[i].title.rendered + '</a>';
        output += '</h2>';
        if(parseData[i].featured_media){
            output += '<img class="img-responsive" src=' + parseData[i].featured_media + '>';
        }else{
            output += '<img class="img-responsive" src="http://www.thisisyourkingdom.co.uk/wp-content/uploads/2012/10/SKYE-PROVISIONS-290PX.jpg">';
        }

        if(parseData[i].excerpt.rendered){
            output += '<p class="text-muted">' + parseData[i].excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "").substr(0,70) + '...' + '</p>';

        }else{
            output += '<p>' + 'Lorem ipsum...' + '</p>';
        }
        output += '<p><span style="color: #ffad26;"><a style="color: #ffad26;" /*data-toggle="modal" data-target="#myModal"*/ href=' + parseData[i].link + '>read more</a></span></p>';
        output += '</div>';
        output += '</article>';
        output += '</div>';
        if(it === 4){
            //output += "</div>"; 

            it = 0;
        }

    }
    if(bodyClass.classList.contains('single') && document.querySelector('.load-more') === null){
        //output += '<button class="load-more"></button>';




    }
    output += '</div>';

    loadContainer.innerHTML = output;
}



function createCategoryPagination(parseData,request, singleLoadCats = true){

    var i = 1;
    var placeHolder;
    var posts;
    var totalPages = request.getResponseHeader('X-WP-TotalPages');
    var output = '';
    var out = '';


    if(totalPages > i){

        output += '<button class="load-more pull-left">';
        output += 'Mer';
        output += '</button>';
    }

    loadForward.innerHTML = output;
    loadBack.innerHTML = out; 
    //loadforward.innerHTML = output;
    loadForward.style.display = 'block';

    let load = document.querySelector('.load-more');

    if(load !== null){

        load.addEventListener('click',function(){

            if( i < totalPages){

                i++;

                if(i>1){

                    if(singleLoadCats === true){
                        placeHolder = '?categories=' + parseData[0].categories[0] + '&';
                    }else{
                        placeHolder = '?';
                    }

                    output = '';
                    output += '<button class="col-sm-1 load-less pull-right">';
                    output += 'MINDRE';
                    output += '</button>';

                    loadBack.innerHTML = output; 

                    let loadLess = document.querySelector('.load-less');

                    if(loadLess !== null){

                        loadLess.addEventListener('click', function(e){

                            if(i-1 > 0){
                                loadForward.style.display = 'block';
                                i = i-1;
                            }
                            if(i === 1){
                                output = '';
                                loadBack.innerHTML = output;
                            }

                            request.open('GET', parseData[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i);
                            sendRequest(request, false, true);

                        });
                    }
                }    

                request.open('GET', parseData[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i );

                sendRequest(request, false, true);

            }
            if(i == totalPages){

                loadForward.style.display = 'none';
            }
        });
    }
}

function sendRequest( request, flag = true, singleCatsFlag= true){

    request.onload = function() {
        if (request.status >= 200 && request.status < 400) {

            let data = JSON.parse(request.responseText);

            createHtml(data);

            if(bodyClass.classList.contains('single') && flag === true){

                createCategoryPagination(data,request,singleCatsFlag);
            }

        } else {
            console.log("We connected to the server, but it returned an error.");
        }
    };

    request.onerror = function() {
        console.log("Connection error");
    };

    request.send();
}




















/* TEST */

/*


function forward(data,request, i, singleLoadCats, totalPages){

    var placeHolder;
    var output ='';

    if(singleLoadCats === true){
        placeHolder = '?categories=' + data[0].categories[0] + '&';
    }else{
        placeHolder = '?';
    }

    request.open('GET',data[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i );

    sendRequest(request, false, true);

    if(i == totalPages){
        output = '' ; 
        loadForward.innerHTML = output;
    }
}

function backward(data,request,i,singleLoadCats){
    var output ='';
    var placeHolder;
    if(i>1){

        // request.open('GET',parseData[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i - 1 );
        output = '';
        output += '<button class="load-less">';
        output += 'MINDRE';
        output += '</button>';
        loadBack.innerHTML = output; 

    }

    let loadLess = document.querySelector('.load-less');

    if(loadLess !== null || loadLess !== undefined){
        console.log(loadLess);
        loadLess.addEventListener('click', function(e){

            if(singleLoadCats === true){
                placeHolder = '?categories=' + data[0].categories[0] + '&';
            }else{
                placeHolder = '?';
            }
            i = i-1;
            console.log(data[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i);
            request.open('GET',data[0]._links.collection[0].href + placeHolder +'exclude=' + current_id.id + '&per_page=4' + '&page=' + i );
            sendRequest(request, false, true);

        });
    }
}






function createPagination(ourRequest,currentUrl){

    var totalPages = ourRequest.getResponseHeader('X-WP-TotalPages');  
    //console.log(currentCategory );
    if(totalPages > 1){

        if(relatedContainer){
            relatedContainer.classList.add("next"); 
        }

    }else{
        relatedContainer.classList.remove("next");  
    }
    let nextPosts = document.querySelector('.next');


    if(nextPosts !== undefined || nextPosts !== null ){

        nextPosts.addEventListener('click', function(e){
            var totalPages = ourRequest.getResponseHeader('X-WP-TotalPages');  
            let currPosts = document.getElementsByTagName('article');
            console.log("Request "+ourRequest);
            console.log("tolala pages "+totalPages);

            if(totalPages > 1){ 
                for(var i = 1; i <= totalPages; i++){
                    if(i != 1){
                        //http://localhost:3000/clicque/wp-json/wp/v2/posts?categories=1'exclude=25&per_page=4&page=2
                        //let currPosts = document.getElementsByTagName('article');
                        console.log("Current posts id "+currPosts[1].id);
                        console.log("Landing " + currentUrl + '&exclude=' + current_id.id + '&per_page=4' + '&page=' + i );
                        renderForward();
                        if(currPosts[1].id !== undefined || nextPosts !== null){

                            ourRequest.open('GET', currentUrl + '?categories=' + currPosts[1].id + '&exclude=' + current_id.id + '&per_page=4' + '&page=' + i );

                            //renderBack();
                            //renderBack1(ourRequest,currentUrl,currPosts,i);

                            break;
                        }
                    }

                }
                /*
                //TODO: Make func
                ourRequest.onload = function() {

                    var data = JSON.parse(ourRequest.responseText);

                    createHtml(data);
                }
                ourRequest.send();
                */

/*
                sendRequest(ourRequest);
            }else{
                console.log("total else pages "+totalPages);
            }


        });

    }

}









function renderBack1(ourRequest,currentUrl,currPosts,i){

    var back = ourRequest.open('GET', currentUrl + '?categories=' + currPosts[1].id + '&exclude=' + current_id.id + '&per_page=4' + '&page=' + i - 1 );
    let data = JSON.parse(ourRequest.responseText);

    console.log("DATA" + data);
    var output = '';
    //output += '<a href=' + data + ' class="btn btn-danger">Go Back</a>';
    //loadBack.innerHTML = output;


}

function renderBack(){

    var output = '';
    output += '<a href=history.go(-1) class="btn btn-danger">Go Back</a>';
    //loadBack.innerHTML = output;


}

function renderForward(){

}














function createSlideshow(parseData){

    var HTMLstring = '';

    for(var i = 0; i < parseData.length; i++){

        HTMLstring += '<div class="carousel-inner">';
        HTMLstring += '<div class="item active">';
        HTMLstring += '<h2 style="color: #ffad26;">';
        HTMLstring += '<a href=' + parseData[i].link + ' style="color:#ffad26;">' + parseData[i].title.rendered + '</a>';
        HTMLstring += '</h2>';
        HTMLstring += '<img class="img-responsive" src="http://www.thisisyourkingdom.co.uk/wp-content/uploads/2012/10/SKYE-PROVISIONS-290PX.jpg">';
        HTMLstring += '<p>' + parseData[i].excerpt.rendered + '</p>';
        HTMLstring += '<p><span style="color: #ffad26;"><a style="color: #ffad26;" href=' + parseData[i].link + '>read more</a></span></p>';
        HTMLstring += '</div>';
        HTMLstring += '</div>';
        loadSlideshowContainer.innerHTML = HTMLstring;
    }


}
/*
function singlePostsRelated(ourRequest){




    //return ourRequest.open('GET', landingUrl + '?exclude=' + current_id.id + '&per_page=4');
    ourRequest.open('GET', landingUrl + '?exclude=' + current_id.id + '&per_page=4');
    console.log(ourRequest.getResponseHeader('X-WP-Total'));
}
*/


/* original
if(buttonLoadRelated){
    buttonLoadRelated.addEventListener('click', function(){

        // creating an XMLHttpRequest object
        //fpr users media pages, posts etc any piece of wp data
        //we can create new posts and whatnot
        //användare kan ladda upp egna videor för ranking - för inloggade
        //We can update this data from anywhere


        let ourRequest;
        if (window.XMLHttpRequest) {
            ourRequest = new XMLHttpRequest();
        } else {
            // code for IE6, IE5
            ourRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }
        ourRequest.open('GET', 'http://localhost:8888/clicque/wp-json/wp/v2/posts' + currentCategory);
        ourRequest.onload = function() {
            if (ourRequest.status >= 200 && ourRequest.status < 400) {
                /*When receiving data from a web server, the data is always a string.

                Parse the data with JSON.parse(), and the data becomes a JavaScript object.
                */

/*
                let data = JSON.parse(ourRequest.responseText);
                console.log(data);
                createHtml(data);
            } else {
                console.log("We connected to the server, but it returned an error.");
            }
        };

        ourRequest.onerror = function() {
            console.log("Connection error");
        };

        ourRequest.send();


    });
};

*/
