import data from "../utils/data";
import Link from "next/link";
export default function ProductItem({p}){
  
    return(<> 
     <div className="card">
        <Link href={`/product/${p.slug}`}>
         <img 
            src={p.image} 
            alt={p.name}
            className="rounded shadow"
        />
        </Link>

        <div className= "flex flex-col items-center justify-center p-5">
            <Link href={`product/${p.slug}`} >
                <h2 className="text-lg">{p.name}</h2>
                <p className="mb-2">{p.brand}</p>
                <p>{`${p.price} $`}</p>
                <button className="primary-button">Add to Cart</button>
            </Link>
        </div>
     </div>
          </>)
}