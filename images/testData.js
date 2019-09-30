var resources = [
  {
    id: 1, //int
    organization: "Pave", //name of organization or title of project
    description:
      "Support for caregivers of children with disabilities; Autism Spectrum Disorder education and resources, parent and mental health support, support groups for families and parents. ", //brief description
    website: "https://wapave.org/", //url to website
    image: "images/logo-pave.png", //filepath to logo or representative image
    contact: [
      {
        localnumber: "(253)565-2266",
        hotline: "1-800-572-7368"
      }
    ], //array of objects for different contact types
    location: "Tacoma, WA", //general location
    hierarchy: [{ category: "disabilities", subcategory: "subcategory1" }],
    tags: ["tag1", "tag5"], //array of string tags
    isActive: true, //True/False
    dateAdded: "9/6/19",
    whoAdded: "Whitney"
  },
  {
    id: 2, //int
    organization: "Pave2", //name of organization or title of project
    description:
      "Support for caregivers of children with disabilities; Autism Spectrum Disorder education and resources, parent and mental health support, support groups for families and parents. ", //brief description
    website: "https://wapave.org/", //url to website
    image: "images/logo-pave.png", //filepath to logo or representative image
    contact: [
      {
        localnumber: "(253)565-2266",
        hotline: "1-800-572-7368"
      }
    ], //array of objects for different contact types
    location: "Tacoma, WA", //general location
    hierarchy: [{ category: "disabilities", subcategory: "subcategory2" }],
    tags: ["tag1", "tag5"], //array of string tags
    isActive: true, //True/False
    dateAdded: "9/6/19",
    whoAdded: "Whitney"
  }
];
// nested loop to find category/subcategory pairings
// build an array of objects{ category: , subcategory: , resourceid:[ ] }
for (var i = 0; i < resources.length; i++) {
  for (var j = 0; j < resources[i].hierarchy.length; j++) {
    console.log(
      resources[i].hierarchy[j].category +
        ": " +
        resources[i].hierarchy[j].subcategory
    );
  }
}
