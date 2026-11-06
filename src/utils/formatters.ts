
export const formatTitle = (text: string) =>
  text
    .replace(/-/g, " ")
    .replace(/^./, char => char.toUpperCase());

export const formatNumber = (num: number) => String(num).padStart(2, "0");