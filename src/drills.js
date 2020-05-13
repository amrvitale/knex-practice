require('dotenv').config()
const knex = require('knex')


const knexInstance = knex({
    client: 'pg',
    connection: process.env.DB_URL,
  });

  function getAllItemsWithText(searchTerm) {
  knexInstance
    .select('name')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result)
    })
}

getAllItemsWithText('burg')

function getPaginatedItems(pageNumber) {
  const productsPerPage = 6
  const offset = productsPerPage * (pageNumber - 1)
  knexInstance
    .select('*')
    .from('shopping_list')
    .limit(productsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result)
    })
}

getPaginatedItems(2)

function getItemsAddedAfterDate(daysAgo) {
  knexInstance
    .select('*')
    .from('shopping_list')
    .where(
        'date_added',
        '>',
        knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log(result)
    })
}

getItemsAddedAfterDate(2)

function getTotalCostPerCategory() {
  knexInstance
    .select('category')
    .sum('price')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log(result)
    })
}
  
getTotalCostPerCategory()