export function calculateAge(birthDate, today = new Date()) {
  let age = today.getFullYear() - birthDate.getFullYear();

  if (
    today.getMonth() < birthDate.getMonth() ||
    (today.getMonth() === birthDate.getMonth() &&
      today.getDate() < birthDate.getDate())
  ) {
    age -= 1;
  }

  return age;
}

export function getProfileStatus(today = new Date()) {
  const location = today.getMonth() >= 7 ? "San Francisco" : "Waterloo";

  const occupation =
    today.getMonth() >= 7
      ? "I work as a software engineer at Meta"
      : today.getMonth() >= 5
        ? "I'm currently an unemployed bum after my exams"
        : "I'm a soon-to-be graduate from the University of Waterloo, where I studied computer science and math";

  return { location, occupation };
}

export const locationSnippet = `  const location = today.getMonth() >= 7 ? "San Francisco" : "Waterloo"`;

export const occupationSnippet = `  const occupation =
    today.getMonth() >= 7
      ? "I work as a software engineer at Meta"
      : today.getMonth() >= 5
        ? "I'm currently an unemployed bum after my exams"
        : "I'm a soon-to-be graduate from the University of Waterloo, where I studied computer science and math"`;
