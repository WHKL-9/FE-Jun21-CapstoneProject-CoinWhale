import React from 'react'
import getCoinData from '../apis/coinGeckoSearch'
import {useEffect} from 'react'

export default function Homepage() {

    useEffect(() => {
        getCoinData()
      }, [])

    return (
       <div>
            <div>
                test
            </div>
                <div>
                test
            </div>
                <div>
                test
            </div>
                <div>
                test
            </div>
                <div>
                test
            </div>
                <div>
                test
            </div>
       </div>
    )
}
