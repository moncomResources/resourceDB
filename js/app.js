/*
Functions to retrieve DOM objects and perform actions */
//Function to clear main
let clearMain = function() {
  let main = contentMain();
  main.innerHTML = " ";
};

//Function to return main
let contentMain = function() {
  const main = document.getElementById("main");
  return main;
};
//Function to return to top of page
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//Function to return CategoryID
function findCategoryID(categoryName) {
  let categoryID = "";
  for (var i = 0; i < categories.category.length; i++) {
    if (categories.category[i]["title"] == categoryName) {
      categoryID = i;
    }
  }
  return categoryID;
}

function findCategoryName(categoryID) {
  let categoryName = "";
  categoryName = categories.category[categoryID]["title"];

  return categoryName;
}

//function to search resources
let resourceSearch = function() {
  let searchList = [];

  for (var i = 0; i < resourceList.length; i++) {
    if (
      resourceList[i]["organization"].toUpperCase().search(searchValue) != -1
    ) {
      searchList.push(resourceList[i]);
    }
  }
  if (searchList.length == 1) {
    let main = contentMain();
    clearMain();
    const source = document.getElementById("resourceTemplate").innerHTML;
    const resourceTemplate = Handlebars.compile(source);
    const compiledHtml = resourceTemplate(searchList[0]);
    main.innerHTML = compiledHtml;
    topFunction();
  } else {
    console.log(searchList);
  }
};

//function to load resourcelist template
let subcategoryLinkClick = function() {
  let categoryIndex = document.getElementById("id-value").innerHTML;

  let subID = parseInt(this.value);
  let category = categories.category[parseInt(categoryIndex)]["title"];
  let subcategory =
    categories.category[parseInt(categoryIndex)].subcategories[subID][
      "subcategory"
    ];

  let resourcesArray = {
    resources: [],
    category: category,
    subcategory: subcategory
  };

  for (var i = 0; i < resources.resource.length; i++) {
    for (var j = 0; j < resources.resource[i]["hierarchy"].length; j++) {
      if (resources.resource[i]["hierarchy"][j] == categoryIndex + "" + subID) {
        resourcesArray["resources"].push(resources.resource[i]);
      }
    }
  }

  resourcesArray["resources"].sort(function(a, b) {
    let NameA = a.organization.toUpperCase();
    let NameB = b.organization.toUpperCase();
    if (NameA.slice(0, 3) == "THE") {
      NameA = NameA.slice(3);
    }
    if (NameB.slice(0, 3) == "THE") {
      NameB = NameB.slice(3);
    }
    if (NameA < NameB) {
      return -1;
    }
    if (NameA > NameB) {
      return 1;
    }
  });
  clearMain();
  templateLoad("resourceListPage", resourcesArray);
  resourceClick();
  topFunction();
};

//Credits Template Load
let creditsTempLoad = function() {
  clearMain();
  let main = contentMain();
  let credits = {
    icons: [
      {
        filename: "images/noun_Blind_1545498.png"
      },
      { filename: "images/noun_Food_2676287.png" },
      { filename: "images/noun_School_1018553.png" },
      { filename: "images/noun_Sports_420849.png" },
      { filename: "images/noun_transgender_2431636.png" }
    ]
  };

  const source = document.getElementById("creditsTemplate").innerHTML;
  const creditsTemplate = Handlebars.compile(source);
  const compiledHtml = creditsTemplate(credits);
  main.innerHTML = compiledHtml;
};

//Event listener for resource link
let resourceClick = function() {
  let resourceLink = document.querySelectorAll(".resource-link");
  let linkLength = resourceLink.length;
  for (var i = 0; i < linkLength; i++) {
    resourceLink[i].addEventListener("click", resourceLinkClick);
  }
};

//Call back for resource Link
let resourceLinkClick = function() {
  let resourceID = this.id;
  let resource = resources.resource[resourceID];
  let main = contentMain();
  clearMain();
  const source = document.getElementById("resourceTemplate").innerHTML;
  const resourceTemplate = Handlebars.compile(source);
  const compiledHtml = resourceTemplate(resource);
  main.innerHTML = compiledHtml;
  topFunction();
};

//Event listener for subcategoryLink
let addSubCategoryListener = function() {
  let subcategoryLink = document.querySelectorAll(".subcategory-link");
  let subcategoryLinkLength = subcategoryLink.length;
  for (var i = 0; i < subcategoryLinkLength; i++) {
    subcategoryLink[i].addEventListener("click", subcategoryLinkClick);
  }
};
//Callback function for Category button click and loads subcategory template
let categorySelection = function() {
  let categoryID = this.value;
  clearMain();
  templateLoad("subcategoryTemp", categories.category[categoryID]);
  addSubCategoryListener();
  topFunction();
};

