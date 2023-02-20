
import Head from 'next/head'
import getAllPosts from '../lib/posts'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem';
import data from '../utils/data'
export default function Homc(){
  return (
    <Layout>
   <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
   {data.products.map((product) => (
          <ProductItem
            p={product}
            key={product.slug}
            
          ></ProductItem>
        ))}
    </div>
    </Layout>
  )
}    
/*
const Someobj = {id:"ok",ok:"oo"}
const posts = getAllPosts()
export default function () {
  return (
   <div className={styles.container}>
     <Head><title>Cooking Blog</title></Head>
    <div>
      <h1>
    Hello
    </h1>
    </div>
    <div>{posts.map((p)=>{
      
       return (<BlogPosts key={p.id} data={p.pozt} />)
    })}</div>
    <div>
      <BlogPosts />
    </div>
    <div>Ok</div>
    </div>
  )
}
 
const BlogPosts = (props)=>{
  const {data} = props;
  return (<>
<div>{data}<span>
</span>  This is BlogPost </div>
  </>)
}
*/
