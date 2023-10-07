import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import SearchBar from '../components/SearchBar'
import useResults from '../hooks/useResults'
import ResultsList from '../components/ResultsList'

export default function SearchScreen() {
  const [searchApi, results, errorMessage] = useResults()
  const [term, setTerm] = useState("")
  console.log(results)

  const filterResultsByPrice = (price) => {
    return results.filter((result) => {
      return result.price === price
    })
  }
  return (
    <View>
      <SearchBar term={term} onTermChange={setTerm} onTermSubmit={() => searchApi(term)} />
      {errorMessage ? <Text style={{ alignSelf: "center" }}>{errorMessage}</Text> : <><ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice("₺")} />
        <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice("₺₺")} />
        <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice("₺₺₺")} /></>}
      {results.length == 0 ? <Text style={{ alignSelf: "center" }}>Kayıtlı veri bulunamadı</Text> : <><ResultsList title="Ucuz Restoranlar" results={filterResultsByPrice("₺")} />
        <ResultsList title="Uygun Restoranlar" results={filterResultsByPrice("₺₺")} />
        <ResultsList title="Pahalı Restoranlar" results={filterResultsByPrice("₺₺₺")} /></>}

    </View>
  )
}

const styles = StyleSheet.create({})