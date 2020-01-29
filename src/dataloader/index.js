
import { tagByPostId } from './TagDataloader'

const attachDataloadersToContext = (context, acc) => ({
  ...acc,
  dataloaders: {
    tagByPostId: tagByPostId()
  }
})

export {
  attachDataloadersToContext,
  tagByPostId
}
