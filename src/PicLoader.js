function PicLoader() 
{
    var link = document.getElementById("link");

    if (loadPicturesFrom(link.value)) {
        displayPictures();
    }
    else {
        displayError();
    }

}

function loadPicturesFrom(url) 
{
    // TODO
}

function displayPictures() 
{
    // TODO
}

function displayError() 
{
    // TODO
}