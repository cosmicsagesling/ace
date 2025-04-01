import Script from 'next/script';

interface CourseSchema {
  name: string;
  description: string;
  provider: string;
  url: string;
}

export function CourseSchemaMarkup({ course }: { course: CourseSchema }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Course',
    name: course.name,
    description: course.description,
    provider: {
      '@type': 'Organization',
      name: course.provider,
      sameAs: 'https://theacetraining.com',
    },
    url: course.url,
  };

  return (
    <Script
      id="course-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function OrganizationSchemaMarkup() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'A.C.E. - AMOS Centre of Excellence',
    url: 'https://theacetraining.com',
    logo: 'http://theacetraining.com/ace%20logo.svg',
    description: 'Premier training centre for IELTS, PTE, OET & TOEFL exam preparation with certified trainers and proven success rates.',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Dev Aurum Commercial Complex, B-207, near Deer Circle, Prahlad Nagar', // Replace with actual address
      addressLocality: ' Ahmedabad', // Replace with actual city
      addressRegion: ' Gujarat', // Replace with actual region
      postalCode: '380015', // Replace with actual postal code
      addressCountry: 'India', // Replace with actual country
    },
    telephone: '++44 20 1234 5678', // Replace with actual phone
    email: 'info@theacetraining.com', // Replace with actual email
    sameAs: [
      'https://facebook.com/acetraining', // Replace with actual social links
      'https://twitter.com/acetrainingcentre',
      'https://instagram.com/ace_training',
      'https://linkedin.com/company/ace-training',
    ],
  };

  return (
    <Script
      id="organization-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
