import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";
import Post from "./entity/Post";
import Name from "./entity/Name";
import Address from "./entity/Address";

createConnection().then(async connection => {

  const userRepository = getRepository(User)
  const postRepository = getRepository(Post)



  const user = new User()
  user.name = new Name("Cuong", "Nguyen")
  user.dateOfBirth = new Date("2021/05/20")
  user.description = "bad"
  user.address = new Address("VietNam", "ThanhHoa", "DongThang")
  await userRepository.save(user)
  console.log(user);
  const users = await userRepository.findOne(13)
  console.log(users.address.toString());


  //   const user =new User()
  //   user.name =new Name("dinh", "Linh")
  //   user.dateOfBirth =new Date("2022/05/25")
  //   user.description ="handsome"

  //  const users = await userRepository.save(user)
  //  console.log(users);

  // const posts = await postRepository.findOne(2)
  //await postRepository.delete(posts)

  // const author = await userRepository.findOne(12)
  // const post = new Post()
  // post.title = "Dinh Viet Linh"
  // post.content = " Rat la dep trai"
  // post.author = author
  // await postRepository.save(post)
  // console.log(post);




  // const usesrs = await userRepository.findOne(12,{relations:["posts"]})
  // console.log(usesrs);





}).catch(error => console.log(error));
