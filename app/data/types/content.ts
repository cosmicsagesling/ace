export interface Course {
    id: string;
    slug: string;
    title: string;
    description: string;
    examType: 'IELTS' | 'PTE' | 'OET' | 'TOEFL';
    relatedServices?: string[]; // Slugs of related services
    relatedCourses?: string[]; // Slugs of related courses
    relatedResources?: string[]; // Slugs of related resources
  }
  
  export interface Service {
    id: string;
    slug: string;
    title: string;
    description: string;
    category: 'Guidance' | 'Foreign Languages' | 'Verbal Communication' | 'Study Abroad' | 'Other';
    relatedCourses?: string[]; // Slugs of related courses
    relatedServices?: string[]; // Slugs of related services
  }
  
  export interface Resource {
    id: string;
    slug: string;
    title: string;
    description: string;
    type: 'Blog' | 'Guide' | 'Practice Test' | 'FAQ';
    tags: string[];
    relatedCourses?: string[]; // Slugs of related courses
    relatedResources?: string[]; // Slugs of related resources
  }

  export interface BacklinkItem {
    id: string;
    title: string;
    slug: string;
    type: 'course' | 'test' | 'resource' | 'service';
    description?: string;
    tags?: string[];
    category?: string;
    examType?: string;
  }