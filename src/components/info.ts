export enum IconType {
  INSERT_CHART,
  PIE_CHART,
  SHOW_CHART,
  MULTILINE_CHART,
  PERSON
}

export const info = [
  {
    name: 'Histogram',
    icon: IconType.INSERT_CHART,
    route: 'bargraph'
  },
  {
    name: 'Pie Chart',
    icon: IconType.PIE_CHART,
    route: 'areagraph'
  },
  {
    name: 'Line Graph',
    icon: IconType.SHOW_CHART,
    route: 'linegraph'
  },
  {
    name: 'Others',
    icon: IconType.MULTILINE_CHART,
    route: 'piegraph'
  },
  {
    name: 'Fake Login',
    icon: IconType.PERSON,
    route: 'Login'
  }
];