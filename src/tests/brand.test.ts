import { describe, it } from "node:test";
import assert from "node:assert/strict";
import { brandConfig } from "../config/brand";
import { formatCurrency } from "../lib/currency";

describe("Brand Configuration & Currency Formatting", () => {
  it("should have complete brand identity and contact information", () => {
    assert.ok(brandConfig.name, "Brand name must be defined");
    assert.ok(brandConfig.shortName, "Short name must be defined");
    assert.ok(brandConfig.tagline, "Tagline must be defined");
    assert.ok(brandConfig.phone.startsWith("+91"), "Phone must have country code");
    assert.ok(brandConfig.whatsappNumber.length >= 10, "WhatsApp number must be valid");
    assert.ok(brandConfig.email.includes("@"), "Email must contain @");
    assert.ok(brandConfig.branches.length >= 1, "Must have at least one branch");
  });

  it("should have valid primary branch with address and map information", () => {
    const primary = brandConfig.branches.find((b) => b.isPrimary) || brandConfig.branches[0];
    assert.ok(primary.name, "Branch name required");
    assert.ok(primary.address, "Branch address required");
    assert.ok(primary.city, "Branch city required");
    assert.ok(primary.phone, "Branch phone required");
    assert.ok(primary.mapEmbedUrl.startsWith("https://"), "Map embed must be secure HTTPS");
  });

  it("should format currency correctly according to Indian numbering system", () => {
    const formatted1800 = formatCurrency(1800);
    assert.equal(formatted1800, "₹1,800");

    const formatted18000 = formatCurrency(18000);
    assert.equal(formatted18000, "₹18,000");

    const formattedWithPrefix = formatCurrency(6500, { prefixFrom: true });
    assert.equal(formattedWithPrefix, "From ₹6,500");
  });
});
