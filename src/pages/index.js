import products from 'products.json';
import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.css" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Welcome to my ecommerce store !!
          </p>
          <div>

          </div>
        </div>

        <div className={styles.center}>
          <button>
            Electronics

          </button>
          <button>
            Home accessories

          </button>
        </div>
        <script async src="https://cdn.snipcart.com/themes/v3.2.2/default/snipcart.js" />
        <div hidden id="snipcart" data-api-key="ODgyY2EwZDYtNjM5Mi00ZDE4LThhOTEtNDJlYTBiZWYwZjM4NjM4MTI4ODQ3MjIwNDU1NTE0" />
        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={'Preview of ${product.title}'} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>${product.price}</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-price={product.price}
                  >
                    Add to Cart
                  </button>
                </p>
              </div>
            );
          })}
        </div>

      </main>
    </>
  )
}
