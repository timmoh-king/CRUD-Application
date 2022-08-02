export const categories = [
    { id: "5b21ca3eeb7f6fbccd471818", name: "Urgent" },
    { id: "5b21ca3eeb7f6fbccd471814", name: "Delegate" },
    { id: "5b21ca3eeb7f6fbccd471820", name: "Important" },
    { id: "5b21ca3eeb7f6fbccd471825", name: "Later" },
  ];
  export function getCategories() {
    return categories.filter(c => c);
  }