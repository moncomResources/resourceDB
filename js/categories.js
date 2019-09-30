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

var categories = {
  category: [
    {
      id: "0",
      title: "Disabilities",
      subcategories: [
        {
          subcategory: "subcategory1",
          subid: "0"
        },
        {
          subcategory: "subcategory2",
          subid: "1"
        },
        {
          subcategory: "subcategory5",
          subid: "2"
        }
      ],
      img: "images/noun_Blind_1545498.png"
    },
    {
      id: "1",
      title: "LGBTQAI",
      subcategories: [
        {
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
      img: "images/noun_transgender_2431636.png"
    },
    {
      id: "2",
      title: "Food and Nutrition",
      subcategories: [
        {
          subcategory: "subcategory8",
          subid: "0"
        },
        {
          subcategory: "subcategory9",
          subid: "1"
        }
      ],
      img: "images/noun_Food_2676287.png"
    },
    {
      id: "3",
      title: "School",
      subcategories: [
        {
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
      img: "images/noun_School_1018553.png"
    },
    {
      id: "4",
      title: "Extracurricular",
      subcategories: [
        {
          subcategory: "subcategory14",
          subid: "0"
        },
        {
          subcategory: "subcategory15",
          subid: "1"
        }
      ],
      img: "images/noun_Sports_420849.png"
    }
  ]
};