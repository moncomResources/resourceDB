var searchBtn = document.getElementById('searchbtn');

var tagList = [];
for (var i = 0; i < resources.length; i++) {

    for (var j = 0; j < resources[i].tags.length; j++) {
        if (tagList.indexOf(resources[i].tags[j].toLowerCase()) == -1) {
            tagList.push(resources[i].tags[j].toLowerCase())

        }
    }
}
tagList.sort(compareTag)


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function searchBtnClick() {
    searchBtn.classList.remove('static');
    searchBtn.classList.add('click');
}

function compareTag(a, b) {
    const subcatA = a.toUpperCase();
    const subcatB = b.toUpperCase();
    let comparison = 0;
    if (subcatA > subcatB) {
        comparison = 1
    } else if (subcatA < subcatB) {
        comparison = -1
    }
    return comparison;
}

function compareSubcat(a, b) {
    const subcatA = a.subcategory.toUpperCase();
    const subcatB = b.subcategory.toUpperCase();
    let comparison = 0;
    if (subcatA > subcatB) {
        comparison = 1
    } else if (subcatA < subcatB) {
        comparison = -1
    }
    return comparison;
}

function compareOrg(a, b) {
    const subcatA = a.organization.toUpperCase();
    const subcatB = b.organization.toUpperCase();
    let comparison = 0;
    if (subcatA > subcatB) {
        comparison = 1
    } else if (subcatA < subcatB) {
        comparison = -1
    }
    return comparison;
}



var introduction = "<div><h3><h1 class='text-center'>Monroe Community Resource Database</h1><h3 class='intro'>What is the database?</h3><p>Welcome to the Monroe Community Resources Database!  This is a collection of local and nearby resources tailored to meet the needs of the clients we serve.  The database is dynamic so as resources change over time, the database can be updated to reflect current information.  As you learn about new services in the community, they can be vetted and added, too!</p><p>The intention behind creating this database is to help our team more efficiently find relevant community services and referrals for our clients and then effectively connect clients with the resource.  No more googling and finding awesome resources located in the other Washington or scouring your file cabinet for brochures and business cards: now you can quickly search the database even with a client in session or over the phone and share the information right away.</p><p>Click for <a href='#how'>guide</a> on how to use the database.</p>"

var test = '<div><h2 class="resource-cat">Resource Categories:</h2>';
for (var i = 0; i < categories.length; i++) {
    test += '<div onclick="loadSubcat(this.id)" id="' + categories[i].id + '"class="category inline-top"><img src="' + categories[i].img + '"><h2>' + categories[i].title + '</h2></div>'
}


function loadCategoryPage() {

    var main = document.getElementById('main')
    main.innerHTML = introduction +
        test + "</div><div><h3 class='intro' id='how'>How to use it</h3><div><p>There are a variety of ways to navigate the database.  Each resource is categorized and tagged: you can browse categories and subcategories or search via organization title and/or tag.  Take a few moments to peruse the categories and familiarize yourself with what is readily available to you.</p><p>One helpful feature is as you browse or search for a resource, the database will suggest other similar resources that may also be of interest.  This will help you quickly provide a variety of service options to clients and increase a sense of hope and support.</p></div></div>"
    topFunction();
}


/* <div><p>There are a variety of ways to navigate the database.  Each resource is categorized and tagged: you can browse categories and subcategories or search via organization title and/or tag.  Take a few moments to peruse the categories and familiarize yourself with what is readily available to you.</p><p>One helpful feature is as you browse or search for a resource, the database will suggest other similar resources that may also be of interest.  This will help you quickly provide a variety of service options to clients and increase a sense of hope and support.</p></div> */

