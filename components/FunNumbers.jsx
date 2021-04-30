export const now = new Date().getTime()
export const grandOpening = new Date(2019, 1, 5)
export const mSecsInBiz = now - grandOpening
export const yearsInBiz = mSecsInBiz / 31536000000
export const numOfStudents = yearsInBiz * 48 * 2
export const numOfShows = yearsInBiz * 16
export const numOfLessons = (mSecsInBiz / 48 / 6 / 18 / 60000) * numOfStudents
