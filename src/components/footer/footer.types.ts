// Single footer link
export interface FooterLink {
  label: string;
  href: string;
}

// One vertical column of footer links
export interface FooterColumn {
  id: string;
  links: FooterLink[];
}