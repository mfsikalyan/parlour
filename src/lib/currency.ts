import { brandConfig } from "@/config/brand";

/**
 * Format a numeric amount into localized currency string (e.g. ₹1,800 or ₹18,000)
 */
export function formatCurrency(
  amount: number,
  options?: {
    showSymbol?: boolean;
    showDecimals?: boolean;
    prefixFrom?: boolean;
  }
): string {
  const { showSymbol = true, showDecimals = false, prefixFrom = false } = options || {};

  const formatter = new Intl.NumberFormat(brandConfig.currency.locale, {
    style: "decimal",
    minimumFractionDigits: showDecimals ? 2 : 0,
    maximumFractionDigits: showDecimals ? 2 : 0,
  });

  const formattedNumber = formatter.format(amount);
  const symbol = showSymbol ? brandConfig.currency.symbol : "";
  const prefix = prefixFrom ? "From " : "";

  return `${prefix}${symbol}${formattedNumber}`;
}
