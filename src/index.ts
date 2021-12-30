import { log } from "console";
import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import Product from "./entity/Product";
import { User } from "./entity/User";

createConnection().then(async connection => {

  const userRepository = getRepository(User)
  const productRepository = getRepository(Product)
  const user = new User()
  user.firstName = "Quan1"
  user.lastName = "Van1"
  user.age = 30
  user.description = "handsome1"
  await userRepository.save(user)

  const user1 = new User()
  user1.firstName = "Quan2"
  user1.lastName = "Van2"
  user1.age = 30
  user1.description = "handsome2"
  await userRepository.save(user1)

//  const linh = await userRepository.find({firstName:"Linh"})
//   await userRepository.remove(linh)






  // const user= await userRepository.findOne(3)
  // user.age=30
  // const linh = await userRepository.save(user)
  // console.log(linh);


  //sua
  // const nam= await userRepository.findOne(3)
  // user.age=30
  // const tai = await userRepository.save(user)
  // console.log(tai);


  // const linh = await userRepository.findOne({ firstName: "Linh" });
  // await userRepository.remove(linh);

  // const long = await userRepository.createQueryBuilder().where({ age: 20 }).getMany()
  // console.log(long);

  //const product = new Product()
  // product.name = 'iPhone13'
  // product.price = 1300
  // product.old = 20
  // await productRepository.save(product)


//  const product= await productRepository.findOne(3)
//   product.old=40
//  const long = await productRepository.save(product)
// console.log(long);

  // const pr = await productRepository.find()
  // console.log(pr);

  // const prs = await productRepository.findOne(1)
  // console.log(prs);

  //  const ab = await userRepository.delete(6)
  //  console.log(ab);



  //console.log(`Product ${product.name} (${product.id}) added`);

  // const name="linh"
  // const long=await productRepository.save(name)

  // TODO try here
  // const users = await userRepository.find()

  // console.log(users);

}).catch(error => console.log(error));
