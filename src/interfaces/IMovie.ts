export default interface IMovie {
  key: string
  title?: string
  poster?: string
  backdrop?: string
  rating?: number
  description?: string
  releaseDate?: Date
  genres?: string[]
  runtime?: number
}
