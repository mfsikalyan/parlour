/**
 * Theme & Design System Configuration
 * =====================================================================
 * Defines color tokens, font tokens, borders, and brand presets.
 * Presets allow one-click switching between aesthetics:
 * - luxury-gold: High-end luxury unisex salon & bridal studio
 * - rose-blush: Soft feminine aesthetic for beauty parlours & nail bars
 * - barbershop-classic: Deep mahogany, warm amber, and classic dark tones
 * - modern-botanical: Clean sage green, organic, spa & wellness
 * - royal-emerald: Rich jewel tones for bridal couture studios
 * =====================================================================
 */

export interface ThemeColors {
  background: string;
  surface: string;
  surfaceSubtle: string;
  surfaceElevated: string;
  text: string;
  textMuted: string;
  textInverse: string;
  primary: string;
  primaryHover: string;
  primaryForeground: string;
  secondary: string;
  secondaryHover: string;
  secondaryForeground: string;
  accent: string;
  accentSubtle: string;
  border: string;
  borderStrong: string;
  gold: string;
  cardBg: string;
  badgeBg: string;
  badgeText: string;
}

export interface ThemePreset {
  id: string;
  name: string;
  description: string;
  fontHeading: string;
  fontBody: string;
  borderRadius: string;
  containerWidth: string;
  colors: ThemeColors;
}

export const themePresets: Record<string, ThemePreset> = {
  "luxury-gold": {
    id: "luxury-gold",
    name: "Luxury Gold & Charcoal (Default)",
    description: "Opulent champagne gold, warm ivory, deep espresso & charcoal for luxury unisex salons.",
    fontHeading: "'Cinzel', 'Playfair Display', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', 'Inter', -apple-system, sans-serif",
    borderRadius: "0.5rem", // 8px
    containerWidth: "1280px",
    colors: {
      background: "#0c0d10",
      surface: "#14161b",
      surfaceSubtle: "#1b1e26",
      surfaceElevated: "#232733",
      text: "#f5f3ef",
      textMuted: "#a0a4b0",
      textInverse: "#0c0d10",
      primary: "#d4af37", // Champagne gold
      primaryHover: "#c59f2c",
      primaryForeground: "#0c0d10",
      secondary: "#2c303d",
      secondaryHover: "#393e4f",
      secondaryForeground: "#f5f3ef",
      accent: "#e6ca65",
      accentSubtle: "rgba(212, 175, 55, 0.12)",
      border: "#262a36",
      borderStrong: "#3d4356",
      gold: "#d4af37",
      cardBg: "#14161b",
      badgeBg: "rgba(212, 175, 55, 0.15)",
      badgeText: "#e6ca65",
    },
  },

  "rose-blush": {
    id: "rose-blush",
    name: "Rose Blush & Terracotta",
    description: "Feminine, graceful blush pink and terracotta palette for beauty parlours & nail lounges.",
    fontHeading: "'Cormorant Garamond', 'Playfair Display', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', -apple-system, sans-serif",
    borderRadius: "0.75rem",
    containerWidth: "1280px",
    colors: {
      background: "#fffaf7",
      surface: "#ffffff",
      surfaceSubtle: "#fdf3ee",
      surfaceElevated: "#fbe8df",
      text: "#2c2020",
      textMuted: "#796666",
      textInverse: "#ffffff",
      primary: "#c86d7c", // Rose mauve
      primaryHover: "#b65a6a",
      primaryForeground: "#ffffff",
      secondary: "#f4dede",
      secondaryHover: "#ecd1d1",
      secondaryForeground: "#4a2a30",
      accent: "#d97d64", // Warm terracotta
      accentSubtle: "rgba(200, 109, 124, 0.12)",
      border: "#ebd7d0",
      borderStrong: "#d9bbb2",
      gold: "#c86d7c",
      cardBg: "#ffffff",
      badgeBg: "rgba(200, 109, 124, 0.12)",
      badgeText: "#963d4e",
    },
  },

  "barbershop-classic": {
    id: "barbershop-classic",
    name: "Classic Barbershop & Vintage Amber",
    description: "Rich leather, warm copper, dark walnut and vintage typography for men's grooming lounges.",
    fontHeading: "'Oswald', 'Montserrat', sans-serif",
    fontBody: "'Inter', sans-serif",
    borderRadius: "0.25rem",
    containerWidth: "1280px",
    colors: {
      background: "#111111",
      surface: "#1a1a1a",
      surfaceSubtle: "#242424",
      surfaceElevated: "#2e2e2e",
      text: "#f0ece1",
      textMuted: "#9e9a90",
      textInverse: "#111111",
      primary: "#d97736", // Warm amber copper
      primaryHover: "#c56728",
      primaryForeground: "#111111",
      secondary: "#2c2824",
      secondaryHover: "#3d3832",
      secondaryForeground: "#f0ece1",
      accent: "#e5a158",
      accentSubtle: "rgba(217, 119, 54, 0.15)",
      border: "#332e28",
      borderStrong: "#4d463d",
      gold: "#d97736",
      cardBg: "#1a1a1a",
      badgeBg: "rgba(217, 119, 54, 0.16)",
      badgeText: "#f0a66d",
    },
  },

  "modern-botanical": {
    id: "modern-botanical",
    name: "Botanical Sage & Pure Linen",
    description: "Restorative eucalyptus sage, soft cream, and stone for wellness spas & organic salons.",
    fontHeading: "'Playfair Display', Georgia, serif",
    fontBody: "'Plus Jakarta Sans', sans-serif",
    borderRadius: "0.625rem",
    containerWidth: "1280px",
    colors: {
      background: "#f8f9f6",
      surface: "#ffffff",
      surfaceSubtle: "#eff2ec",
      surfaceElevated: "#e2e7dd",
      text: "#1c261e",
      textMuted: "#5e6961",
      textInverse: "#ffffff",
      primary: "#446550", // Deep sage green
      primaryHover: "#375442",
      primaryForeground: "#ffffff",
      secondary: "#dae3dc",
      secondaryHover: "#c8d4cb",
      secondaryForeground: "#1c261e",
      accent: "#a37a4c", // Warm bronze
      accentSubtle: "rgba(68, 101, 80, 0.12)",
      border: "#d5ded6",
      borderStrong: "#b5c4b8",
      gold: "#a37a4c",
      cardBg: "#ffffff",
      badgeBg: "rgba(68, 101, 80, 0.12)",
      badgeText: "#2f4b39",
    },
  },
};

