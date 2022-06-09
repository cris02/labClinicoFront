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
    name: 'Modulo Administracion',
    url: '/catalogos',
    iconComponent: { name: 'cil-puzzle' },
    children: [
      {
        name: 'Gestion Clinica',
        url: '/catalogos/clinica'
      },
      {
        name: 'Gestion Paises',
        url: '/catalogos/paises'
      },

    ]
  },
  {
    name: 'Estadisticas',
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
    url: '/pacientes',
    iconComponent: { name: 'cil-notes' },
    children: [
      {
        name: 'Registro de pacientes',
        url: '/pacientes/listadoPacientes'
      },
      {
        name: 'Opcion 2',
        url: '/pacientes/detallePaciente/1/'
      }
    ]
  },
  
];
