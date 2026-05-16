export type View = 'analytics' | 'orders' | 'menu' | 'inventory';

export interface NavItem {
  id: View;
  label: string;
  icon: string;
}
