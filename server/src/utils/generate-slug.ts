export const generateSlug = (inputString: string): string => {
    const trimmedString = inputString.trim();
    const lowercaseString = trimmedString.toLowerCase();
    const slug = lowercaseString.replace(/\s+/g, '-').replace(/[^\w-]/g, '');
  
    return slug;
  };
  