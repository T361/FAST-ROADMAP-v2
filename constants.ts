import { Subject } from './types.ts';

// Helper to generate IDs
const id = () => Math.random().toString(36).substr(2, 9);

const SUBJECT_PF: Subject = {
  id: 'cs-1002',
  code: 'CS-1002',
  title: 'Programming Fundamentals',
  credits: 4,
  description: 'The "Weeder" Course. Mastery of pointers and raw logic is mandatory.',
  modules: [
    {
      id: id(),
      title: 'Foundation & Logic',
      topics: [
        {
          id: id(),
          title: 'Flowcharts & Pseudocode',
          resources: [
            { id: id(), title: 'Fakhar STEM: Problem Solving', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+Problem+Solving', duration: 'Search' },
          ]
        },
        {
          id: id(),
          title: 'Variables & Data Types',
          resources: [
            { id: id(), title: 'Fakhar STEM: C++ Basics', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+C%2B%2B+Basics', duration: 'Search' },
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Control Structures',
      topics: [
        {
          id: id(),
          title: 'Loops (Iterative Logic)',
          resources: [
            { id: id(), title: 'Fakhar STEM: Loops Explained', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+Loops', badge: 'Essential' },
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'The Barrier: Pointers',
      topics: [
        {
          id: id(),
          title: 'Pointer Basics',
          resources: [
            { id: id(), title: 'Fakhar STEM: Pointers', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+Pointers', badge: 'Critical' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_CALCULUS: Subject = {
  id: 'mt-1003',
  code: 'MT-1003',
  title: 'Calculus and Analytical Geometry',
  credits: 3,
  description: 'Limits, Derivatives, Integrals. The foundation of engineering math.',
  modules: [
    {
      id: id(),
      title: 'Limits & Continuity',
      topics: [
        {
          id: id(),
          title: 'Understanding Limits',
          resources: [
            { id: id(), title: 'The Mathematics Outlet: Limits', type: 'video', url: 'https://www.youtube.com/results?search_query=The+Mathematics+Outlet+Limits', badge: 'Best Source' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Differentiation',
      topics: [
        {
          id: id(),
          title: 'Derivatives',
          resources: [
            { id: id(), title: 'The Mathematics Outlet: Differentiation', type: 'video', url: 'https://www.youtube.com/results?search_query=The+Mathematics+Outlet+Differentiation' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_DLD: Subject = {
  id: 'ee-1005',
  code: 'EE-1005',
  title: 'Digital Logic Design',
  credits: 4,
  description: 'Hardware abstraction. K-Maps and Logic Gates are the bread and butter here.',
  modules: [
    {
      id: id(),
      title: 'Boolean Algebra',
      topics: [
        {
          id: id(),
          title: 'Logic Gates',
          resources: [
            { id: id(), title: 'Neso Academy: Logic Gates', type: 'video', url: 'https://www.youtube.com/results?search_query=Neso+Academy+Logic+Gates', badge: 'Best Source' },
            { id: id(), title: 'Shams Farooq: DLD', type: 'video', url: 'https://www.youtube.com/results?search_query=Shams+Farooq+DLD' }
          ]
        },
        {
          id: id(),
          title: 'K-Maps',
          resources: [
            { id: id(), title: 'Fakhar STEM: K-Maps', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+K-Map' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Sequential Logic',
      topics: [
        {
          id: id(),
          title: 'Flip-Flops',
          resources: [
             { id: id(), title: 'Neso Academy: Flip Flops', type: 'video', url: 'https://www.youtube.com/results?search_query=Neso+Academy+Flip+Flops' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_OOP: Subject = {
  id: 'cs-1004',
  code: 'CS-1004',
  title: 'Object Oriented Programming',
  credits: 4,
  description: 'How to organize code. C++ Classes, Inheritance, Polymorphism.',
  modules: [
    {
      id: id(),
      title: 'Classes & Objects',
      topics: [
        {
          id: id(),
          title: 'Constructors & Destructors',
          resources: [
            { id: id(), title: 'CodeBeauty: Classes & Objects', type: 'video', url: 'https://www.youtube.com/results?search_query=CodeBeauty+Classes+and+Objects', badge: 'Highly Recommended' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'The Pillars',
      topics: [
        {
          id: id(),
          title: 'Polymorphism',
          resources: [
            { id: id(), title: 'CodeBeauty: Polymorphism', type: 'video', url: 'https://www.youtube.com/results?search_query=CodeBeauty+Polymorphism', badge: 'Tricky' }
          ]
        },
        {
          id: id(),
          title: 'Inheritance',
          resources: [
            { id: id(), title: 'CodeBeauty: Inheritance', type: 'video', url: 'https://www.youtube.com/results?search_query=CodeBeauty+Inheritance' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Advanced Concepts',
      topics: [
        {
          id: id(),
          title: 'Templates',
          resources: [
            { id: id(), title: 'CodeBeauty: Templates', type: 'video', url: 'https://www.youtube.com/results?search_query=CodeBeauty+Templates' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_MVC: Subject = {
  id: 'mt-1008',
  code: 'MT-1008',
  title: 'Multi Variable Calculus',
  credits: 3,
  description: 'Calculus in 3D. Vectors, Partial Derivatives, Multiple Integrals.',
  modules: [
    {
      id: id(),
      title: 'Partial Derivatives',
      topics: [
        {
          id: id(),
          title: 'Chain Rule',
          resources: [
            { id: id(), title: 'Math with Mariyam: MVC', type: 'video', url: 'https://www.youtube.com/results?search_query=Math+with+Mariyam+Multi+Variable+Calculus', badge: 'Localized' },
            { id: id(), title: 'Bushra\'s Coaching: Calculus', type: 'video', url: 'https://www.youtube.com/results?search_query=Bushra+Coaching+Calculus' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_DS: Subject = {
  id: 'cs-2001',
  code: 'CS-2001',
  title: 'Data Structures',
  credits: 4,
  description: 'The core of your degree. Learn efficient data organization. Linked Lists, Trees, Graphs.',
  modules: [
    {
      id: id(),
      title: 'Linear Data Structures',
      topics: [
        {
          id: id(),
          title: 'Arrays & Vectors',
          resources: [
            { id: id(), title: 'Apna College: Linked List (Shradha Khapra)', type: 'video', url: 'https://www.youtube.com/watch?v=OqpV4C1rFGA&list=PLfqMhTWNBTe0b2mM6JH2i420J8y7O_6Gh', badge: 'Highly Recommended' }
          ]
        },
        {
          id: id(),
          title: 'Linked Lists',
          resources: [
            { id: id(), title: 'Abdul Bari: Linked Lists', type: 'video', url: 'https://www.youtube.com/results?search_query=Abdul+Bari+Linked+List', badge: 'Legendary' },
            { id: id(), title: 'Striver: Linked List', type: 'video', url: 'https://www.youtube.com/results?search_query=takeuforward+Linked+List', badge: 'Interview Prep' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Trees & Graphs',
      topics: [
        {
          id: id(),
          title: 'Binary Search Trees (BST)',
          resources: [
            { id: id(), title: 'Abdul Bari: AVL Trees', type: 'video', url: 'https://www.youtube.com/results?search_query=Abdul+Bari+AVL+Trees', badge: 'Must Watch' },
            { id: id(), title: 'Apna College: Trees', type: 'video', url: 'https://www.youtube.com/results?search_query=Apna+College+Trees' }
          ]
        },
        {
          id: id(),
          title: 'Graphs',
          resources: [
            { id: id(), title: 'Striver Graph Series', type: 'video', url: 'https://www.youtube.com/results?search_query=striver+graph+series', badge: 'Comprehensive' }
          ]
        }
      ]
    },
    {
      id: id(),
      title: 'Algorithms & Optimization',
      topics: [
        {
          id: id(),
          title: 'Hashing',
          resources: [
            { id: id(), title: 'Abdul Bari: Hashing', type: 'video', url: 'https://www.youtube.com/results?search_query=Abdul+Bari+Hashing', badge: 'Exam Favorite' }
          ]
        },
        {
          id: id(),
          title: 'Sorting',
          resources: [
            { id: id(), title: 'VisuAlgo Sorting', type: 'interactive', url: 'https://visualgo.net/en/sorting' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_LA: Subject = {
  id: 'mt-1004',
  code: 'MT-1004',
  title: 'Linear Algebra',
  credits: 3,
  description: 'Matrices, vectors, and spaces. Essential for ML and Graphics.',
  modules: [
    {
      id: id(),
      title: 'Matrices & Systems',
      topics: [
        {
          id: id(),
          title: 'Gaussian Elimination',
          resources: [
            { id: id(), title: 'Educational Math Channel', type: 'video', url: 'https://www.youtube.com/@theeducationalmathchannel4153' },
            { id: id(), title: '3Blue1Brown: Essence of LA', type: 'video', url: 'https://www.youtube.com/results?search_query=3Blue1Brown+Linear+Algebra', badge: 'Conceptual' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_PHYSICS: Subject = {
  id: 'ph-1001',
  code: 'PH-1001',
  title: 'Applied Physics',
  credits: 3,
  description: 'Mechanics, Electromagnetism, and Optics. Understanding the physical world.',
  modules: [
    {
      id: id(),
      title: 'Physics Fundamentals',
      topics: [
        {
          id: id(),
          title: 'Comprehensive Course',
          resources: [
            { id: id(), title: 'Fakhar STEM: Applied Physics', type: 'video', url: 'https://www.youtube.com/results?search_query=Fakhar+STEM+Sphere+Applied+Physics', badge: 'Playlist' }
          ]
        }
      ]
    }
  ]
};

const SUBJECT_SE: Subject = {
  id: 'se-1001',
  code: 'SE-1001',
  title: 'Intro to Software Engineering',
  credits: 3,
  description: 'SDLC, Agile, and Requirements Engineering.',
  modules: [
    {
      id: id(),
      title: 'Process Models',
      topics: [
        {
          id: id(),
          title: 'SDLC & Agile',
          resources: [
            { id: id(), title: 'Bilal Khalid Dar: SE', type: 'video', url: 'https://www.youtube.com/@bilalkhalid6552', badge: 'FAST Specific' }
          ]
        }
      ]
    }
  ]
};

// Exporting flat list of subjects
export const SUBJECTS: Subject[] = [
  SUBJECT_PF,
  SUBJECT_CALCULUS,
  SUBJECT_DLD,
  SUBJECT_OOP,
  SUBJECT_MVC,
  SUBJECT_DS,
  SUBJECT_LA,
  SUBJECT_PHYSICS,
  SUBJECT_SE
];