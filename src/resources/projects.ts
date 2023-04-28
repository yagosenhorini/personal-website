type IProjects = {
  id: number;
  name: string;
  description: string;
}[];

const projects: IProjects = [
  {
    id: 1,
    name: 'Kanban Board',
    description: 'Board simples de Kanban para visualização e criação de cards',
  },
  {
    id: 2,
    name: 'Site pessoal',
    description:
      'Template padronizado para projetos Web utilizando Next.js, Styled-Components, Redux e Context API',
  },
  {
    id: 3,
    name: 'Mindpro Insights',
    description: 'App utilizado dentro do Jira para acompanhamento de sprints',
  },
];

export default projects;
