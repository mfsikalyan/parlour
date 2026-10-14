import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { themePresets, getThemeCssVariables, ThemePreset } from "../config/theme";
import { getHeaderNav } from "../config/navigation";

describe("Theme System & Rebranding Verification", () => {
  it("should have all documented theme presets available", () => {
    const requiredPresets = ["luxury-gold", "rose-blush", "barbershop-classic", "modern-botanical"];
    for (const key of requiredPresets) {
      assert.ok(themePresets[key], `Preset ${key} must exist`);
      assert.ok(themePresets[key].colors.background, `${key} must define background color`);
      assert.ok(themePresets[key].colors.primary, `${key} must define primary color`);
    }
  });

  it("should generate all CSS custom properties for any theme preset", () => {
    const vars = getThemeCssVariables(themePresets["rose-blush"]);

    assert.equal(vars["--color-background"], "#fffaf7");
    assert.equal(vars["--color-primary"], "#c86d7c");
    assert.ok(vars["--font-heading"]);
    assert.ok(vars["--font-body"]);
    assert.ok(vars["--border-radius"]);
  });

  it("should allow a second brand preset to be defined and applied with zero UI edits", () => {
    // Simulate a new barbershop brand: "The Heritage Barber Lounge"
    const secondBrandPreset: ThemePreset = {
      id: "heritage-barber",
      name: "The Heritage Barber Lounge",
      description: "Vintage leather, copper, and dark walnut for classic gentlemen's lounge.",
      fontHeading: "'Oswald', sans-serif",
      fontBody: "'Inter', sans-serif",
      borderRadius: "0.25rem",
      containerWidth: "1200px",
      colors: {
        background: "#0f0e0c",
        surface: "#181714",
        surfaceSubtle: "#22201b",
        surfaceElevated: "#2d2a24",
        text: "#ede9e1",
        textMuted: "#9c9689",
        textInverse: "#0f0e0c",
        primary: "#c88242",
        primaryHover: "#b67234",
        primaryForeground: "#0f0e0c",
        secondary: "#2c2822",
        secondaryHover: "#3d3830",
        secondaryForeground: "#ede9e1",
        accent: "#df9b5a",
        accentSubtle: "rgba(200, 130, 66, 0.15)",
        border: "#332e26",
        borderStrong: "#4d463b",
        gold: "#c88242",
        cardBg: "#181714",
        badgeBg: "rgba(200, 130, 66, 0.15)",
        badgeText: "#df9b5a",
      },
    };

    const cssVars = getThemeCssVariables(secondBrandPreset);

    assert.equal(cssVars["--color-primary"], "#c88242");
    assert.equal(cssVars["--color-background"], "#0f0e0c");
    assert.equal(cssVars["--border-radius"], "0.25rem");
  });

  it("should dynamically calculate navigation links based on active feature toggles", () => {
    const nav = getHeaderNav();
    assert.ok(Array.isArray(nav));
    assert.ok(nav.some((item) => item.href === "/services"));
    assert.ok(nav.some((item) => item.href === "/contact"));
  });
});
