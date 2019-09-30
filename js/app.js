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

//function to load resourcelist template
let subcategoryLinkClick = function() {
  let categoryIndex = document.getElementById("id-value").innerHTML;
  let subID = parseInt(this.value);
  let category = categories.category[parseInt(categoryIndex)]["title"];
  let subcategory =
    categories.category[parseInt(categoryIndex)].subcategories[subID][
      "subcategory"
    ];

  let main = contentMain();
  clearMain();

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

  const source = document.getElementById("resourceListPage").innerHTML;
  const resourceListTemplate = Handlebars.compile(source);
  const compiledHtml = resourceListTemplate(resourcesArray);
  main.innerHTML = compiledHtml;
  resourceClick();
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
};

//Event listener for subcategoryLink
let subCategoryClick = function() {
  let subcategoryLink = document.querySelectorAll(".subcategory-link");
  let subcategoryLinkLength = subcategoryLink.length;
  for (var i = 0; i < subcategoryLinkLength; i++) {
    subcategoryLink[i].addEventListener("click", subcategoryLinkClick);
  }
};
//Callback function for Category button click and loads subcategory template
let buttonClick = function() {
  let categoryID = this.value;
  let main = contentMain();
  clearMain();
  let categoryIndex = categories.category.findIndex(x => x.id == categoryID);
  const source = document.getElementById("subcategoryTemp").innerHTML;
  const subcategoryTemplate = Handlebars.compile(source);
  const compiledHtml = subcategoryTemplate(categories.category[categoryIndex]);
  main.innerHTML = compiledHtml;
  subCategoryClick();
};

//Category Button event listeners
let categoryButtonListeners = function() {
  categoryButton = document.querySelectorAll(".category");
  let categoryButtonLength = categoryButton.length;
  for (var i = 0; i < categoryButtonLength; i++) {
    categoryButton[i].addEventListener("click", buttonClick);
  }
};

//Category Template Load
let categoryTempLoad = function() {
  const source = document.getElementById("categoriesTemp").innerHTML;
  const categoriesTemplate = Handlebars.compile(source);
  const compiledHtml = categoriesTemplate(categories);
  let main = contentMain();
  main.innerHTML = compiledHtml;
  categoryButtonListeners();
};

let categoryNav = document.getElementById("category-nav");
categoryNav.addEventListener("click", categoryTempLoad);

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

let tagNav = document.getElementById("tag-nav");
tagNav.addEventListener("click", TagListTempLoad);

categoryTempLoad();
