import { BacklinkItem } from '@/app/data/types/content'; 
import { MockTest } from '@/app/data/types/mockTestData';
/**
 * Get all content items that link to a specific test
 */
export async function getBacklinksForTest(
  testSlug: string,
  allTests: Record<string, MockTest>,
  allCourses: any[],
  allResources: any[]
): Promise<BacklinkItem[]> {
  const backlinks: BacklinkItem[] = [];
  
  // Find related courses
  allCourses.forEach(course => {
    // Check if course has this test in its relatedTests array
    if (course.relatedTests?.includes(testSlug)) {
      backlinks.push({
        id: course.id,
        title: course.title,
        slug: course.slug,
        type: 'course',
        description: course.description,
        examType: course.examType
      });
    }
  });
  
  // Find related tests (other tests that might be related to this one)
  Object.entries(allTests).forEach(([slug, test]) => {
    if (slug !== testSlug && test.relatedTests?.includes(testSlug)) {
      backlinks.push({
        id: test.id || slug,
        title: test.title,
        slug: slug,
        type: 'test',
        description: test.description
      });
    }
  });
  
  // Find related resources
  allResources.forEach(resource => {
    if (resource.relatedTests?.includes(testSlug)) {
      backlinks.push({
        id: resource.id,
        title: resource.title,
        slug: resource.slug,
        type: 'resource',
        description: resource.description,
        tags: resource.tags
      });
    }
  });
  
  return backlinks;
}
