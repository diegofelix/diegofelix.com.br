const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

// "YYYY-MM-DD" é interpretado como UTC por `new Date()`, o que mostra o dia anterior no Brasil.
export const parseLocalDate = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1)
}

/** "15 jun 2025" */
export const formatDate = (dateStr: string): string => {
  const date = parseLocalDate(dateStr)
  return `${date.getDate()} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}

/** "1.2K palavras" / "850 palavras" */
export const formatWords = (words: number): string => {
  const value = words >= 1000 ? `${(words / 1000).toFixed(1)}K` : String(words)
  return `${value} palavras`
}
