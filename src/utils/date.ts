const MONTHS = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']

// "YYYY-MM-DD" é interpretado como UTC por `new Date()`, o que mostra o dia anterior no Brasil.
export const parseLocalDate = (dateStr: string): Date => {
  const [year, month, day] = dateStr.split('-').map(Number)
  return new Date(year ?? 0, (month ?? 1) - 1, day ?? 1)
}

export const formatDate = (dateStr: string): string => {
  const date = parseLocalDate(dateStr)
  return `${date.getDate()} ${MONTHS[date.getMonth()]}, ${date.getFullYear()}`
}
