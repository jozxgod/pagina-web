import { useState, useEffect } from 'react'

function useFetch(url) {
  const [data, setData] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (!url) return
    setCargando(true)
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setData(data)
        setCargando(false)
      })
      .catch(err => {
        setError(err)
        setCargando(false)
      })
  }, [url])

  return { data, cargando, error }
}

export default useFetch