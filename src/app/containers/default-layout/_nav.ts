import { INavData } from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    iconComponent: { name: 'cil-speedometer' }
  },
  {
    name: 'Menu',
    title: true
  },
  {
    name: 'Menu 1',
    url: '/base',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Opcion 1',
        url: '/base/cards'
      },
      {
        name: 'Opcion 2',
        url: '/base/carousel'
      },
      {
        name: 'Tabs',
        url: '/base/tabs'
      }
    ]
  },
  {
    name: 'Menu 2',
    url: '/buttons',
    iconComponent: { name: 'cil-cursor' },
    children: [
      {
        name: 'Opcion 1',
        url: '/buttons/buttons'
      },
      {
        name: 'Opcion 2',
        url: '/buttons/button-groups'
      }
    ]
  },
  {
    name: 'Menu 3',
    url: '/forms',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Opcion 1',
        url: '/forms/form-control'
      },
      {
        name: 'Opcion 2',
        url: '/forms/select'
      }
    ]
  },
  {
    name: 'Menu 4',
    url: '/charts',
    iconComponent: { name: 'cil-chart-pie' }
  },

    {
    name: 'Reportes',
    url: '/reportes',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Reportes Generales',
        url: '/reportes/reportesGenerales'
      },
      {
        name: 'Reportes Examenes Clinicos',
        url: '/reportes/reportesExamenesClinicos'
      },
            {
        name: 'Reportes Estadisticos',
        url: '/reportes/reportesEstadisticos'
      },
       {
        name: 'Reportes Epidemiológicos',
        url: '/reportes/reportesEpidemiologicos'
      }
    ]
  },
  {
    name: 'Pacientes',
    //url: '/pacientes',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Registro de pacientes',
        url: '/pacientes'
      },
      {
        name: 'Opcion 2',
        url: '/pacientes'
      }
    ]
  },

  {
    title: true,
    name: 'Extras'
  },
  {
    name: 'Pages',
    url: '/login',
    iconComponent: { name: 'cil-star' },
    children: [
      {
        name: 'Login',
        url: '/login'
      },
      {
        name: 'Register',
        url: '/register'
      },
      {
        name: 'Error 404',
        url: '/404'
      },
      {
        name: 'Error 500',
        url: '/500'
      }
    ]
  },
];
