/////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    File contains the category hierarchy used to organize resources.  Categories is an object with an
//    array of categories.  Each category has an id equal to the array index as a string, title and
//    subcategories, an array of objects.
//
//    To add a new category use the following format:
//    {
//      id: "X",
//      title: "title",
//      subcategories: [],
//      img: "path to image"
//     }   where X is the next index number and title is the category title.
//
//    To add a new subcategory use the following format:
//    {
//      subcategory: "Y",
//      subid: "X"
//    } where Y is the subcategory title and subid is the next index as a string.
////////////////////////////////////////////////////////////////////////////////////////////////////////////

var categories = [{
    id: "0",
    title: "DisAbilities",
    subcategories: [{
        subcategory: "Autism Spectrum",
        subid: "0"
      },
      {
        subcategory: "Special Education",
        subid: "1"
      },
      {
        subcategory: "Physical DisAbilities",
        subid: "2"
      }
    ],
    img: "images/disabilities.png",
    description: "This category covers a broad scope of services, supports, and referrals for our clients who experience a disAbility.  Here you can find resources related to learning challenges and special education, parent and family support, specialized summer camps and activities, legal and social advocacy, physical disAbilities, testing referrals, and much more."
  },
  {
    id: "1",
    title: "LGBTQIA",
    subcategories: [{
        subcategory: "subcategory3",
        subid: "0"
      },
      {
        subcategory: "subcategory4",
        subid: "1"
      },
      {
        subcategory: "subcategory6",
        subid: "2"
      },
      {
        subcategory: "subcategory7",
        subid: "3"
      }
    ],
    img: "images/transgender.png",
    description: "This category covers a wide breadth of informational, supportive, legal, and social resources for clients who identify with LGBTQIA and their families."
  },
  {
    id: "2",
    title: "Food and Nutrition",
    subcategories: [{
        subcategory: "subcategory8",
        subid: "0"
      },
      {
        subcategory: "subcategory9",
        subid: "1"
      }
    ],
    img: "images/food.png",
    description: "  This category is all about helping clients meet basic food security needs as well as promoting an adaptive relationship with eating.  This includes referrals for clients who would benefit from Eating Disorder treatment, nutrition-focused interventions, and food banks/summer meals around the county."
  },
  {
    id: "3",
    title: "School",
    subcategories: [{
        subcategory: "subcategory10",
        subid: "0"
      },
      {
        subcategory: "subcategory11",
        subid: "1"
      },
      {
        subcategory: "subcategory12",
        subid: "2"
      },
      {
        subcategory: "subcategory13",
        subid: "3"
      }
    ],
    img: "images/school.png",
    description: "This category includes information about: local school contacts; special education testing, programming, and IEP/504 plans; educational advocacy; higher education preparation and funding; early education and pre-school; and independent learning opportunities."
  },
  {
    id: "4",
    title: "Extracurricular",
    subcategories: [{
        subcategory: "subcategory14",
        subid: "0"
      },
      {
        subcategory: "subcategory15",
        subid: "1"
      }
    ],
    img: "images/sports.png",
    description: "Thanks to the elimination of flex funds, we no longer have a way to help clients directly fund extracurricular activities, which can be a vital part of a client’s stability, learning, and well-being.  Located here include information for: summer camps, local gyms, athletic programs, libraries, clubs, and other enrichment programs."
  }
];