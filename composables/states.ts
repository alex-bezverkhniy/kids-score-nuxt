export const useColor = () => useState<string>('color', () => 'pink')
export const useTitle = () => useState<string>('title', () => '')