// The currently active theme preset
export const activeThemePresetKey = "luxury-gold";
export const activeTheme: ThemePreset = themePresets[activeThemePresetKey];

/**
 * Returns CSS custom properties mapped from theme configuration
 */
export function getThemeCssVariables(theme: ThemePreset = activeTheme): Record<string, string> {
  return {
    "--color-background": theme.colors.background,
    "--color-surface": theme.colors.surface,
    "--color-surface-subtle": theme.colors.surfaceSubtle,
    "--color-surface-elevated": theme.colors.surfaceElevated,
    "--color-text": theme.colors.text,
    "--color-text-muted": theme.colors.textMuted,
    "--color-text-inverse": theme.colors.textInverse,
    "--color-primary": theme.colors.primary,
    "--color-primary-hover": theme.colors.primaryHover,
    "--color-primary-foreground": theme.colors.primaryForeground,
    "--color-secondary": theme.colors.secondary,
    "--color-secondary-hover": theme.colors.secondaryHover,
    "--color-secondary-foreground": theme.colors.secondaryForeground,
    "--color-accent": theme.colors.accent,
    "--color-accent-subtle": theme.colors.accentSubtle,
    "--color-border": theme.colors.border,
    "--color-border-strong": theme.colors.borderStrong,
    "--color-gold": theme.colors.gold,
    "--color-card-bg": theme.colors.cardBg,
    "--color-badge-bg": theme.colors.badgeBg,
    "--color-badge-text": theme.colors.badgeText,
    "--font-heading": theme.fontHeading,
    "--font-body": theme.fontBody,
    "--border-radius": theme.borderRadius,
    "--container-max-width": theme.containerWidth,
  };
}
