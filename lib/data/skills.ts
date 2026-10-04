export type SkillItem = {
  name: string
  icon?: string
}

export type RowDef = {
  roman: string
  label: string
  items: SkillItem[]
  duration: number
  direction: 'left' | 'right'
}

export const ROWS: RowDef[] = [
  {
    roman: 'I',
    label: 'Languages',
    items: [
      { name: 'C', icon: 'c' },
      { name: 'C++', icon: 'cplusplus' },
      { name: 'Java', icon: 'openjdk' },
      { name: 'JavaScript', icon: 'javascript' },
      { name: 'TypeScript', icon: 'typescript' },
      { name: 'Kotlin', icon: 'kotlin' },
      { name: 'Dart', icon: 'dart' },
      { name: 'PHP', icon: 'php' },
    ],
    duration: 36,
    direction: 'left',
  },
  {
    roman: 'II',
    label: 'Frameworks',
    items: [
      { name: 'ASP.NET', icon: 'dotnet' },
      { name: 'Angular', icon: 'angular' },
      { name: 'Next.js', icon: 'nextdotjs' },
      { name: 'Laravel', icon: 'laravel' },
      { name: 'React Native', icon: 'react' },
      { name: 'Flutter', icon: 'flutter' },
      { name: 'Tauri', icon: 'tauri' },
    ],
    duration: 44,
    direction: 'right',
  },
  {
    roman: 'III',
    label: 'Tools',
    items: [
      { name: 'Android Studio', icon: 'androidstudio' },
      { name: 'Visual Studio Code', icon: 'vscodium' },
      { name: 'Eclipse', icon: 'eclipseide' },
      { name: 'Git', icon: 'git' },
      { name: 'Figma', icon: 'figma' },
      { name: 'Postman', icon: 'postman' },
      { name: 'Swagger', icon: 'swagger' },
      { name: 'DBeaver', icon: 'dbeaver' },
      { name: 'MySQL Workbench', icon: 'mysql' },
      { name: 'Notion', icon: 'notion' },
    ],
    duration: 55,
    direction: 'left',
  },
]
