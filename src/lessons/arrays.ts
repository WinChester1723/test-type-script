export function processSkills() {
  const skills: string[] = ["Dev", "DevOps", "Testing"];

  for (const skill of skills) {
    console.log(skill.toLowerCase());
  }

  return skills
    .filter((s: string) => s != "DevOps")
    .map((s) => s + "! ")
    .reduce((a, b) => a + b);
}
