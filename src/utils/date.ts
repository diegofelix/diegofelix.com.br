const MONTHS = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez']

// "YYYY-MM-DD" é interpretado como UTC por `new Date()`, o que mostra o dia anterior no Brasil.
export const parseLocalDate = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1)
}

/** "15 jun 2025", no formato do `ls -l` */
export const formatDate = (dateStr: string): string => {
  const date = parseLocalDate(dateStr)
  const day = String(date.getDate()).padStart(2, '0')
  return `${day} ${MONTHS[date.getMonth()]} ${date.getFullYear()}`
}
