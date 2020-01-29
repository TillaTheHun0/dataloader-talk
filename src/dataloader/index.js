
import { tagByPostId, tagById } from './TagDataloader'
import { postById } from './PostDataloader'

const attachDataloadersToContext = (context, acc) => {
  const newGuy = {
    ...acc
  }

  // pass reference to context, so dataloaders can use other dataloaders
  newGuy.dataloaders = {
    tagByPostId: tagByPostId(newGuy),
    tagById: tagById(newGuy),
    postById: postById(newGuy)
  }

  return newGuy
}

export {
  attachDataloadersToContext,
  tagByPostId
}
