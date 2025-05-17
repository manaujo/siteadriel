export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  
  if (element) {
    const headerOffset = 80; // Adjust based on header height
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
  }
};

export const observeSections = (
  callback: (entries: IntersectionObserverEntry[]) => void
): IntersectionObserver => {
  const observer = new IntersectionObserver(callback, {
    rootMargin: '-100px 0px -100px 0px',
    threshold: 0.1
  });
  
  // Get all sections with IDs (these are the ones with navigation links)
  const sections = document.querySelectorAll('section[id]');
  
  sections.forEach(section => {
    observer.observe(section);
  });
  
  return observer;
};