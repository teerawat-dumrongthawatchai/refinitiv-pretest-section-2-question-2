import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import styles from '../styles/index.module.scss'

import Table from '../components/Table'

export default function Home({ data }) {
  const [searchText, setSearchText] = useState("")
  const [items, setItems] = useState(data)

  useEffect(() => {
    setItems(data.filter(item => item.toLowerCase().indexOf(searchText.toLowerCase()) >= 0))
  }, [searchText])

  return (
    <>
      <Head>
        <title>Refinitiv Pre-Test : Section 2 - Question 2</title>
      </Head>
      <section className={styles.container}>
        <div className={styles.filter_container}>
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Filter By</h5>
              <div className="form-group">
                <label htmlFor="search_text">Text</label>
                <input type="text" className="form-control" id="search_text" onChange={e => setSearchText(e.target.value)} />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.content_container}>
          <Table data={items} />
        </div>
      </section>
    </>
  )
}

export async function getStaticProps() {
  const res = await axios.get('https://api.publicapis.org/categories')
    .catch(err => console.error(err))

  return {
    props: {
      data: res.data
    }
  }
}