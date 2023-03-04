import React, { useContext } from 'react'
import { context } from '../../context/context'
import Searchbar from '../searchbar/Searchbar'
import gif from '../loading/cargando-loading.gif'

const SearchedResult = () => {
  const { photoData, loading } = useContext(context)
  // console.log(photoData)


  if (!loading) {
    return (
      <div id='loading'>
        <img src={gif} alt="loading" />
      </div>
    )
  }

  return (
    <div>
      <Searchbar />
      <div id="galary">
        {photoData?.photos?.photo?.map((singledata) =>
          <img key={singledata.id}
            src={`https://live.staticflickr.com/${singledata.server}/${singledata.id}_${singledata.secret}.jpg`}
            alt={`${singledata?.title}`} />
        )}
      </div>
    </div>
  )
}

export default SearchedResult
