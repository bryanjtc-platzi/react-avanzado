import db from '../adapter.js'

function list () {
  return db.get('categories').value()
}

const categoriesModel = list
export default categoriesModel