//Category Button event listeners
let categoryButtonListeners = function() {
  categoryButton = document.querySelectorAll(".category");
  let categoryButtonLength = categoryButton.length;
  for (var i = 0; i < categoryButtonLength; i++) {
    categoryButton[i].addEventListener("click", categorySelection);
  }
};

//Handlebar Template loader function
//Requires script ID tag and data
let templateLoad = function(scriptID, data) {
  const source = document.getElementById(scriptID).innerHTML;
  const template = Handlebars.compile(source);
  const compiledHtml = template(data);
  let main = contentMain();
  main.innerHTML = compiledHtml;
  //Figure out how to remove this event listener
  categoryButtonListeners();
  topFunction();
  searchForm.addEventListener("submit", searchButtonClick);
};

let TagListTempLoad = function() {
  clearMain();
  let main = contentMain();
  //Tag list array
  let tagList = { tag: [] };
  for (var i = 0; i < resources.resource.length; i++) {
    for (var j = 0; j < resources.resource[i]["tags"].length; j++) {
      if (tagList["tag"].indexOf(resources.resource[i]["tags"][j]) == -1) {
        tagList["tag"].push(resources.resource[i]["tags"][j]);
      }
    }
  }
  tagList["tag"].sort(function(a, b) {
    let tagA = a.toUpperCase();
    let tagB = b.toUpperCase();
    if (tagA < tagB) {
      return -1;
    }
    if (tagA > tagB) {
      return 1;
    }
  });
  const source = document.getElementById("tagListTemplate").innerHTML;
  const categoriesTemplate = Handlebars.compile(source);
  const compiledHtml = categoriesTemplate(tagList);

  main.innerHTML = compiledHtml;
};

/////////////////////////////////////////////////////////////////////////////
//                 Event Listener Functions
////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////
//                 Nav bar links
////////////////////////////////////////////////////////////////////////////

//Category Navigation Link
let categoryNav = document.getElementById("category-nav");
categoryNav.addEventListener("click", function() {
  templateLoad("categoriesTemp", categories);
});

//Tag Navigation Link
let tagNav = document.getElementById("tag-nav");
tagNav.addEventListener("click", TagListTempLoad);

//Credit Navigation Link
let creditsNav = document.getElementById("credits-nav");
creditsNav.addEventListener("click", creditsTempLoad);

//Search box DOM elements and functions

let searchButton = document.getElementById("search");
let textbox = document.getElementById("textbox");
let searchForm = document.getElementById("search-form");
//Call back function for search box
let searchButtonClick = function() {
  let searchOption = document.getElementById("search-select").options[
    document.getElementById("search-select").selectedIndex
  ].value;
  let searchValue = textbox.value.toUpperCase();
  let resourceList = resources["resource"];
  let searchList = [];
  let searchResults = {
    searchTerm: searchValue,
    searchOption: searchOption,
    resources: []
  };
  let multipleResults = { resources: [] };
  if (searchOption == "Resource") {
    for (var i = 0; i < resourceList.length; i++) {
      if (
        resourceList[i]["organization"].toUpperCase().search(searchValue) != -1
      ) {
        searchList.push(resourceList[i]);
        searchResults["resources"].push(resourceList[i]);
      }
    }
    console.log(searchResults);
    if (searchResults["resources"].length == 1) {
      let main = contentMain();
      clearMain();
      const source = document.getElementById("resourceTemplate").innerHTML;
      const resourceTemplate = Handlebars.compile(source);
      const compiledHtml = resourceTemplate(searchResults["resources"][0]);
      main.innerHTML = compiledHtml;
      topFunction();
    } else if (searchList.length > 1) {
      multipleResults.resources = searchList;
      clearMain();
      const source = document.getElementById("searchResultsTemplate").innerHTML;
      const resourceTemplate = Handlebars.compile(source);
      const compiledHtml = resourceTemplate(searchResults);
      main.innerHTML = compiledHtml;
      topFunction();
      resourceClick();
    } else {
      console.log("no");
      let results = { subcategory: "No results found", resources: [] };
      clearMain();
      const source = document.getElementById("searchResultsTemplate").innerHTML;
      const resourceTemplate = Handlebars.compile(source);
      const compiledHtml = resourceTemplate(searchResults);
      main.innerHTML = compiledHtml;
      topFunction();
    }
  }
  console.log(searchOption);
};
//searchButton.addEventListener("click", searchButtonClick);

//categoryTempLoad();
templateLoad("categoriesTemp", categories);
