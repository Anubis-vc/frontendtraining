export function formatDate(dateString) {
	const date = new Date(dateString);
	const now = new Date();
  
	if (date.getFullYear() === now.getFullYear() && date.getMonth() === now.getMonth()) {
	  return 'Present';
	}
  
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short' });
  }