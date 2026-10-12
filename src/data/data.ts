import listapresenca from '../assets/projetos/listapresenca.png'
import notes from '../assets/projetos/notes.png'
import encurtaLink from '../assets/projetos/encuratlink.png'
import todolist from '../assets/projetos/todolist.png'
import qrcode from '../assets/projetos/qrcode.png'
import gallery from '../assets/projetos/gallery.png'
import socialLogin from '../assets/projetos/socialLogin.png'

export type Project = {
  id: number
  name: string
  description: string
  image: string
  github?: string
  live: string
}

export const projects: Project[] = [
  {
    id: 1,
    name: 'Lista de Presença',
    description: 'Controle de presença online, com cadastro e consulta pelo navegador.',
    image: listapresenca,
    github: 'https://github.com/frantecbh/lista-preseca-web',
    live: 'https://listapresenca.frantecit.com.br/',
  },
  {
    id: 2,
    name: 'Notes',
    description: 'Bloco de notas na web para registrar e organizar ideias rápidas.',
    image: notes,
    github: 'https://github.com/frantecbh/mylink',
    live: 'https://notes.frantecit.com.br/',
  },
  {
    id: 3,
    name: 'Encurta Links',
    description: 'Encurtador de URLs para compartilhar links longos de forma limpa.',
    image: encurtaLink,
    live: 'https://mylink.frantecit.com.br/',
  },
  {
    id: 4,
    name: 'Todo List',
    description: 'Lista de tarefas feita no desafio Ignite da Rocketseat.',
    image: todolist,
    github: 'https://github.com/frantecbh/desafio-ignite-todo-list',
    live: 'https://desafiotodolist.frantecit.com.br/',
  },
  {
    id: 5,
    name: 'QR Code',
    description: 'Gerador de QR Code a partir de qualquer link ou texto.',
    image: qrcode,
    github: 'https://github.com/frantecbh/qrcode-generator',
    live: 'https://qrcode.frantecit.com.br/',
  },
  {
    id: 6,
    name: 'Gallery',
    description: 'Galeria de imagens responsiva.',
    image: gallery,
    github: 'https://github.com/frantecbh/gallery',
    live: 'https://gallery.frantecit.com.br/',
  },
  {
    id: 7,
    name: 'Social Profiles',
    description: 'Página de perfil com links para redes sociais.',
    image: socialLogin,
    github: 'https://github.com/frantecbh/social-link-profile',
    live: 'https://frantecbh.github.io/social-link-profile/',
  },
]

/** Host name shown in the UI, e.g. "notes.frantecit.com.br" */
export const hostOf = (url: string) => new URL(url).host

export const links = {
  linkedin: 'https://www.linkedin.com/in/francisco-menezes-875a0a36/',
  github: 'https://github.com/frantecbh',
}