function g(resource) {
    var selectedResource = ''
    for (var i = 0; i < resources.length; i++) {
        if (resources[i].organization == resource) {
            selectedResource = resources[i]
        }
    }
    console.log(selectedResource)
    var content = "<div><img class='inline-top' src='" + selectedResource.image + "'><div class='inline-top org-info'><h1 class='org-title text-center'>" + selectedResource.organization + "</h1><p>" + selectedResource.description + "</p><p><span class='bold'>Website:</span> <a href='" + selectedResource.website + "' target='_blank'>" + selectedResource.website + "</a></p><p><span class='bold'>Location:</span> " + selectedResource.location + "</p><table><thead><tr><th>Contact Type</th><th>Contact Information</th></tr></thead><tbody>"
    for (var i = 0; i < selectedResource.contact.length; i++) {
        content += "<tr><td>" + selectedResource.contact[i].contactType + "</td><td>" + selectedResource.contact[i].contactInfo + "</td></tr>"
    }

    content += "</tbody></table><p><span class='bold'>tags:</span>"

    if (selectedResource["tags"].length != 0) {
        for (var i = 0; i < selectedResource["tags"].length - 1; i++) {
            content += "<a href='#' onclick='tagSearchList(this.id)' class='tag-link' id='" + selectedResource["tags"][i].toLowerCase() + "'>" + selectedResource["tags"][i] + "</a>,"
        }
        content += "<a href='#' class='tag-link' onclick='tagSearchList(this.id)' id='" + selectedResource["tags"][i] + "'>" + selectedResource["tags"][selectedResource["tags"].length - 1] + "</a>"
    } else {
        content += "  no tags provided"
    }
    content += "</p></div>"
    var main = document.getElementById('main');
    main.innerHTML = content;
}

function resourceSearchResults(cat, subcat) {
    var category = categories[cat].title
    var selected = cat + subcat;
    var resourceDisplay = [];

    for (var i = 0; i < resources.length; i++) {
        for (var j = 0; j < resources[i].hierarchy.length; j++) {
            if (resources[i].hierarchy[j] == selected) {
                resourceDisplay.push(resources[i])
            }
        }
    }
    resourceDisplay.sort(compareOrg)
    var content = "<h2><a href='#' class='cat-link' id='" + cat + "' onclick=loadSubcat('" + cat + "')>" + category + "</a> --> " + categories[cat]["subcategories"][subcat].subcategory + "</h2><div class='resource-list'>";
    for (var i = 0; i < resourceDisplay.length; i++) {
        content += "<p><a href='#' id='" + resourceDisplay[i].organization + "' onclick='g(this.id)'>" + resourceDisplay[i].organization + "</a></p>"
    }
    content += "</div>"
    var main = document.getElementById('main');
    main.innerHTML = content;
}

function loadSubcat(id) {
    var catId = id;
    var subcategories = categories[id].subcategories;
    subcategories.sort(compareSubcat)

    var content = "<img class='inline-middle large-image' src='" + categories[id].img + "'><h1 class='text-center inline-middle'>" + categories[id].title + "</h1><p class='category-desc'>" + categories[id].description + "</p><ul class='content-list'>";
    for (var i = 0; i < subcategories.length; i++) {
        content += "<li><a href='#' onclick='resourceSearchResults(" + catId + ", this.id)' class='subcat-link' id='" + subcategories[i].subid + "'>" + subcategories[i].subcategory + "</a></li> "
    }
    content += "</ul>"
    var main = document.getElementById('main')
    main.innerHTML = content;

    topFunction();
}


function tagSearchList(tag) {
    var resourceList = [];
    for (var i = 0; i < resources.length; i++) {
        for (var j = 0; j < resources[i].tags.length; j++) {
            if (resources[i].tags[j].toLowerCase() == tag) {
                resourceList.push(resources[i])
            }
        }

    }
    resourceList.sort(compareOrg)
    var content = "<h2>" + tag + "</h2><div class='resource-list'>";
    for (var i = 0; i < resourceList.length; i++) {
        content += "<p><a href='#' id='" + resourceList[i].organization + "' onclick='g(this.id)'>" + resourceList[i].organization + "</a></p>"
    }
    content += "</div>"
    var main = document.getElementById('main');
    main.innerHTML = content;
}


function loadTags() {
    var main = document.getElementById('main');
    var content = "<h2 class='cat-link'>Tags</h2><div class='resource-list'>";
    for (var i = 0; i < tagList.length; i++) {
        content += "<a href='#' onclick='tagSearchList(this.id)' id='" + tagList[i].toLowerCase() + "'>" + tagList[i] + "</a></p>"
    }
    content += ",</div>";
    main.innerHTML = content;
}


function loadIndex() {
    var content = "<h2 class='cat-link'>Resource Index</h2><div class='resource-list'>";
    console.log('test')
    var main = document.getElementById('main');
    for (var i = 0; i < resources.length; i++) {
        content += "<p><a href='#' onclick='g(this.id)' id='" + resources[i].organization + "'>" + resources[i].organization + "</a></p>"

    }
    content += "</div>"
    main.innerHTML = content;

}




function main() {
    loadCategoryPage();

}

main()