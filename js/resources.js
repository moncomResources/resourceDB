var resources = {
  resource: [
    {
      id: "0", //int
      organization: "Pave", //name of organization or title of project
      description:
        "Support for caregivers of children with disabilities; Autism Spectrum Disorder education and resources, parent and mental health support, support groups for families and parents. ", //brief description
      website: "https://wapave.org/", //url to website
      image: "images/logo-pave.png", //filepath to logo or representative image
      contact: [
        {
          contactType: "local phone number",
          contactInfo: "(253)565-2266"
        },
        {
          contactType: "hotline",
          contactInfo: "1-800-572-7367"
        }
      ], //array of objects for different contact types
      location: "Tacoma, WA", //general location
      hierarchy: ["00", "01", "11"],
      tags: ["tag1", "tag5"], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/6/19",
      whoAdded: "Whitney"
    },
    {
      id: "1", //int
      organization: "The Arc of Snohomish County", //name of organization or title of project
      description:
        "Autism information and support groups, IEP parent partner program, special education assistance and resources, groups for parents raising children with disabilities and Autism, sibling support program, self-advocacy training, independent living skills.", //brief description
      website: "http://www.arcsno.org/", //url to website
      image: "images/Arc.png", //filepath to logo or representative image
      contact: [
        {
          contactType: "local phone number",
          contactInfo: "(253)565-2266"
        },
        {
          contactType: "hotline",
          contactInfo: "1-800-572-7367"
        }
      ], //array of objects for different contact types
      location: "Tacoma, WA", //general location
      hierarchy: ["01"],
      tags: ["tag1", "tag2"], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/6/19",
      whoAdded: "Whitney"
    }
  ]
};
