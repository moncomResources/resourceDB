/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    File contains information about the resources.  To add a new resource use the following template
/*
  {
      id: "", //int
      organization: "", //name of organization or title of project
      description:
        "", //brief description
      website: "", //url to website
      image: "", //filepath to logo or representative image
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
      location: "", //general location
      hierarchy: [],
      tags: [
       
      ], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    }






*/

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
      tags: [
        "IEP",
        "504 plan",
        "disability",
        "educational advocacy",
        "learning disability",
        "special education"
      ], //array of string tags
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
          contactInfo: "425.258.2459"
        }
      ], //array of objects for different contact types
      location: "2500 Hewitt Ave Suite 300 Everett 98201", //general location
      hierarchy: ["01"],
      tags: [
        "Disability",
        "disability rights",
        "parent support",
        "IEP",
        "youth programs",
        "special education",
        "504 plan"
      ], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/6/19",
      whoAdded: "Whitney"
    },
    {
      id: "2", //int
      organization:
        "Disabilities, Opportunities, Internetworking, & Technology Center (DO-IT)", //name of organization or title of project
      description:
        "Dedicated to empowering people with disabilities through technology and education. Promotes awareness and accessibility—in both the classroom and the workplace—to maximize the potential of individuals with disabilities and make our communities more vibrant, diverse, and inclusive. Promotes application of Universal Design to physical space, IT, instruction and services; provide resources for students with disabilities, K-12 educators, parents, mentors, faculty, and administrators; freely distribute online content and work to increase the success of people with disabilities in challenging academic programs and careers.", //brief description
      website: "https://www.washington.edu/doit/", //url to website
      image: "images/doit.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "888.972.3648"
        },
        {
          contactType: "email",
          contactInfo: "doit@uw.edu "
        }
      ], //array of objects for different contact types
      location: "Seattle, WA", //general location
      hierarchy: ["01"],
      tags: [
        "Disability",
        "disability rights",
        "parent support",
        "IEP",
        "youth programs",
        "special education",
        "504 plan"
      ], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/6/19",
      whoAdded: "Whitney"
    },
    {
      id: "3", //int
      organization: "WA Autism Alliance & Advocacy", //name of organization or title of project
      description:
        "WAAA provides a range of advocacy services to help adults, youth, and children with Autism Spectrum Disorder (ASD) and other developmental disabilities throughout the State of Washington gain access to health and educational services and supports that they need. These services include: family resource and insurance navigation and legal advocacy on issues related to access to healthcare and education. Offer sliding scale legal fees and help with education planning.", //brief description
      website:
        "https://www.washingtonautismadvocacy.org/updates/advocacy-resource-coordinators/", //url to website
      image: "images/waaa.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "local phone number",
          contactInfo: "425.894.7231 "
        }
      ], //array of objects for different contact types
      location: "Redmond, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "4", //int
      organization: "Disability Rights Washington", //name of organization or title of project
      description:
        "Special education resources categorized in four sections: general special education resources, dispute resolution information, lawyer referrals, specialized education resources.", //brief description
      website:
        "https://www.disabilityrightswa.org/publications/special-education-resources/", //url to website
      image: "images/disabilityrights.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "800.562.2702"
        },
        {
          contactType: "email",
          contactInfo: "info@dr-wa.org"
        }
      ], //array of objects for different contact types
      location: "Seattle, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "5", //int
      organization: "Social Security Administration: Disability Starter Kit", //name of organization or title of project
      description:
        "Information about and application for SSI disability benefits for children.  Printable booklet and checklists available.", //brief description
      website:
        "https://www.ssa.gov/disability/disability_starter_kits_child_eng.htm", //url to website
      image: "images/socialsecurity.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "1-800-772-1213"
        }
      ], //array of objects for different contact types
      location: "", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "6", //int
      organization: "WA DSHS Developmental Disabilities Administration", //name of organization or title of project
      description:
        "Eligibility information for special services, family and individual supports, service provider information, respite services, employment and independence skills help.", //brief description
      website: "https://www.dshs.wa.gov/dda", //url to website
      image: "images/wsdsh.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "425.740.6400"
        },
        {
          contactType: "email",
          contactInfo: "DD3FSO@dshs.wa.gov"
        }
      ], //array of objects for different contact types
      location: "Everett, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "7", //int
      organization: "Informing Families", //name of organization or title of project
      description:
        "Informing Families is a resource provided by the Washington State Developmental Disabilities Council, in collaboration with the Developmental Disabilities Administration and other partners throughout the state. We offer trusted news and information to individuals and families that empowers them to be active participants in planning and building a network of support and opportunities. Specific services include: Developmentally-appropriate intervention and skills information for children with disabilities from birth-adulthood; caregiver support; disability advocacy; information on applying for DDA services and a resource folder; help with assistive technology; guardianship and future/financial planning.", //brief description
      website: "https://informingfamilies.org/", //url to website
      image: "images/informingfamilies.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "1-800-number",
          contactInfo: "800-634-4473"
        },
        {
          contactType: "local phone number",
          contactInfo: "360-586-3560"
        }
      ], //array of objects for different contact types
      location: "WA state", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "8", //int
      organization: "WA State Developmental Disabilities Council", //name of organization or title of project
      description:
        "Provides public policy recommendations, works to address service gaps, provides disability advocacy, schedules council meetings, advises Governor.", //brief description
      website: "https://ddc.wa.gov/", //url to website
      image: "images/waddc.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "888.754.8798 ext 1"
        }
      ], //array of objects for different contact types
      location: "Olympia, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "9", //int
      organization: "Special Olympics WA", //name of organization or title of project
      description:
        "Register athletes, develop leadership skills, compete in different sports, community connections and support.", //brief description
      website: "http://specialolympicswashington.org/", //url to website
      image: "images/specialolympicswa.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "206.362.4949"
        }
      ], //array of objects for different contact types
      location: "Seattle, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "10", //int
      organization:
        "National Consortium on Leadership & Disability for Youth (NCLD/Y)", //name of organization or title of project
      description:
        "National youth-led information, training, and resource center; youth leadership development; independent living skill development and support; training development, disability policy analysis. ", //brief description
      website: "http://ncld-youth.info/index.php?id=19", //url to website
      image: "images/ncldyouth.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "202-822-8405 ext 127"
        },
        {
          contactType: "email",
          contactInfo: "lavanta@iel.org"
        }
      ], //array of objects for different contact types
      location: "WA DC", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "11", //int
      organization: "Rooted in Rights", //name of organization or title of project
      description:
        "Project of Disability Rights WA: creates and promotes authenic accessible stories to challenge stigma and redefine narratives around disability, mental health, chronic illness; develop and share stories made by those with disabilities. ", //brief description
      website: "https://rootedinrights.org/", //url to website
      image: "images/rooted.PNG", //filepath to logo or representative image
      contact: [], //array of objects for different contact types
      location: "", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    },
    {
      id: "12", //int
      organization: "Seattle Children's Hospital Autism Center", //name of organization or title of project
      description:
        "Assessment, diagnosis, treatment, support for ASD; parent education and support; medication management, pediatric feeding program, speech & language assessment, genetic consultation clinic; referral information and insurance information.", //brief description
      website: "https://www.seattlechildrens.org/clinics/autism-center/", //url to website
      image: "images/seattlechildrens.PNG", //filepath to logo or representative image
      contact: [
        {
          contactType: "phone number",
          contactInfo: "206.987.8080"
        }
      ], //array of objects for different contact types
      location: "Seattle, WA", //general location
      hierarchy: ["00"],
      tags: [], //array of string tags
      isActive: true, //True/False
      dateAdded: "9/30/2019",
      whoAdded: "Whitney"
    }
  ]
};
