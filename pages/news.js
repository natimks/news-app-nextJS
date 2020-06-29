import { useState } from 'react'
import Router from 'next/router'
import Layout from '../components/Layout'
import fetch from 'isomorphic-fetch'

const News = ({ news }) => {
  const [searchQuery, setSearchQuery] = useState('react')

  const handleSubmit = (e) => {
    e.preventDefault()
    Router.push(`/news/?searchTerm=${searchQuery}`)
  }

  const searchForm = () => (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button>Search</button>
    </form>
  )
  return (
    <Layout title='News'>
      <div>
        {searchForm()}
        <hr />
        {news.map((item) => (
          <p key={item.id}>
            <a href={item.url}>{item.title}</a>
          </p>
        ))}
      </div>
    </Layout>
  )
}

News.getInitialProps = async ({ query }) => {
  let news = []
  try {
    const res = await fetch(
      `https://hn.algolia.com/api/v1/search?query=${
        query.searchTerm || 'react'
      }`
    )
    news = await res.json()
    return {
      news: news.hits,
    }
  } catch (err) {
    console.log('ERROR', err)
    alert('Ocorreu um erro na sua consulta, tente novamente')
    return news
  }
}

export default News
