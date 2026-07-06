export function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", {
    dateStyle: "long"
  }).format(new Date(date));
}
