//SQL
import sql from './connection'

//MODELS
import User from './model/User'
import Company from './model/Company'

//SEEDS
export default async () => {
  let loc = await User.create({
    first_name: 'John',
    last_name: 'Hancock'
  })

  loc = await User.create({
    first_name: 'Siapa',
    last_name: 'Saja'
  })

  loc = await Company.create({
    name: 'Company 1',
    address: 'alamatnya 1'
  })

  // loc = await User.update({company_id: 1}, {where: {id: 1}})

  // loc = await User.findById(1, {
  //   attributes: ['first_name'],
  //   include: [Company]
  // }) 
  // console.log(JSON.stringify(loc))
}